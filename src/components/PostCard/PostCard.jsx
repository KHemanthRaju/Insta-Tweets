import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useData } from "../../contexts/dataContext";
import { useState } from "react";
import { getPostDate } from "../../utils/getPostData";
import { bookmarkPostHandler } from "../../backend/controllers/UserController";
import { toast } from "react-toastify";
import {
  dislikePostHandler,
  likePostHandler,
} from "../../backend/controllers/PostController";

export const PostCard = ({ post }) => {
  const { _id, content, mediaURL, likes, comments, username, createdAt } = post;

  const { dataState, dataDispatch } = useData();
  const { authState } = useAuth();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [showCommentSection, setShowCommentSection] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const editClickHandler = () => {
    setShowOptions(false);
    setShowEditModal(true);
  };

  const deleteClickHandler = () => {
    // deletePostHsandler(authState?.token,_id,dataDispatch);
  };

  const isliked = () =>
    likes?.likedBy?.filter(({ _id }) => _id === authState?.user?._id)
      ?.length !== 0;

  const isBookmarked = () =>
    dataState?.bookmarks?.filter((postId) => postId === _id)?.length !== 0;

  const copyLinkHandler = () => {
    navigator.clipboard.writeText(`https://tech-social.vercel.app/post/${_id}`);
    toast.success("Link Copied. Start sharing!");
  };

  return (
    <div key={_id} className="postcard-main">
      <div className="postcard-header">
        <div
          className="postcard-header-left"
          onClick={() => navigate(`/profile/${username}`)}
        >
          <img
            src={
              dataState?.token?.users?.find(
                (user) => user.username === username
              )?.profileAvatar
            }
            alt="Avatar"
          />
          <div>
            <h4>{`${
              dataState?.users?.find((user) => user.username === username)
                ?.firstName
            }${
              dataState?.users?.find((user) => user.username === username)
                ?.lastName
            }`}</h4>
            <small>
              @{username}
              {" - "}
              <span>{getPostDate(createdAt)}</span>
            </small>
          </div>
        </div>
        {username === authState?.user?.username && (
          <div className="edit-delete-icon">
            <i
              className="fa-solid fa-ellipsis"
              onClick={() => setShowOptions(!showOptions)}
            ></i>
            {showOptions && (
              <div className="edit-delete-post-modal">
                <div onClick={editClickHandler}>Edit</div>
                <hr />
                <div onClick={deleteClickHandler}>Delete</div>
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className="postcard-content-main"
        onClick={() => {
          navigate(`/post/${_id}`);
        }}
      >
        {content}
        {/* <Linkify className="content" componentDecorator={contentLink}>
          {content}
        </Linkify> */}
        {mediaURL && mediaURL.split("/")[4] === "image" ? (
          <img
            src={mediaURL}
            alt="post-pic"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        ) : (
          mediaURL && (
            <video
              controls
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            >
              <source src={mediaURL} />
            </video>
          )
        )}
      </div>
      <hr />
      <div className="postcard-buttons">
        <div>
          <i
            className={`${isliked() ? "fa-solid" : "fa-regular"} fa-heart`}
            onClick={() => {
              if (!authState?.token) {
                toast.error("Please login to proceed!");
              } else {
                isliked()
                  ? dislikePostHandler(authState?.token, _id, dataDispatch)
                  : likePostHandler(authState?.token, _id, dataDispatch);
              }
            }}
          ></i>{" "}
          <span>{likes?.likeCount}</span>
        </div>
        <div>
          <i
            className="fa-regular fa-comment"
            onClick={() => {
              pathname === `/post/${_id}`
                ? setShowCommentSection(false)
                : setShowCommentSection(!showCommentSection);
            }}
          ></i>{" "}
          <span>{comments?.length}</span>
        </div>
        <div>
          <i
            className={`${
              isBookmarked() ? "fa-solid" : "fa-regular"
            } fa-bookmark`}
            onClick={() => {
              if (!authState?.token) {
                toast.error("Please login to proceed!");
              } else {
                bookmarkPostHandler();
              }
            }}
          ></i>
        </div>
        <div>
          <i
            className="fa-regular fa-share-from-square"
            onClick={copyLinkHandler}
          ></i>
        </div>
      </div>
    </div>
  );
};
