import React, { useContext, useEffect, useState } from "react";
import "../LikedPosts/LikedPosts.css";
import { useAuth } from "../../contexts/authContext";
import { useData } from "../../contexts/dataContext";
import { Navbar } from "../../components/Navbar/Navbar";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { PostCard } from "../../components/PostCard/PostCard";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const LikedPosts = () => {
  document.title = "tech-social | Liked Posts";

  const { authState } = useAuth();
  const { dataState, darkMode } = useData();
  const [postsLikedByUser, setPostsLikedByUser] = useState([]);

  useEffect(() => {
    setPostsLikedByUser(
      dataState?.posts?.filter((currPost) =>
        currPost.likes.likedBy.find(
          (currUser) => currUser.username === authState?.user?.username
        )
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataState?.posts]);

  return (
    <div className={`liked-posts ${darkMode && "bgDarkmode"}`}>
      <Navbar />
      <div className="liked-posts-content">
        <LeftSideBar />
        <div className="liked-posts-main">
          {postsLikedByUser?.length === 0 ? (
            <h3>No liked Posts Yet</h3>
          ) : (
            <>
              {postsLikedByUser?.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </>
          )}
        </div>
        <div className="rightSideBar">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default LikedPosts;
