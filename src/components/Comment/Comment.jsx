import React from "react";
// import { AuthContext } from "../../contexts/authContext";
import "../Comment/Comment.css";
import CommentItem from "../CommentItem/CommentItem";

const Comment = ({ post }) => {
  return (
    <div>
      {/* <div className="comment-main-container">
        <img
          src={
            authState?.user?.profileAvatar ||
            `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
          }
          alt="profile-pic"
        />
        <div className="comment-input-container">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <i className="fa-solid fa-paper-plane"></i>
        </div>
      </div> */}
      {post?.comments?.length > 0 ? (
        post?.comments?.map((comment) => (
          <CommentItem comment={comment} key={comment._id} />
        ))
      ) : (
        <p>No comments!</p>
      )}
    </div>
  );
};

export default Comment;
