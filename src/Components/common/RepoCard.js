import React from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineEye, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function RepoCard() {
  const repos = useSelector((state) => state.allRepos.repos);
  const renderRepo = repos.map((res) => {
    const {
      id,
      name,
      full_name,
      description,
      forks_count,
      watchers_count,
      stargazers_count,
    } = res;

    return (
      <div className="col-md-4 col-sm-12" key={id}>
        <div className="card py-2 px-3">
          <div className="card_body">
            <Link to={`/${res?.owner?.login}/${name}`}>
              <h4>{full_name}</h4>
            </Link>

            <p className="text-muted">@{res?.owner?.login}</p>
            <p>{description}</p>
          </div>
          <div className="card_footer">
            <div className="d-flex align-items-center justify-content-between">
              <span className="d-flex align-items-center gap-1">
                <BiGitRepoForked />
                {forks_count}
              </span>
              <span className="d-flex align-items-center gap-1">
                <AiOutlineEye />
                {watchers_count}
              </span>
              <span className="d-flex align-items-center gap-1">
                <AiOutlineStar />
                {stargazers_count}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="row py-4 mx-auto gy-4 container">{renderRepo}</div>
    </>
  );
}

export default RepoCard;
