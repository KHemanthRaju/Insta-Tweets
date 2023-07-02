import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useAuth } from "./authContext";
import { dataReducer } from "../reducers/dataReducer";
import axios from "axios";
import { toast } from "react-toastify";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { authState } = useAuth();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const initialState = {
    users: [],
    usersLoading: false,
    posts: [],
    postsLoading: false,
    bookmarks: [],
    userPost: [],
  };
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);
  const getAllUsers = async () => {
    try {
      dataDispatch({ type: "USERS_LOADING", payload: true });
      const { data, status } = await axios.get("/api/users");
      if (status === 200) {
        dataDispatch({ type: "SET_ALL_USERS", payload: data?.users });
        dataDispatch({ type: "USERS_LOADING", payload: false });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.errors[0]);
    }
  };

  const getAllPosts = async () => {
    try {
      dataDispatch({ type: "POSTS_LOADING", payload: true });
      const { data, status } = await axios.get("/api/posts");
      console.log("Home data", data);
      console.log(status);
      if (status === 200) {
        dataDispatch({ type: "SET_ALL_POSTS", payload: data?.posts });
        dataDispatch({ type: "POSTS_LOADING", payload: false });
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.errors[0]);
    }
  };

  const getAllBookmarks = async () => {
    try {
      const { data, status } = await axios.get("/api/users/bookmark", {
        headers: {
          authorization: authState?.token,
        },
      });
      if (status === 200) {
        dataDispatch({ type: "SET_ALL_BOOKMARKS", payload: data?.bookmarks });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (authState.token) {
      getAllUsers();
      getAllPosts();
      getAllBookmarks();
    }
  }, [authState?.token]);

  useEffect(() => {
    localStorage.setItem("theme", `${darkMode ? "dark" : "light"}`);
  }, [darkMode]);

  return (
    <DataContext.Provider
      value={{ dataState, dataDispatch, darkMode, setDarkMode }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
