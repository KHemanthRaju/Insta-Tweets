import React, { useEffect, useState } from "react";
import "../PostDetails/PostDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { useData } from "../../contexts/dataContext";
import { Navbar } from "../../components/Navbar/Navbar";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { PostCard } from "../../components/PostCard/PostCard";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const PostDetails = () => {
  document.title = "tech-social | Post Details";

  const [singlePostLoading, setSinglePostLoading] = useState(false);
  const [postDetails, setPostDetails] = useState({});

  const { dataState } = useData();

  const { postID } = useParams();

  const getPostDetails = async () => {
    try {
      setSinglePostLoading(true);
      const { data, status } = await axios.get(`/api/posts/${postID}`);
      if (status === 200) {
        setPostDetails(data?.post);
        setSinglePostLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPostDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataState.posts]);

  return (
    <div className="post-details">
      <Navbar />
      <div className="post-details-content">
        <LeftSideBar />
        <div className="post-details-main">
          {singlePostLoading ? (
            <ClipLoader color="var(--primary-dark)" size={60} />
          ) : (
            postDetails && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PostCard key={postDetails._id} post={postDetails} />
                {postDetails?.comments?.length > 0 ? (
                  <div className="single-page-comment-container">
                    {postDetails?.comments?.map((comment) => {
                      const userComment = dataState?.users?.find(
                        (user) => user.username === comment?.username
                      );
                      return (
                        <div
                          key={comment._id}
                          className="post-comment-container"
                        >
                          <img
                            src={
                              userComment?.profileAvatar ||
                              `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
                            }
                            alt="profile-pic"
                          />
                          <div>
                            <strong>{`${userComment?.firstName} ${userComment?.lastName}`}</strong>
                            <p className="commnet-text">{comment?.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            )
          )}
        </div>
        <div className="rightSideBar">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
