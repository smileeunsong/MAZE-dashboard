const userService = require('../services/userService');
const { catchAsync } = require('../utils/error');

// 코드 발급, 문자 발송
const sendCode = catchAsync(async (req, res) => {
  const { userPhoneNum } = req.body;
  await userService.sendCode(userPhoneNum);

  res.status(200).json({
    message : 'CODE_SENT'
  })
});

// 코드 비교
const compareAuthCode = catchAsync(async (req, res) => {
  const { userPhoneNum, userCode } = req.body;

  await userService.compareAuthCode(userPhoneNum, userCode);

  res.status(200).json({
    message : 'AUTHENTICATION_SUCCESS'
  })
});

// 회원가입 : 회원 정보 DB 저장 후 생성된 회원 id로 회원 정보 반환
const signUp = catchAsync(async (req, res) => {
  const {
    userName,
    userPhoneNum,
    email,
    password,
  } = req.body;

  const userId = await userService.signUp(userName, userPhoneNum, email, password);
  const userInfo = await userService.getUserById(userId);

  res.status(201).json({
    message : 'USER_CREATED',
    data : userInfo
  })
});

const checkEmail = catchAsync(async (req, res) => {
  const { email } = req.body;

  await userService.checkEmail(email);
  
  res.status(200).json({
    message : 'EMAIL_AVAILABLE'
  })
})

const signIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const accessToken = await userService.signIn(email, password);

  res.status(200).json({ 
    message : 'LOGIN_SUCCESS',
    accessToken })
});

const kakaoSignIn = async (req, res) => {
  const { kakaoAccessToken } = req.body;

  const kakaoUserInfo = await userService.getKakaoUserInfo(kakaoAccessToken);
  await userService.storeKakaoUserInfo(kakaoUserInfo);

  const token = await userService.generateToken(kakaoUserInfo);

  return res.status(200).json({ 
    message : 'LOGIN_SUCCESS',
    accessToken : token
  });
}

const googleSignIn = async (req, res) => {

}

const getUsers = async (req, res) => {
  const users = await userService.getUsers();

  return res.status(200).json({
    message : 'SUCCESS',
    data : users
  });
}

const getUserById = async (req, res) => {
  const userId = req.user.id;

  const user = await userService.getUserById(userId);

  return res.status(200).json({
    message : 'SUCCESS',
    data : user
  })
}

module.exports = {
  sendCode,
  compareAuthCode,
  signUp,
  checkEmail,
  signIn,
  kakaoSignIn,
  googleSignIn,
  getUsers,
  getUserById,
}
