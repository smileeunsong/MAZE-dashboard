import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../Main/MainContext";

const Signup = () => {
  const context = useContext(MainContext);
  const { apiUrl } = context;
  const [verify, setVerify] = useState(false);
  const [inputValue, setInputValue] = useState({
    userName: "",
    userId: "",
    userPw: "",
    userPhoneNumber: "",
    verification: "",
  });
  const navigate = useNavigate();

  const { userName, userId, userPw, userPhoneNumber, verification } =
    inputValue;

  const isValidEmail = userId.includes("@") && userId.includes(".");
  // 비밀번호 특수문자 검사를 위한 정규식표현.
  const specialLetter = userPw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  // 특수문자 1자 이상, 전체 8자 이상일것.
  const isValidPassword = userPw.length >= 8 && specialLetter >= 1;

  const isValidInput =
    userName.length >= 2 &&
    userPhoneNumber.length === 11 &&
    verification.length === 6;

  const isValidName = userName.length >= 2;

  const isValidPhoneNumber = userPhoneNumber.length === 11;

  const isValidVerification = verification.length === 6;

  const activateSubmit =
    isValidEmail && isValidPassword && isValidInput && verify === true;

  const activateGetVerification = isValidPhoneNumber === true;

  const activateCheckVerification = isValidVerification === true;

  const activateDuplicateIdCheck = isValidEmail === true;

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const emailCheck = () => {
    fetch(`${apiUrl}/users/signup/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "EMAIL_AVAILABLE") {
          alert("사용 가능한 이메일입니다.");
        } else if (data.message === "ALREADY_REGISTED_USER") {
          alert("이미 등록된 이메일입니다.");
        }
      });
  };

  const codeRequest = () => {
    fetch(`${apiUrl}/users/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userPhoneNum: userPhoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "CODE_SENT") {
          alert("인증번호가 발송되었습니다.");
        } else {
          alert("인증번호 발송에 실패하였습니다.");
        }
      });
  };

  const codeCheck = () => {
    fetch(`${apiUrl}/users/auth/validation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userPhoneNum: userPhoneNumber,
        userCode: verification,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "AUTHENTICATION_SUCCESS") {
          alert("인증성공.");
          setVerify(true);
        } else {
          alert("인증번호가 틀렸습니다.");
        }
      });
  };

  const submitInfo = () => {
    fetch(`${apiUrl}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        userPhoneNum: userPhoneNumber,
        email: userId,
        password: userPw,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "USER_CREATED") {
          alert("회원가입 성공.");
          navigate("/");
        } else if (data.message === "KEY_ERROR") {
          alert("정보가 누락되었습니다.");
        }
      });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 w-full h-screen">
      <div className="flex flex-col justify-center items-center border-2 border-gray-200 bg-white rounded-xl">
        <h1 className="flex justify-center text-5xl font-bold my-10 mx-20">
          회원가입
        </h1>
        <div className="w-80 mx-10 my-3">
          <p className="text-lg">
            <input
              className={
                isValidName
                  ? "h-10 border-2 border-gray-200 bg-gray-100 rounded w-80 pl-3  outline-green-300"
                  : "h-10 border-2 border-gray-200 bg-gray-100 rounded w-80 pl-3 opacity-80 outline-red-300"
              }
              type="text"
              size="20"
              placeholder="이름 : 홍길동"
              name="userName"
              onChange={handleInput}
            />
          </p>
        </div>
        <div className="w-80 mx-10 my-1">
          <p className="text-lg">
            <input
              className={
                isValidEmail
                  ? "h-10 border-2 border-gray-200 bg-gray-100 rounded w-80 pl-3 outline-green-300"
                  : "h-10 border-2 border-gray-200 bg-gray-100 rounded w-80 pl-3 opacity-80 outline-red-300 "
              }
              type="text"
              name="userId"
              size="20"
              placeholder="이메일 : gildonghong@maze.com"
              onChange={handleInput}
            />
            <button
              className="my-2 h-10 border-2 border-gray-200 rounded w-80 bg-indigo-600 disabled:opacity-60"
              onClick={emailCheck}
              disabled={activateDuplicateIdCheck ? false : true}
            >
              이메일 중복확인
            </button>
          </p>
        </div>
        <div className="w-80 mx-10 my-1">
          <p className="text-lg">
            <input
              className={
                isValidPassword
                  ? "h-10 border-2 border-gray-200 bg-gray-100 rounded w-80 pl-3 outline-green-300"
                  : "h-10 border-2 border-gray-200 bg-gray-100 rounded w-80 pl-3 opacity-80 outline-red-300"
              }
              type="password"
              name="userPw"
              maxLength={20}
              placeholder="비밀번호 : ***********"
              onChange={handleInput}
            />
          </p>
        </div>
        <div className="w-80 mx-10 my-3">
          <p className="text-lg">
            <input
              className={
                isValidPhoneNumber
                  ? "h-10 border-2 border-gray-200 bg-gray-100 rounded w-80 pl-3 outline-green-300"
                  : "h-10 border-2 border-gray-200 bg-gray-100 rounded w-80 pl-3 opacity-80 outline-red-300"
              }
              id="phone"
              type="text"
              maxLength="11"
              name="userPhoneNumber"
              placeholder="핸드폰번호 : 01012345678"
              onChange={handleInput}
            />
            {/* <!-- 한 번 클릭 후 다시요청으로 버튼 표시 변경 --> */}
            <button
              className="my-2 h-10 border-2 border-gray-200 rounded w-80 bg-indigo-600 disabled:opacity-60"
              onClick={codeRequest}
              disabled={activateGetVerification ? false : true}
            >
              인증번호 받기
            </button>
            <span id="notice"></span>
          </p>
        </div>
        <div className="w-80 mx-10 my-1">
          <p className="text-lg">
            <input
              className={
                isValidVerification
                  ? "h-10 border-2 border-gray-200 bg-gray-100 rounded w-80 pl-3 outline-green-300"
                  : "h-10 border-2 border-gray-200 bg-gray-100 rounded w-80 pl-3 opacity-80 outline-red-300"
              }
              id="code"
              type="text"
              size="6"
              placeholder="인증번호 : ******(6자리)"
              maxLength={6}
              name="verification"
              onChange={handleInput}
            />
            <button
              className="my-2 h-10 border-2 border-gray-100 rounded w-80 bg-indigo-600 disabled:opacity-60"
              onClick={codeCheck}
              disabled={activateCheckVerification ? false : true}
            >
              인증번호 확인
            </button>
            {/* <!-- 3분 타이머 작동 --> */}
            <span id="notice2"></span>
          </p>
          <p id="authNumber"></p>
        </div>
        <div className="flex justify-center">
          <button
            className="h-10 text-lg border-emerald-300 mx-10 my-3 bg-emerald-400 border-2 w-40 rounded disabled:opacity-60 mb-5"
            type="submit"
            value="submit"
            disabled={activateSubmit ? false : true}
            onClick={submitInfo}
          >
            회원가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
