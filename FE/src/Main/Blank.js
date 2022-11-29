import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

const Blank = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center relative">
      <div>
        <button
          className="md:hidden flex items-center absolute left-5 top-5 border-2 rounded-lg border-gray-300 bg-gray-200 p-2 text-lg"
          onClick={() => navigate(-1)}
        >
          <AiOutlineRollback />
          <span>뒤로가기 </span>
        </button>
        <div className="mt-32 text-3xl">
          죄송합니다 해당 페이지는 준비중입니다.
        </div>
      </div>
    </div>
  );
};

export default Blank;
