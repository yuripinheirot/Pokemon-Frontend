import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./container/Main";

const Layout = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  );
};

export default Layout;
