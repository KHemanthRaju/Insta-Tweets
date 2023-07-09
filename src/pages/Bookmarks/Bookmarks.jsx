import React from "react";
import "../Bookmarks/Bookmarks.css";
import { useData } from "../../contexts/dataContext";
import { Navbar } from "../../components/Navbar/Navbar";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { PostCard } from "../../components/PostCard/PostCard";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const Bookmarks = () => {
  document.title = "insta-tweets | Bookmarks";

  const { dataState, darkMode } = useData();

  const getBookmarkPosts = (postId) => {
    console.log("Post Id", postId._id);
    console.log("Type of PostId", typeof postId);
    return dataState?.posts?.filter((post) => post._id === postId._id)[0];
  };
  console.log("BookMark Posts", getBookmarkPosts("rkk8hk_Ku98_b980_bvctyu"));
  return (
    <div className={`bookmarks ${darkMode && "bgDarkmode"}`}>
      <Navbar />
      <div className="bookmarks-content">
        <LeftSideBar />
        <div className="bookmarks-main">
          {dataState?.bookmarks?.length === 0 ? (
            <h3>No Bookmarks Yet</h3>
          ) : (
            dataState?.bookmarks.map((postcool) => (
              <PostCard key={postcool._id} post={getBookmarkPosts(postcool)} />
            ))
          )}
        </div>
        <div className="rightSideBar">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
