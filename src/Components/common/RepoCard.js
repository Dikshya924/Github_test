import React from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineEye, AiOutlineStar } from "react-icons/ai";

function RepoCard({ repo, author, description, fork, watch, star }) {
  return (
    <div className="card py-2 px-3">
      <div className="card_body">
        <h4>{repo}</h4>
        <p className="text-muted">@{author}</p>
        <p>{description}</p>
        <div className="d-flex align-items-center justify-content-between">
          <span className="d-flex align-items-center gap-1">
            <BiGitRepoForked />
            {fork}
          </span>
          <span className="d-flex align-items-center gap-1">
            <AiOutlineEye />
            {watch}
          </span>
          <span className="d-flex align-items-center gap-1">
            <AiOutlineStar />
            {star}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
