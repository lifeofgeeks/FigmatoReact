import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  );
};

export default AppRoutes;
