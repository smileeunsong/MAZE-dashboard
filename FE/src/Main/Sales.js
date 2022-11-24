import React, { useState, useEffect } from "react";
import { FaWonSign } from "react-icons/fa";
import { BiCoffeeTogo } from "react-icons/bi";

const Sales = () => {
  const [dashData, setDashData] = useState([]);
  const [loading, setLoading] = useState(true);

  const targetRate = (dashData.sales / dashData.salestarget) * 100;
  const targetQty =
    Math.round(
      (((dashData.salesqty - dashData.lastmonthsales) / dashData.salesqty) *
        100 +
        Number.EPSILON) *
        100
    ) / 100;

  useEffect(() => {
    fetch("data/Mockdata.json")
      .then((data) => data.json())
      .then((data) => {
        setDashData(data.data);
        setLoading(false);
      });
  }, []);

  const priceToString = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex md:space-between flex-wrap justify-center mt-5">
      <div className="bg-white border-8 border-indigo-400 outline-none p-5 relative mt-5 md:w-5/12 md:mx-auto w-full">
        <p className="text-neutral-400 p-1 font-bold">누적 매출</p>
        <p className="pt-6 pb-5 font-bold text-3xl">
          ₩{priceToString(dashData.sales)}
        </p>
        <div className="pb-3">
          <span className="text-green-500 font-bold">{targetRate}% </span>
          <span>목표달성</span>
        </div>
        <FaWonSign className="absolute top-5 right-5 bg-teal-400 text-4xl rounded-full p-1" />
      </div>
      <div className="bg-white border-8  border-teal-400 outline-none p-5 relative mt-5 md:w-5/12 md:mx-auto w-full">
        <p className="text-neutral-400 p-1 font-bold">판매량</p>
        <p className="pt-6 pb-5 font-bold text-3xl">
          {priceToString(dashData.salesqty)}잔
        </p>
        <div className="pb-3">
          <span className="text-red-500 font-bold">{targetQty}% </span>
          <span>전월대비</span>
        </div>
        <BiCoffeeTogo className="absolute top-5 right-5 bg-indigo-400 text-4xl rounded-full p-1" />
      </div>
    </div>
  );
};

export default Sales;
