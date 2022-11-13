import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import Main from "./Main";
const Navbar = () => {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleClick = async () => {
    const result = await axios(
      `https://api.github.com/users/${user}/repos?page=1&per_page=10&sort=updated`
    );
    setRepos(result.data);
  };

  return (
    <>
      <nav className="d-flex align-items-center justify-content-between p-3">
        <img src="/images/logo.png" alt="logo" width="32px" height="32px" />

        <input
          type="text"
          placeholder="Search or jump to...."
          className="mx-3"
          value={user}
          onChange={handleChange}
          onMouseEnter={handleClick}
        />
        {/* <input type="submit" onClick={handleClick} /> */}

        <FaUserCircle className="fs-5" />
      </nav>

      <Main result={repos} />
    </>
  );
};

export default Navbar;
