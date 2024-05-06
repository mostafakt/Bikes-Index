import { Route, Routes } from "react-router-dom";
import { PanelLayout } from "../layouts";
import { Home } from "../pages";
import React from "react";
const Component = () => {
  return (
    <Routes>
      <Route element={<PanelLayout />}>
        <Route path={"/"} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Component;
