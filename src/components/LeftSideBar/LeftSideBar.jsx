import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useState } from "react";
import "../LeftSideBar/LeftSideBar.css";

export const LeftSideBar = () => {
  const navigate = useNavigate();
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  const { authState, userLogout } = useAuth();
  return (
    <>
      <div className="left-sidebar">
        <NavLink to="/" className="left-sidebar-items">
          <span>Home</span>
        </NavLink>
        <NavLink to="/" className="left-sidebar-items">
          <span>Explore</span>
        </NavLink>
        <NavLink to="/" className="left-sidebar-items">
          <span>BookMarks</span>
        </NavLink>
        <NavLink to="/" className="left-sidebar-items">
          <span>Liked Posts</span>
        </NavLink>
        <NavLink to="/" className="left-sidebar-items">
          <span>Profile</span>
        </NavLink>
        {authState?.token ? (
          <p onClick={() => userLogout()} className="left-sidebar-items">
            <span>Logout</span>
          </p>
        ) : (
          <p onClick={() => navigate("/login")} className="left-sidebar-items">
            <span>Login</span>
          </p>
        )}
        <button
          className="create-post-btn"
          style={{ cursor: !authState?.token && "not-allowed" }}
          disabled={!authState?.token && true}
          onClick={() => setShowCreatePostModal((prev) => !prev)}
        >
          Create New Post
        </button>
      </div>
    </>
  );
};
