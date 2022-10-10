import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";

import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import QrReader from "./components/routes/users/adminRead/QrRead";
import Admins from "./components/routes/users/Admins";
import Employee from "./components/routes/users/Employee";
import Qr from "./components/routes/users/userInfo/Qr";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<Admins />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/qr" element={<Qr />} />
          <Route path="/qr-reader" element={<QrReader />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
