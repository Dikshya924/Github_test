import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="d-flex align-items-center justify-content-between p-3">
      <img src="/images/logo.png" alt="logo" width="32px" height="32px" />

      <FaUserCircle className="fs-5" />
    </nav>
  );
}

export default Navbar;
