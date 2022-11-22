const userDao = require('../models/userDao');
const CryptoJS = require('crypto-js');
const axios = require('axios');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// 코드 발급, 문자 발송
const sendCode = async (userPhoneNum) => {

  // 현재 시각
  const timeStamp = String(Date.now());

  // 6자리 난수 생성
  let authCode = '';
  for (let i = 0; i < 6; i++) {
    authCode += parseInt(Math.random() * 10);
  };

  // SENSE API headers에 필요한 signature 생성
  function makeSignature() {
    const space = ' ';
    const newLine = '\n';
    const method = 'POST';
    const url = `/sms/v2/services/${process.env.SMS_SERVICE_ID}/messages`;
    const accessKey = process.env.SMS_ACCESS_KEY;
    const secretKey = process.env.SMS_SECRET_KEY;
    
    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
    hmac.update(method);
    hmac.update(space);
    hmac.update(url);
    hmac.update(newLine);
    hmac.update(timeStamp);
    hmac.update(newLine);
    hmac.update(accessKey);
    
    const hash = hmac.finalize();
    
    return hash.toString(CryptoJS.enc.Base64);
  };

  const signature = String(makeSignature())

  // naver SENSE SMS 발송 API 요청
  await axios({
    method: 'POST',
    url: `https://sens.apigw.ntruss.com/sms/v2/services/${process.env.SMS_SERVICE_ID}/messages`,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'x-ncp-apigw-timestamp': timeStamp,
      'x-ncp-iam-access-key': process.env.SMS_ACCESS_KEY,
      'x-ncp-apigw-signature-v2': signature
    },
    data: {
      'type': process.env.SMS_TYPE,
      'from': process.env.SMS_FROM_NUMBER,
      'content': '[메이즈]',
      'messages': [
        {
          'to': userPhoneNum,
          'subject': '[메이즈]',
          'content': `[메이즈] 인증번호 [${authCode}]를 입력해주세요.`,
        }
      ]
    }
  })

  // userPhoneNum과 authCode 키 밸류 형식으로 redis 저장
  await userDao.saveAuthCode(userPhoneNum, authCode)
}

// 코드 비교
const compareAuthCode = async (userPhoneNum, userCode) => {

  // 서버 redis에 저장된 authCode와 클라이언트에서 받은 userCode를 비교
  const authCode = await userDao.getAuthCode(userPhoneNum);

  // authCode와 userCode가 동일하면 해당 키 밸류를 db에서 삭제, 틀리면 throw error
  if (authCode === userCode) {
    await userDao.delAuthCode(userPhoneNum);
  } else {
    const error = new Error('AUTHENTICATION_FAILED');
    error.statusCode = 401;

    throw error;
  }
}

// bcrypt를 이용하여 비밀번호 hashing 하는 함수
const hashPassword = async (plaintextPassword) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  return await bcrypt.hash(plaintextPassword, salt);
}

// 회원 정보 DB 저장 후 해당 회원 id 반환
const signUp = async (userName, userPhoneNum, email, password) => {

  // 기대 요청값들이 하나라도 들어오지 않았을 경우
  if ( !userName || !userPhoneNum || !email || !password ) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;

    throw error;
  }

  // 해당 email로 가입된 회원이 존재하는 경우
  const user = await userDao.getUserByEmail(email);
  if (user) {
    const error = new Error('ALREADY_REGISTED_USER');
    error.statusCode = 400;

    throw error;
  }

  const hashedPassword = await hashPassword(password);

  const userId = await userDao.addUser(userName, userPhoneNum, email, hashedPassword);

  return userId;
}

// 로그인
const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);

  // 해당 email을 가진 유저가 없을 경우
  if (!user) {
    const error = new Error('NO_USER');
    error.statusCode = 404;

    throw error;
  }

  // DB에 저장된 hashed password와 유저가 입력한 password를 비교
  const match = await bcrypt.compare(password, user.password);

  // email은 맞지만 password가 틀린 경우
  if (!match) {
    const error = new Error('WRONG_PASSWORD');
    error.statusCode = 401;

    throw error;
  }

  // email과 password가 맞으면 JWT를 생성 후 반환
  const accessToken = jwt.sign({ id : user.id }, process.env.JWT_SECRET,
    {
      algorithm: process.env.ALGORITHM, 
			expiresIn: process.env.JWT_EXPIRES_IN 
    }
  );

  return accessToken;
}

// 전체 회원 정보 반환
const getUsers = async () => {
  return await userDao.getUsers();
}

// 회원 id로 정보 반환
const getUserById = async (userId) => {
  const userInfo = await userDao.getUserById(userId);
  return userInfo;
}

module.exports = {
  sendCode,
  compareAuthCode,
  signUp,
  signIn,
  getUsers,
  getUserById,
}