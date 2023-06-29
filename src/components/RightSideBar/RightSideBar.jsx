import React from "react";
import "../RightSideBar/RightSideBar.css";
import SearchBar from "../SearchBar/SearchBar";
import SuggestedUser from "../SuggestedUser/SuggestedUser";

const RightSideBar = () => {
  return (
    <div className="right-sidebar">
      <SearchBar />
      <div className="suggested-users">
        <h4>Suggestions for you</h4>
        <SuggestedUser />
      </div>
    </div>
  );
};

export default RightSideBar;
