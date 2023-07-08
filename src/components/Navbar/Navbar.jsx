import React from "react";
import "../Navbar/Navbar.css";
// import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useAuth } from "../../contexts/authContext";
import { useData } from "../../contexts/dataContext";

export const Navbar = () => {
  const { authState } = useAuth();
  const { dataState, darkMode, setDarkMode } = useData();

  const navigate = useNavigate();
  return (
    <div className={`navbar ${darkMode && "bgDarkmode"}`}>
      <nav>
        <div className="left-nav" onClick={() => navigate("/")}>
          {/* <img src={logo} alt="logo" /> */}
          <h2>Insta-Tweets</h2>
        </div>
        <div className="right-nav">
          <div className="searchBar">
            <SearchBar />
          </div>
          {darkMode ? (
            <i class="fa-solid fa-sun" onClick={() => setDarkMode(false)}></i>
          ) : (
            <i
              className="fa-solid fa-moon"
              onClick={() => setDarkMode(true)}
            ></i>
          )}
          {authState?.token && (
            <img
              onClick={() => {
                navigate(`/profile/${authState?.user?.username}`);
              }}
              src={
                dataState?.users?.find(
                  (user) => user._id === authState?.user._id
                )?.profileAvatar ||
                `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
              }
              alt="profile-pic"
            />
          )}
        </div>
      </nav>
    </div>
  );
};
