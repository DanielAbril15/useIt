import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/employee">Information</NavLink>
        </li>
        <li>
          <NavLink to="/qr">QR</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
