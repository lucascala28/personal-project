import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
const Home = () => {
  const attributeList = [
    "Software Engineer",
    "Chelsea Fan",
    "Pro-fooseballer",
    "Climate Enthusiast",
  ];

  function copyEmail() {
    const email = "scala.luca28@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      const link: HTMLElement = document.getElementById("email") as HTMLElement;
      link.innerText = "Copied!";
      link.style.color = "#fdc1f9";
      setTimeout(() => {
        link.innerText = "Email";
        link.style.color = "#761ab2";
      }, 2000);
    });
  }

  return (
    <>
      <div className="container">
        <div className="top-bottom-box">
          <span className={"link"}>Hello!</span>
        </div>
        <div className="center-box">
          <span className={"name-letter"}>L</span>
        </div>
        <div className="top-bottom-box">TESTING</div>
      </div>
    </>
  );
};

export default Home;
