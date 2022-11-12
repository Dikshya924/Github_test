import React, { useState } from "react";
import Pagination from "./Pagination";

function Main(props) {
  const { result } = props;
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(result);
  const list =
    result.length !== 0 ? (
      currentPosts.map((res) => <li>{res.name}</li>)
    ) : (
      <li>result not found</li>
    );

  return (
    <>
      <ul>{list}</ul>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={result.length}
        paginate={paginate}
      />
    </>
  );
}

export default Main;
