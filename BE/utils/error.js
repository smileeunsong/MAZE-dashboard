// controller에서 try-catch로 에러를 잡는 것 대신 catchAsync라는 에러핸들링용 함수를 만들어서 에러가 발생하면 상위 모듈로 올림.
const catchAsync = func => {
	return (req, res, next) => {
		func(req, res, next).catch((error) => next(error))
	}
}

// controller -> app.js 로 올라온 에러를 globalErrorHandler로 잡고 핸들링
const globalErrorHandler = (err, req, res, next) => {
	console.error(err.stack)

	err.statusCode = err.statusCode || 500;

	res.status(err.statusCode).json({ message: err.message })
}

module.exports = { 
	catchAsync, 
	globalErrorHandler 
}
