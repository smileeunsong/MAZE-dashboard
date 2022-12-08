const userService = require('../services/userService');

// 코드 발급, 문자 발송
const sendCode = async (req, res) => {
  const { userPhoneNum } = req.body;

  try {
    await userService.sendCode(userPhoneNum);

    res.status(200).json({
      message : 'CODE_SENT'
    })
  } catch (error) {
    const err = error.statusCode || 500;
    res.status(err).json({ message : error.message });
  }
};

// 코드 비교
const compareAuthCode = async (req, res) => {
  const { userPhoneNum, userCode } = req.body;

  try {
    await userService.compareAuthCode(userPhoneNum, userCode);

    res.status(200).json({
      message : 'AUTHENTICATION_SUCCESS'
    })
  } catch (error) {
    const err = error.statusCode || 500;
    res.status(err).json({ message : error.message });
  }
};

// 회원가입 : 회원 정보 DB 저장 후 생성된 회원 id로 회원 정보 반환
const signUp = async (req, res) => {
  const {
    userName,
    userPhoneNum,
    email,
    password,
  } = req.body;

  try {
    const userId = await userService.signUp(userName, userPhoneNum, email, password);
    const userInfo = await userService.getUserById(userId);

    res.status(201).json({
      message : 'USER_CREATED',
      data : userInfo
    })
  } catch (error) {
    const err = error.statusCode || 500;
    res.status(err).json({ message : error.message });
  }
};

const checkEmail = async (req, res) => {
  const { email } = req.body;

  try {
    await userService.checkEmail(email);
    
    res.status(200).json({
      message : 'EMAIL_AVAILABLE'
    })
  } catch (error) {
    const err = error.statusCode || 500;
    res.status(err).json({ message : error.message });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const accessToken = await userService.signIn(email, password);

    res.status(200).json({ 
      message : 'LOGIN_SUCCESS',
      accessToken })
    } catch (error) {
      const err = error.statusCode || 500;
      res.status(err).json({ message : error.message });
    }
};

const kakaoSignIn = async (req, res) => {
  const { kakaoAccessToken } = req.body;

  try {
    const kakaoUserInfo = await userService.getKakaoUserInfo(kakaoAccessToken);
    await userService.storeKakaoUserInfo(kakaoUserInfo);

    const token = await userService.generateToken(kakaoUserInfo);

    return res.status(200).json({ 
      message : 'LOGIN_SUCCESS',
      accessToken : token
    });
  } catch (error) {
    const err = error.statusCode || 500;
    res.status(err).json({ message : error.message });
  }
};

const googleSignIn = async (req, res) => {
  const { googleAccessToken } = req.body;

  try {
    const googleUserInfo = await userService.getGoogleUserInfo(googleAccessToken);
    await userService.storeGoogleUserInfo(googleUserInfo);

    const token = await userService.generateToken(googleUserInfo);

    return res.status(200).json({
      message : 'LOGIN_SUCCESS',
      accessToken : token
    });
  } catch (error) {
    const err = error.statusCode || 500;
    res.status(err).json({ message : error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();

    return res.status(200).json({
      message : 'SUCCESS',
      data : users
    });
  } catch (error) {
    const err = error.statusCode || 500;
    res.status(err).json({ message : error.message });
  }
};

const getUserById = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await userService.getUserById(userId);
    
    return res.status(200).json({
      message : 'SUCCESS',
      data : user
    })
  } catch (error) {
    const err = error.statusCode || 500;
    res.status(err).json({ message : error.message });
  }
};

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
