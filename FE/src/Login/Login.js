import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiKakaotalk } from "react-icons/si";
import { MainContext } from "../Main/MainContext";

const Login = () => {
  const context = useContext(MainContext);
  const { apiUrl } = context;
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const navigate = useNavigate();

  const isValidEmail = userId.includes("@") && userId.includes(".");
  // 비밀번호 특수문자 검사를 위한 정규식표현.
  const specialLetter = userPw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  // 특수문자 1자 이상, 전체 8자 이상일것.
  const isValidPassword = userPw.length >= 8 && specialLetter >= 1;

  const idSave = (event) => {
    setUserId(event.target.value);
  };

  const pwSave = (event) => {
    setUserPw(event.target.value);
  };

  const activateSubmit = isValidEmail && isValidPassword === true;

  const loginFetch = () => {
    fetch(`${apiUrl}/users/signin`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "LOGIN_SUCCESS") {
          localStorage.setItem("TOKEN", data.accessToken);
          alert("로그인 성공");
          navigate("/main");
        } else if (data.message === "NO_USER") {
          alert("존재하지 않는 회원입니다.");
        } else if (data.message === "WRONG_PASSWORD") {
          alert("비밀번호가 틀렸습니다.");
        }
      });
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100 flex-col">
      <div className="border-2 rounded-xl border-gray-200 bg-white">
        <div className="flex justify-center my-10 mx-20 text-5xl font-bold">
          Maze
        </div>
        <div className="w-96 flex flex-col items-center">
          <div>
            <input
              className={
                isValidEmail
                  ? "border-2 border-gray-200 w-72 h-10 mx-10 my-3 rounded pl-2 bg-gray-100 outline-green-300"
                  : "border-2 border-gray-200 w-72 h-10 mx-10 my-3 rounded pl-2 bg-gray-100 outline-red-300"
              }
              type="id"
              placeholder="ID@email.com"
              onChange={idSave}
            />
          </div>
          <div>
            <input
              className={
                isValidPassword
                  ? "border-2 border-gray-200 w-72 h-10 mx-10 rounded pl-2 mb-5 bg-gray-100 outline-green-300"
                  : "border-2 border-gray-200 w-72 h-10 mx-10 rounded pl-2 mb-5 bg-gray-100 outline-red-300"
              }
              type="password"
              placeholder="password"
              onChange={pwSave}
            />
          </div>
          <div className="flex justify-center">
            <button
              className={
                "border-2 border-emerald-300 w-72 h-10 mx-10 rounded pl-2 mb-5 bg-emerald-400 disabled:opacity-60"
              }
              type="submit"
              disabled={activateSubmit ? false : true}
              onClick={loginFetch}
            >
              Submit
            </button>
          </div>
          <div>
            <p>또는</p>
          </div>
          <div className="flex justify-center">
            <Link
              className="flex flex-row justify-center items-center w-72 h-10 mx-10 pl-2 mb-5"
              to="/blank"
            >
              <SiKakaotalk className="text-yellow-300 mr-5" />{" "}
              <span>Kakao로 로그인</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center border-2 rounded-xl border-gray-200 bg-white mt-3">
        <div className="w-96 flex items-center justify-center">
          <div className="w-72 h-10 mx-10 pl-2 my-5 flex items-center justify-center">
            <span>계정이 없으신가요?</span>
            <Link className="ml-2 font-bold text-sky-400" to="./signup">
              가입하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
