import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useState } from "react";

const Login = () => {
  document.title = "Insta-Tweets | Login";
  const navigate = useNavigate();

  const { userLogin } = useAuth();

  const [isPasswordHide, setIsPasswordHide] = useState(true);

  const [userData, setUserData] = useState({ username: "", password: "" });

  const guestuserData = {
    username: "hemanthraju",
    password: "hemanth@123",
  };

  return (
    <div>
      <div></div>
    </div>
  );
};
