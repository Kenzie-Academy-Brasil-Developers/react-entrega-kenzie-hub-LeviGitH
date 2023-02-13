import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cadastro" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="*" element={<Login />}></Route>
    </Routes>
  );
};
