import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main/Main";
import MainStore from "./Main/MainContext";
import Blank from "./Main/Blank";
import Login from "./Login/Login";
import Signup from "./Login/Signup";

function App() {
  return (
    <MainStore>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </MainStore>
  );
}

export default App;
