import axios from "axios";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRepo, setUser } from "../../redux/actions/repoActions";
import Select from "react-select";

function Navbar() {
  const repos = useSelector((state) => state.allRepos.repos);
  const [page, setPage] = useState(10);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("updated");

  console.log(sort.value);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleClick = async () => {
    const result = await axios(
      `https://api.github.com/users/${searchInput}/repos?page=1&per_page=${page}&sort=reactions`
    );
    dispatch(setRepo(result.data));
  };
  const options = [
    { value: "updated", label: "updated" },
    { value: "interactions", label: "interactions" },
    { value: "reactions", label: "reactions" },
  ];
  return (
    <>
      <nav className="d-flex align-items-center justify-content-between p-3">
        <Link to="/">
          <img src="/images/logo.png" alt="logo" width="32px" height="32px" />
        </Link>
        <input
          type="text"
          placeholder="Search or jump to..."
          onChange={handleChange}
          value={searchInput}
        />
        <input type="submit" value="submit" onClick={handleClick} />
        <FaUserCircle className="fs-5" />
      </nav>
      <div>
        {/* <Select options={options} onChange={(choice) => setSort(choice)} /> */}
      </div>
    </>
  );
}

export default Navbar;
