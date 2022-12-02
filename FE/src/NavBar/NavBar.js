import React, { useContext } from "react";
import {
  AiOutlineMenu,
  AiOutlineBell,
  AiOutlineMessage,
  AiOutlineRollback,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../Main/MainContext";

const NavBar = () => {
  const context = useContext(MainContext);
  const { openModal, handleModalOpen, handleModalClose, goBack, dashData } =
    context;
  const navigate = useNavigate();
  const APIKEY = process.env.REACT_APP_APIKEY;
  const LOGOUT_URI = process.env.REACT_APP_LOGOUT_URI;

  const kakaoToken = localStorage.getItem("KakaoToken");
  const googleToken = localStorage.getItem("GoogleToken");

  const logOut = () => {
    if (kakaoToken !== "") {
      fetch(
        `https://kauth.kakao.com/oauth/logout?client_id=${APIKEY}&logout_redirect_uri=${LOGOUT_URI}`
      )
        .then((res) => res.json())
        .then((data) => data);
      localStorage.removeItem("KakaoToken");
      localStorage.removeItem("TOKEN");
      navigate("/");
    }
    if (googleToken !== "") {
      localStorage.removeItem("GoogleToken");
      localStorage.removeItem("TOKEN");
      navigate("/");
    } else {
      localStorage.removeItem("TOKEN");
      navigate("/");
    }
  };

  return (
    <>
      <div className="bg-white h-16 flex items-center sticky top-0 z-10 border-b">
        <div className="flex flex-row w-full">
          <button onClick={goBack}>
            <AiOutlineRollback className="md:hidden ml-7 text-3xl" />
          </button>
          <Link to="/blank">
            <AiOutlineMenu className="text-3xl ml-7 hover:cursor-pointer" />
          </Link>
          <div className="flex flex-row justify-end w-full mr-7">
            <Link to="/blank">
              <AiOutlineBell className="text-2xl mr-4 hover:cursor-pointer" />
            </Link>
            <Link to="/blank">
              <AiOutlineMessage className="text-2xl mr-4 hover:cursor-pointer" />
            </Link>
            <img
              className="w-8 h-8 mr-4 hover:cursor-pointer"
              src={dashData.imageUrl}
              alt="profileimage"
              onClick={handleModalOpen}
            />
            <button className="text-xl font-bold" onClick={handleModalOpen}>
              {dashData.username}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-auto" onClick={handleModalClose}>
        {openModal && (
          <div className="fixed top-14 right-0 w-48 bg-white z-10 rounded-lg border-2">
            <Link to="/blank">
              <div className="p-2 ml-2 border-b">Profile </div>
            </Link>
            <Link to="/blank">
              <div className="p-2 ml-2 border-b">Analytics</div>
            </Link>
            <Link to="/blank">
              <div className="p-2 ml-2 border-b">Privacy</div>
            </Link>
            <Link to="/blank">
              <div className="p-2 ml-2 border-b">Help Center</div>
            </Link>
            <button>
              <div className="p-2 ml-2" onClick={logOut}>
                Log out
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
