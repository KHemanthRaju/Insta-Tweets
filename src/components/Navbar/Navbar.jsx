import { useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useAuth } from "../../contexts/authContext";

export const Navbar = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <nav>
        <div className="left-nav" onClick={() => navigate("/home")}>
          <h2>Insta-Tweets</h2>
        </div>
        <div className="right-nav">
          {authState?.token && (
            <img
              onClick={() => {
                navigate(`/profile/${authState?.user?.usernames}`);
              }}
              src={
                authState?.user?.profileAvatar ||
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
