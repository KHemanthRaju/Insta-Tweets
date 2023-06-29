import React, { useState } from "react";
import "../Explore/Explore.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { useData } from "../../contexts/dataContext";
import { PostCard } from "../../components/PostCard/PostCard";
import { sortOptions, getSortedPosts } from "../../utils/sortPosts";
import ClipLoader from "react-spinners/ClipLoader";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const Explore = () => {
  document.title = "tech-social | Explore";
  const { dataState } = useData();

  const [sortByOption, setSortByOption] = useState("Latest");

  const sortedPosts = getSortedPosts(dataState?.posts, sortByOption);

  return (
    <div className="explore">
      <Navbar />
      <div className="explore-content">
        <LeftSideBar />
        <div className="explore-main">
          {dataState.postsLoading ? (
            <ClipLoader color="var(--primary-dark)" size={60} />
          ) : (
            <div>
              <div className="sort-post">
                <h3>{sortOptions[sortByOption]}</h3>
                <select onChange={(e) => setSortByOption(e.target.value)}>
                  {Object.keys(sortOptions).map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              {sortedPosts?.map((post) => (
                <div key={post?._id}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          )}
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};

export default Explore;
