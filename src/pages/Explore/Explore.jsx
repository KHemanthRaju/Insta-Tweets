import React, { useState } from "react";
import "../Explore/Explore.css";
import { sortOptions, getSortedPosts } from "../../utils/sortPosts";
import ClipLoader from "react-spinners/ClipLoader";
import { useData } from "../../contexts/dataContext";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import { PostCard } from "../../components/PostCard/PostCard";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { Navbar } from "../../components/Navbar/Navbar";

const Explore = () => {
  document.title = "tech-social | Explore";
  const { dataState, darkMode } = useData();

  const [sortByOption, setSortByOption] = useState("Latest");

  const sortedPosts = getSortedPosts(dataState?.posts, sortByOption);

  return (
    <div className={`explore ${darkMode && "bgDarkmode"}`}>
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
                <select
                  onChange={(e) => setSortByOption(e.target.value)}
                  className={`${darkMode && "bgDarkmode"}`}
                >
                  {Object.keys(sortOptions).map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {sortedPosts?.map((post) => (
                  <PostCard post={post} key={post._id} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="rightSideBar">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Explore;
