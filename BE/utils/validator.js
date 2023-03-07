const validatePassword = (password) => {
  const pwValidation = new RegExp(
    /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/
  ); // 특수문자와 숫자가 반드시 포함되어야 하는 영문 대소문자 8~20자
  if (!pwValidation.test(password)) {
    const err = new Error('INVALID_PASSWORD');
    err.statusCode = 400;
    throw err;
  }
};

const validateEmail = (email) => {
  const emailValidation = new RegExp(
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  );
  if (!emailValidation.test(email)) {
    const err = new Error('INVALID_EMAIL');
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  validatePassword,
  validateEmail,
};
