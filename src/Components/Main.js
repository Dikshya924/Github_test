import axios from "axios";
import React, { useEffect, useState } from "react";
import RepoCard from "./common/RepoCard";
import Pagination from "./Pagination";

function Main(props) {
  const { result } = props;
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [post, setPost] = useState([]);
  useEffect(() => {
    const allPost = async () => {
      const response = await axios.get("https://api.github.com/users/");
      setPost(response.data);
    };
    allPost();
  }, []);
  console.log(post);
  const posts =
    post.length !== 0 ? (
      post.map((res) => console.log(res))
    ) : (
      <li>No post available</li>
    );

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log("result is", result);
  const list =
    result.length !== 0 ? (
      result.map((res) => <li>{res.url}</li>)
    ) : (
      <li>{posts}</li>
    );
  return (
    <>
      {/* <ul>{list}</ul> */}
      {/* <ul>{posts}</ul> */}
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={result.length}
        paginate={paginate}
      /> */}
      <div className="row  my-4 container mx-auto main">
        {/* {post.length !== 0 ? (
          post.map((res) => ( */}

        <div className="col-md-4 col-sm-12 mb-4">
          <RepoCard />
        </div>

        {/* )) ) : (<p>no data set</p>
        )}
        {posts} */}
      </div>
    </>
  );
}

export default Main;
