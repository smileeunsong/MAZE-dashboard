import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main/Main";
import MainStore from "./Main/MainContext";
import Blank from "./Main/Blank";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import KakaoLogin from "./Login/KakaoLogin";

function App() {
  return (
    <MainStore>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/kakaologin" element={<KakaoLogin />} />
        </Routes>
      </BrowserRouter>
    </MainStore>
  );
}

export default App;
