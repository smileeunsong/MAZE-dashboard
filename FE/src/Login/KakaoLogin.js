import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MainContext } from "../Main/MainContext";

const KakaoLogin = () => {
  const navigate = useNavigate();

  const context = useContext(MainContext);
  const { apiUrl } = context;
  const [searchParams, setSearchParams] = useSearchParams();
  const APIKEY = process.env.REACT_APP_APIKEY;
  // 카카오 요청 필수 코드 3가지
  const code = searchParams.get("code");
  const grant_type = "authorization_code";
  const client_id = APIKEY;

  useEffect(() => {
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=https://maze-dashboard-wecode.netlify.app/kakaologin&code=${code}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("KakaoToken", data.access_token);
        fetch(`${apiUrl}/users/signin/kakao`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            kakaoAccessToken: data.access_token,
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
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-3xl animate-bounce">카카오 로그인 중입니다...</div>
    </div>
  );
};

export default KakaoLogin;
