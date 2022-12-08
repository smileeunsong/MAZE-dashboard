import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../Main/MainContext";
import { ResponsiveHeatMap } from "@nivo/heatmap";

const HeatMap = () => {
  const [mdata, setMdata] = useState([]);
  const context = useContext(MainContext);
  const { apiUrl } = context;

  const originData = [
    {
      id: "아메리카노",
      data: [
        { x: "10", y: 0 },
        { x: "11", y: 0 },
        { x: "12", y: 0 },
        { x: "13", y: 0 },
        { x: "14", y: 0 },
        { x: "15", y: 0 },
        { x: "16", y: 0 },
        { x: "17", y: 0 },
        { x: "18", y: 0 },
        { x: "19", y: 0 },
        { x: "20", y: 0 },
        { x: "21", y: 0 },
        { x: "22", y: 0 },
      ],
    },
    {
      id: "플랫화이트",
      data: [
        { x: "10", y: 0 },
        { x: "11", y: 0 },
        { x: "12", y: 0 },
        { x: "13", y: 0 },
        { x: "14", y: 0 },
        { x: "15", y: 0 },
        { x: "16", y: 0 },
        { x: "17", y: 0 },
        { x: "18", y: 0 },
        { x: "19", y: 0 },
        { x: "20", y: 0 },
        { x: "21", y: 0 },
        { x: "22", y: 0 },
      ],
    },
    {
      id: "카페라떼",
      data: [
        { x: "10", y: 0 },
        { x: "11", y: 0 },
        { x: "12", y: 0 },
        { x: "13", y: 0 },
        { x: "14", y: 0 },
        { x: "15", y: 0 },
        { x: "16", y: 0 },
        { x: "17", y: 0 },
        { x: "18", y: 0 },
        { x: "19", y: 0 },
        { x: "20", y: 0 },
        { x: "21", y: 0 },
        { x: "22", y: 0 },
      ],
    },
    {
      id: "에스프레소",
      data: [
        { x: "10", y: 0 },
        { x: "11", y: 0 },
        { x: "12", y: 0 },
        { x: "13", y: 0 },
        { x: "14", y: 0 },
        { x: "15", y: 0 },
        { x: "16", y: 0 },
        { x: "17", y: 0 },
        { x: "18", y: 0 },
        { x: "19", y: 0 },
        { x: "20", y: 0 },
        { x: "21", y: 0 },
        { x: "22", y: 0 },
      ],
    },
    {
      id: "바닐라라떼",
      data: [
        { x: "10", y: 0 },
        { x: "11", y: 0 },
        { x: "12", y: 0 },
        { x: "13", y: 0 },
        { x: "14", y: 0 },
        { x: "15", y: 0 },
        { x: "16", y: 0 },
        { x: "17", y: 0 },
        { x: "18", y: 0 },
        { x: "19", y: 0 },
        { x: "20", y: 0 },
        { x: "21", y: 0 },
        { x: "22", y: 0 },
      ],
    },
    {
      id: "오늘의 핸드드립 커피",
      data: [
        { x: "10", y: 0 },
        { x: "11", y: 0 },
        { x: "12", y: 0 },
        { x: "13", y: 0 },
        { x: "14", y: 0 },
        { x: "15", y: 0 },
        { x: "16", y: 0 },
        { x: "17", y: 0 },
        { x: "18", y: 0 },
        { x: "19", y: 0 },
        { x: "20", y: 0 },
        { x: "21", y: 0 },
        { x: "22", y: 0 },
      ],
    },
    {
      id: "연유라떼",
      data: [
        { x: "10", y: 0 },
        { x: "11", y: 0 },
        { x: "12", y: 0 },
        { x: "13", y: 0 },
        { x: "14", y: 0 },
        { x: "15", y: 0 },
        { x: "16", y: 0 },
        { x: "17", y: 0 },
        { x: "18", y: 0 },
        { x: "19", y: 0 },
        { x: "20", y: 0 },
        { x: "21", y: 0 },
        { x: "22", y: 0 },
      ],
    },
    {
      id: "핸드드립",
      data: [
        { x: "10", y: 0 },
        { x: "11", y: 0 },
        { x: "12", y: 0 },
        { x: "13", y: 0 },
        { x: "14", y: 0 },
        { x: "15", y: 0 },
        { x: "16", y: 0 },
        { x: "17", y: 0 },
        { x: "18", y: 0 },
        { x: "19", y: 0 },
        { x: "20", y: 0 },
        { x: "21", y: 0 },
        { x: "22", y: 0 },
      ],
    },
    {
      id: "더치커피ICEd",
      data: [
        { x: "10", y: 0 },
        { x: "11", y: 0 },
        { x: "12", y: 0 },
        { x: "13", y: 0 },
        { x: "14", y: 0 },
        { x: "15", y: 0 },
        { x: "16", y: 0 },
        { x: "17", y: 0 },
        { x: "18", y: 0 },
        { x: "19", y: 0 },
        { x: "20", y: 0 },
        { x: "21", y: 0 },
        { x: "22", y: 0 },
      ],
    },
  ];

  useEffect(() => {
    fetch(
      `${apiUrl}/sales/data/heatmap?startDate=2022-11-01&finishDate=2022-11-30`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("TOKEN"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMdata(data?.data);
      });
  }, [apiUrl]);

  originData.forEach((d1) => {
    let oData = d1.data;
    let nData = mdata?.find((e1) => e1.id === d1.id)?.data ?? [];
    oData.forEach((d2) => {
      let record = nData?.find((e2) => e2.x === d2.x);
      if (record) {
        d2.y = record.y;
      }
    });
  });

  return (
    <div className="flex items-center flex-col w-11/12 h-96 mx-auto my-3 bg-white font-bold">
      <div className="text-lg mt-3">메뉴별 시간당 판매량</div>
      <ResponsiveHeatMap
        data={originData}
        margin={{ top: 30, right: 120, bottom: 60, left: 120 }}
        valueFormat=">-.2s"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "시간",
          legendPosition: "middle",
          legendOffset: 5,
        }}
        axisRight={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 70,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        colors={{
          type: "diverging",
          scheme: "greens",
          divergeAt: 0.5,
          minValue: 0,
          maxValue: 100,
        }}
        emptyColor="#555555"
        legends={[
          {
            anchor: "bottom",
            translateX: 0,
            translateY: 30,
            length: 400,
            thickness: 8,
            direction: "row",
            tickPosition: "after",
            tickSize: 3,
            tickSpacing: 4,
            tickOverlap: false,
            tickFormat: ">-.2s",
            title: "Value →",
            titleAlign: "start",
            titleOffset: 4,
          },
        ]}
      />
    </div>
  );
};

export default HeatMap;
