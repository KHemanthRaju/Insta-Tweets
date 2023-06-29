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
