const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const userService = require('../services/userService');

const loginRequired = async (req, res, next) => {

	// 1) 요청에 토큰이 들어있는지 확인
  const accessToken = req.headers.authorization;

	if (!accessToken) {
		const error = new Error('NEED_ACCESS_TOKEN');
		error.statusCode = 401;
		
		return res.status(error.statusCode).json({
			message: error.message
		});
	}

  // 2) 토큰 복호화
  const decoded = await promisify(jwt.verify)(accessToken, process.env.JWT_SECRET);

  // 3) 복호화된 토큰에서 회원 번호를 변수에 할당
	const user = await userService.getUserById(decoded.id);

	// 4) 값이 없으면 에러 메시지 반환
	if (!user) {
		const error = new Error('USER_DOES_NOT_EXIST');
		error.statusCode = 404;
		
		return res.status(error.statusCode).json({
			message: error.message
		});
	}

  // 5) 요청 값에 유저 정보를 넣고 접근 허가
  req.user = user;
  next();
}

module.exports = { 
	loginRequired 
}
