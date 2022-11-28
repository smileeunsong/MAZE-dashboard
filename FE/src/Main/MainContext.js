import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MainContext = createContext();
// createContext()로 비어 있는 context가 만들어진다.

function MainStore(props) {
  // props로 지정하고 싶은 상태를 만들어 준다.
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [dashData, setDashData] = useState([]);
  const navigate = useNavigate;

  const apiUrl = "http://192.168.1.230:3000";

  const goBack = () => {
    navigate(-1);
  };

  const handleModalOpen = () => {
    setOpenModal(!openModal);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    fetch("data/Mockdata.json")
      .then((data) => data.json())
      .then((data) => {
        setDashData(data.data);
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
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
export default MainStore;
