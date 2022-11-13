import axios from "axios";
import React, { useEffect, useState } from "react";
import RepoCard from "../common/RepoCard";

function Main() {
  const [repo, setRepo] = useState([]);
  const [user] = useState("mojombo");
  useEffect(() => {
    const allRepo = async () => {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );
      setRepo(response.data);
    };
    allRepo();
  }, []);
  console.log(repo);
  return (
    <div className="main_container">
      <div className="row py-4 mx-auto gy-4 container">
        {repo.length !== 0
          ? repo.map((res) => (
              <div className="col-md-4 col-sm-12">
                <RepoCard
                  repo={res.full_name}
                  author={user}
                  description={res.description}
                  fork={res.forks_count}
                  watch={res.watchers_count}
                  star={res.stargazers_count}
                />
              </div>
            ))
          : console.log("no data")}
      </div>
    </div>
  );
}

export default Main;
