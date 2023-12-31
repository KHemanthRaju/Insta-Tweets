import { useData } from "../../contexts/dataContext";
import { useAuth } from "../../contexts/authContext";
import "../CommentItem/CommentItem.css";
import { useNavigate } from "react-router-dom";

const CommentItem = ({ comment }) => {
  const { dataState } = useData();
  const { authState } = useAuth();
  const navigate = useNavigate();

  const commentUser = dataState?.users?.find(
    ({ username }) => username === comment.username
  );
  const isLoggedInUserComment = comment.username === authState?.user?.username;
  return (
    <div key={comment._id} className="commentItem-main-container">
      {isLoggedInUserComment ? (
        <img
          src={
            authState?.user?.profileAvatar ||
            `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
          }
          onClick={() => navigate(`/profile/${authState?.user?.username}`)}
          alt="profile-pic"
        />
      ) : (
        <img
          style={{
            width: "40px",
            height: "40px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
          src={
            commentUser?.profileAvatar ||
            `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
          }
          onClick={() => navigate(`/profile/${commentUser?.username}`)}
          alt="profile-pic"
        />
      )}
      <div>
        {isLoggedInUserComment ? (
          <strong>
            {authState?.user?.firstName} {authState?.user?.lastName}
          </strong>
        ) : (
          <strong>
            {commentUser?.firstName} {commentUser?.lastName}
          </strong>
        )}
        <p className="comment-text">{comment.text}</p>
      </div>
    </div>
  );
};

export default CommentItem;
