import { useState } from "react";
import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { Navbar } from "../../components/Navbar/Navbar";
import { useAuth } from "../../contexts/authContext";
import { useData } from "../../contexts/dataContext";
import "../Home/Home.css";
import { getSortedPosts, sortOptions } from "../../utils/sortPosts";
import { PostForm } from "../../components/PostForm/PostForm";
import { ClipLoader } from "react-spinners";
import { PostCard } from "../../components/PostCard/PostCard";

export const Home = () => {
  document.title = "Insta-Tweets | Home";

  const { dataState } = useData();
  const { authState } = useAuth();

  const loggedInUser = dataState?.users?.find(
    ({ username }) => username === authState?.user?.username
  );

  const postsOfFollowed = dataState?.posts?.filter(
    (post) =>
      loggedInUser?.following?.some(
        ({ username }) => username === post.username
      ) || authState?.user?.username === post.username
  );

  const [sortByOption, setSortByOption] = useState("Latest");

  const sortedPosts = getSortedPosts(postsOfFollowed, sortByOption);

  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <LeftSideBar />
        <div className="home-main">
          <PostForm />
          {dataState?.postsLoading ? (
            <ClipLoader color="blue" size={60} />
          ) : postsOfFollowed?.length === 0 ? (
            <h3>No Posts to Display</h3>
          ) : (
            <div>
              <div className="sort-post">
                <h3>{sortOptions[sortByOption]}</h3>
                <select onChange={(e) => setSortByOption(e.target.value)}>
                  {Object.keys(sortOptions).map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              {sortedPosts?.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
