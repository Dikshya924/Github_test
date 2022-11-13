import React, { useState } from "react";

import { useSelector } from "react-redux";

function AllRepo() {
  const user = useSelector((state) => state.allUser.user);

  const renderRepo = user.map((res) => {
    const { id, login, html_url, avatar_url } = res;
    console.log(res);

    return (
      <div className="col-md-4 col-sm-12" key={id}>
        <div className="card py-2 px-3">
          <div className="card_body ">
            <div className="d-flex align-items-center gap-3">
              <img
                src={avatar_url}
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
                alt="user_image"
              />
              <a href={html_url}>
                <p className="text-center">{login}</p>
              </a>
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

export default AllRepo;
