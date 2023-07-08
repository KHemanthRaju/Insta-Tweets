import { useState } from "react";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { Navbar } from "../../components/Navbar/Navbar";
import { useAuth } from "../../contexts/authContext";
import { useData } from "../../contexts/dataContext";
import "../Home/Home.css";
import { getSortedPosts, sortOptions } from "../../utils/sortPosts";
import { ClipLoader } from "react-spinners";
import { PostCard } from "../../components/PostCard/PostCard";
import PostForm from "../../components/PostForm/PostForm";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

export const Home = () => {
  document.title = "Insta-Tweets | Home";

  const { dataState, darkMode } = useData();
  const { authState } = useAuth();
  console.log("Data State", dataState.users);
  console.log("Auth State", authState?.user?.username);
  const loggedInUser = dataState?.users?.find(
    ({ username }) => username === authState.user.username
  );
  console.log("Logggedin User", loggedInUser);

  const postsOfFollowed = dataState?.posts?.filter(
    (post) =>
      loggedInUser?.following?.some(
        ({ username }) => username === post.username
      ) || authState?.user?.username === post.username
  );
  console.log(dataState.posts);
  console.log(postsOfFollowed);
  console.log(loggedInUser);

  const [sortByOption, setSortByOption] = useState("Latest");

  const sortedPosts = getSortedPosts(postsOfFollowed, sortByOption);
  console.log("Sorted Post", sortedPosts);

  return (
    <div className={`home ${darkMode && "bgDarkmode"}`}>
      <Navbar />
      <div className="home-content">
        <LeftSideBar />
        <div className={`home-main ${darkMode && "bgDarkmode"}`}>
          <PostForm />
          {console.log(postsOfFollowed)}
          {console.log("Posts Loading", dataState.postsLoading)}
          {dataState?.postsLoading ? (
            <ClipLoader color="var(--primary-dark)" size={60} />
          ) : postsOfFollowed?.length === 0 ? (
            <h3>No Posts to Display!</h3>
          ) : (
            <div style={{ width: "100%" }}>
              <div className="sort-post">
                <h3>{sortOptions[sortByOption]}</h3>
                <select
                  onChange={(e) => setSortByOption(e.target.value)}
                  className={`${darkMode && "bgDarkmode"}`}
                >
                  {Object.keys(sortOptions).map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {sortedPosts?.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="rightSideBar">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};
