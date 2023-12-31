import React from "react";
import "../SuggestedUser/Suggesteduser.css";
import { useNavigate } from "react-router-dom";
import { followUserHandler } from "../../utils/followUserHandler";
import { unfollowUserHandler } from "../../utils/unfollowUserHandler";
import { toast } from "react-toastify";
import { isFollowed } from "../../utils/isFollowed";
import ClipLoader from "react-spinners/ClipLoader";
import { useData } from "../../contexts/dataContext";
import { useAuth } from "../../contexts/authContext";

const SuggestedUser = () => {
  const { dataState, dataDispatch } = useData();

  const { authState } = useAuth();

  const userData = dataState?.users?.find(
    (user) => user.username === authState?.user?.username
  );

  const suggestedUsers = dataState?.users
    ?.filter((user) => user.username !== userData?.username)
    ?.filter(
      (eachUser) =>
        !userData?.following?.find(
          (data) => data.username === eachUser.username
        )
    );

  const navigate = useNavigate();

  return (
    <div>
      {dataState.usersLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ClipLoader color="var(--primary-dark)" size={50} />
        </div>
      ) : (
        <div className="suggested-users-main">
          {suggestedUsers?.length > 0 ? (
            suggestedUsers
              ?.splice(0, 3)
              ?.map(({ _id, firstName, lastName, username, profileAvatar }) => {
                return (
                  <li key={_id} className="suggested-user">
                    <div
                      className="suggested-user-name-profile"
                      onClick={() => {
                        navigate(`/profile/${username}`);
                      }}
                    >
                      <img
                        className="user-avatar"
                        src={
                          profileAvatar ||
                          `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
                        }
                        alt="avatar"
                      />
                      <div className="suggestedUser-name">
                        <span>
                          {firstName} {lastName}
                        </span>
                        <small>@{username}</small>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (authState?.token) {
                          if (isFollowed(dataState?.users, _id)) {
                            unfollowUserHandler(
                              authState?.token,
                              _id,
                              dataDispatch
                            );
                          } else {
                            followUserHandler(
                              authState?.token,
                              _id,
                              dataDispatch
                            );
                          }
                        } else {
                          toast.error("Please login to follow");
                          navigate("/login");
                        }
                      }}
                    >
                      {isFollowed(dataState?.users, _id)
                        ? "Following"
                        : "Follow"}
                    </button>
                  </li>
                );
              })
          ) : (
            <p>No suggested user is present.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SuggestedUser;
