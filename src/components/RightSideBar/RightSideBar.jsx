import React from "react";
import "../RightSideBar/RightSideBar.css";
import SearchBar from "../SearchBar/SearchBar";
import SuggestedUser from "../SuggestedUser/SuggestedUser";
import { useData } from "../../contexts/dataContext";

const RightSideBar = () => {
  const { darkMode } = useData();
  return (
    <div className={`right-sidebar ${darkMode && "bgDarkmode darkModeBorder"}`}>
      <SearchBar />
      <div className={`suggested-users ${darkMode && "bgSecondaryDarkMode"}`}>
        <h4>Suggestions for you</h4>
        <SuggestedUser />
      </div>
    </div>
  );
};

export default RightSideBar;
