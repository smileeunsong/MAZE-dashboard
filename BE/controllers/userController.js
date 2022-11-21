const userService = require('../services/userService')

// 코드 발급, 문자 발송
const sendCode = async (req, res) => {
  try {
    const { userPhoneNum } = req.body;
    await userService.sendCode(userPhoneNum);

    res.status(200).json({
      message : 'CODE_SENT'
    });  
  } catch (error) {
    res.status(error.statusCode).json({
      message : error.message
    })
  }
}

// 코드 비교
const compareAuthCode = async (req, res) => {
  try {
    const { userPhoneNum, userCode } = req.body;

    await userService.compareAuthCode(userPhoneNum, userCode);

    res.status(200).json({
      message : 'AUTHENTICATION_SUCCESS'
    })
  } catch (error) {
    res.status(error.statusCode).json({
      message : error.message
    })
  }
}

// 회원가입 : 회원 정보 DB 저장 후 생성된 회원 id로 회원 정보 반환
const signUp = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(error.statusCode).json({
      message : error.message
    })
  }
}

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const accessToken = await userService.signIn(email, password);

    res.status(200).json({ accessToken })
  } catch (error) {
    res.status(error.statusCode).json({
      message : error.message
    })
  }
}

const getUsers = async (req, res) => {
  const users = await userService.getUsers();

  return res.status(200).json({
    message : 'SUCCESS',
    data : users
  });
}

const getUserById = async (req, res) => {
  const { userId } = req.params;

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
  signIn,
  getUsers,
  getUserById,
}
