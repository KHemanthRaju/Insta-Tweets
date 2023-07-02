import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Landing } from "./pages/Landing/Landing";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/Home/Home";
import { RequireAuth } from "./components/Auth/RequireAuth";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import LikedPosts from "./pages/LikedPosts/LikedPosts";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/register" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="liked-posts" element={<LikedPosts />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Route>
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
