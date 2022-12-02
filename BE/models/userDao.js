const { client, User } = require('../models');

// userPhoneNum과 authCode 키 밸류 형식으로 redis 저장
// 인증번호 유효시간 3분, 인증번호가 여러 번 발송된 경우에는 가장 최근 발송된 번호를 유저가 사용하도록 겹쳐쓰기 허용
const saveAuthCode = async (userPhoneNum, authCode) => {
  await client.set(userPhoneNum, authCode, {
    EX : 60 * 3,
    NX : false
  })
}

const getAuthCode = async (userPhoneNum) => {
  return await client.get(userPhoneNum);
}

const delAuthCode = async (userPhoneNum) => {
  await client.del(userPhoneNum);
}

// 회원 정보 DB 저장 후 해당 회원 id 반환
const addUser = async (userName, userPhoneNum, email, hashedPassword) => {
  const user = await User.create({
    name : userName,
    phone : userPhoneNum,
    email : email,
    password : hashedPassword
  })

  return user.dataValues.id;
}

const getUserIdByKakaoId = async (kakaoId) => {
  const result = await User.findOne({
    where: { kakaoId: kakaoId }
  });

  if (!result) {
    return false;
  }

  return result.dataValues.id;
}

const storeKakaoUserInfo = async (kakaoId, email, nickname, profileImageUrl) => {
 await User.create({
  kakaoId : kakaoId,
  email : email,
  name : nickname,
  profileImageUrl : profileImageUrl
 });
}

const getUserIdByGoogleId = async (googleId) => {
  const result = await User.findOne({
    where: { googleId: googleId }
  });

  if (!result) {
    return false;
  }

  return result.dataValues.id;
}

const storeGoogleUserInfo = async (googleId, email, name, profileImageUrl) => {
  await User.create({
    googleId : googleId,
    email : email,
    name : name,
    profileImageUrl : profileImageUrl
   });
}

const getUsers = async () => {
  const users = await User.findAll();

  return users;
}

const getUserById = async (userId) => {
  const userInfo = await User.findOne({
    where: { id: userId }
  });

  return userInfo;
}

const getUserByEmail = async (email) => {
  const userInfo = await User.findOne({
    where: { email: email }
  });

  return userInfo;
}

module.exports = {
  saveAuthCode,
  getAuthCode,
  delAuthCode,
  addUser,
  getUserIdByKakaoId,
  storeKakaoUserInfo,
  getUserIdByGoogleId,
  storeGoogleUserInfo,
  getUsers,
  getUserById,
  getUserByEmail,
}