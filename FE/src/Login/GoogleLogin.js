import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MainContext } from "../Main/MainContext";

const GoogleLogin = () => {
  const context = useContext(MainContext);
  const { apiUrl } = context;
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("GoogleToken", accessToken);
    fetch(`${apiUrl}/users/signin/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        googleAccessToken: accessToken,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "LOGIN_SUCCESS") {
          localStorage.setItem("TOKEN", data.accessToken);
          alert("로그인 성공");
          navigate("/main");
        }
      });
  }, accessToken);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-3xl animate-bounce">구글 로그인 중입니다...</div>
    </div>
  );
};

export default GoogleLogin;
