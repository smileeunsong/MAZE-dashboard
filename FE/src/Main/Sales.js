import React, { useContext, useEffect } from "react";
import { FaWonSign } from "react-icons/fa";
import { BiCoffeeTogo } from "react-icons/bi";
import { MainContext } from "./MainContext";
import { useState } from "react";

const Sales = () => {
  const context = useContext(MainContext);
  const { apiUrl } = context;
  const [price, setPrice] = useState([]);
  const [loading, setLoading] = useState(true);

  const targetRate =
    Math.round(
      ((price?.[0]?.salesAmount / 5000000) * 100 + Number.EPSILON) * 100
    ) / 100;
  const targetQty =
    Math.round(
      (((price?.[0]?.salesQty - 2000) / price?.[0]?.salesQty) * 100 +
        Number.EPSILON) *
        100
    ) / 100;

  const priceToString = (price) => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    fetch(`${apiUrl}/sales/data/monthly`, {
      headers: {
        Authorization: localStorage.getItem("TOKEN"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPrice(data?.data);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex my-10 justify-center w-full">
      <div className="flex w-11/12 md:flex-row md:flex-nowrap flex-wrap md:justify-between">
        <div className="bg-white border-8 border-indigo-400 outline-none p-5 relative mt-5 md:mx-auto w-full md:mr-2">
          <p className="text-neutral-400 p-1 font-bold">누적 매출</p>
          <p className="pt-6 pb-5 font-bold text-3xl">
            ₩{priceToString(price?.[0]?.salesAmount) ?? 0}
          </p>
          <div className="pb-3">
            <span className="text-green-500 font-bold">
              {price?.[0]?.salesAmount ? targetRate : 0}%{" "}
            </span>
            <span>목표달성</span>
          </div>
          <FaWonSign className="absolute top-5 right-5 bg-teal-400 text-4xl rounded-full p-1" />
        </div>
        <div className="bg-white border-8  border-teal-400 outline-none p-5 relative mt-5 w-full md:ml-2">
          <p className="text-neutral-400 p-1 font-bold">판매량</p>
          <p className="pt-6 pb-5 font-bold text-3xl">
            {priceToString(price?.[0]?.salesQty) ?? 0}잔
          </p>
          <div className="pb-3">
            <span className="text-red-500 font-bold">
              {price?.[0]?.salesQty ? targetQty : 0}%{" "}
            </span>
            <span>전월대비</span>
          </div>
          <BiCoffeeTogo className="absolute top-5 right-5 bg-indigo-400 text-4xl rounded-full p-1" />
        </div>
      </div>
    </div>
  );
};

export default Sales;
