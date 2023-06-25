import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useData } from "../../contexts/dataContext";
import { useState } from "react";

export const PostCard = ({ post }) => {
  const { _id, content, mediaURL, likes, comments, username, createdAt } = post;

  const { dataState, dataDispatch } = useData();
  const { authState } = useAuth();

  const navigate = useNavigate();

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
      </div>
    </div>
  );
};
