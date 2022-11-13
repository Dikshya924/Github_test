import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import RepoCard from "../common/RepoCard";
import { setRepo, setUser } from "../../redux/actions/repoActions";
import AllRepo from "../common/AllRepo";

function Main() {
  const user = useSelector((state) => state.allUser.user);
  const repo = useSelector((state) => state.allRepos.repos);
  const dispatch = useDispatch();

  const allUser = async () => {
    const response = await axios.get(`https://api.github.com/users`);
    dispatch(setUser(response.data));
  };
  useEffect(() => {
    allUser();
  }, []);

  return (
    <div className="main_container">
      {repo.length !== 0 ? <RepoCard /> : <AllRepo />}
    </div>
  );
}

export default Main;
