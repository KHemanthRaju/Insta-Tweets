import { LeftSideBar } from "../../components/LeftSideBar/LeftSideBar";
import { Navbar } from "../../components/Navbar/Navbar";
import "../Home/Home.css";

export const Home = () => {
  return (
    <>
      <Navbar />
      <LeftSideBar />
      <div>Home Page</div>
    </>
  );
};
