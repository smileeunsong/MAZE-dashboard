import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MainContext = createContext();
// createContext()로 비어 있는 context가 만들어진다.

function MainStore(props) {
  // props로 지정하고 싶은 상태를 만들어 준다.
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [dashData, setDashData] = useState([]);
  const [kakaoData, setKakaoData] = useState([]);
  const [serverData, setServerData] = useState([]);
  const [dailySalesData, setDailySalesData] = useState([]);
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate;
  const [openCModal, setOpenCModal] = useState(false);

  const onClickOpenCModal = () => {
    setOpenCModal(true);
  };

  const onClickCloseCModal = () => {
    setOpenCModal(false);
  };

  const apiUrl = "https://maze-dashboard.link";

  const goBack = () => {
    navigate(-1);
  };

  const handleModalOpen = () => {
    setOpenModal(!openModal);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const now = new Date();
  const firstDay = Date.parse(new Date(now.getFullYear(), now.getMonth(), 2));
  const lastDay = Date.parse(
    new Date(now.getFullYear(), now.getMonth() + 1, 1)
  );

  const revenuCurrentMonth = (a) => {
    let sales = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i].day >= firstDay && a[i].day <= lastDay && a[i].state === 3)
        sales += a[i].items[0].won;
    }
    return sales;
  };

  const quantityCurrentMonth = (a) => {
    let salesadd = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i].day >= firstDay && a[i].day <= lastDay && a[i].state === 3)
        salesadd += a[i].items[0].num;
    }
    return salesadd;
  };

  const monthSalesRevenue = revenuCurrentMonth(serverData);
  const monthSalesQuantity = quantityCurrentMonth(serverData);

  const queryDate = date.toISOString().slice(0, 10);

  const handleDayClick = () => {
    setLoad(true);
    fetch(`${apiUrl}/sales/data/daily?targetDate=${queryDate}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("TOKEN"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDailySalesData(data?.data);
        setLoad(false);
      });
  };

  useEffect(() => {
    fetch("data/Mockdata.json")
      .then((data) => data.json())
      .then((data) => {
        setDashData(data.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("data/Serverdata.json")
      .then((data) => data.json())
      .then((data) => {
        setServerData(data);
        setLoading(false);
      });
  }, []);

  return (
    //value를 통해 전달하고 싶은 값을 넣어준다.
    <MainContext.Provider
      value={{
        openModal,
        setOpenModal,
        handleModalOpen,
        handleModalClose,
        goBack,
        dashData,
        apiUrl,
        loading,
        setLoading,
        kakaoData,
        setKakaoData,
        monthSalesRevenue,
        monthSalesQuantity,
        date,
        setDate,
        openCModal,
        setOpenCModal,
        onClickOpenCModal,
        onClickCloseCModal,
        handleDayClick,
        dailySalesData,
        load,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
export default MainStore;
