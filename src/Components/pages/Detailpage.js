import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineFork } from "react-icons/ai";
import { VscIssues } from "react-icons/vsc";
import { useParams } from "react-router-dom";

function Detailpage() {
  const { uname, repo } = useParams();

  const [repos, setRepos] = useState("");

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.github.com/repos/${uname}/${repo}`
    );

    setRepos(response.data);
  };
  useEffect(() => {
    if (uname !== "" && repo !== "") fetchData();
  }, [uname, repo]);
  const image = repos?.owner?.avatar_url;

  return (
    <div className="detail_container p-3">
      <div className=" d-flex align-items-center justify-content-center gap-4">
        <>
          <div className="d-flex flex-column align-items-center justify-content-center gap-3">
            <img
              src={image}
              alt="user_image"
              width={200}
              height={200}
              style={{
                borderRadius: "50%",
                objectFit: "contain",
                height: "auto",
              }}
            />
            <a href={repos.html_url} target="__blank">
              <h5>{uname}</h5>
            </a>
          </div>
        </>
        <div>
          <a href={repos.html_url} target="__blank">
            <h4>{repos.full_name}</h4>
          </a>

          <div className="d-flex gap-2 text-center">
            <p className="text-center">
              <VscIssues /> Issues
            </p>
            <span>{repos.open_issues}</span>
          </div>
          <div className="d-flex gap-2 text-center">
            <p className="text-center">
              <AiOutlineFork /> {repos.default_branch}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailpage;
