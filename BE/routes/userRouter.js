const router = require('express').Router();
const userController = require('../controllers/userController');
const { loginRequired } = require('../utils/auth');

// 인증 문자 발송
router.post('/auth', userController.sendCode);

// 인증 번호 비교
router.post('/auth/validation', userController.compareAuthCode);

// 회원가입
router.post('/signup', userController.signUp);

// 회원 로그인
router.post('/signin', userController.signIn);

// 모든 회원 정보 조회
router.get('/all', userController.getUsers);

// 회원 아이디로 해당 회원 조회
router.get('/user-info', loginRequired, userController.getUserById);

module.exports = router