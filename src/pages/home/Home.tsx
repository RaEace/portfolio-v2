import Developer from "/svg/developer.svg?react";
import HomePicture from "../../components/homePicture/HomePicture";

import "./Home.css";
import HomeButton from "../../components/homeButton/HomeButton";

const Home = () => {
  return (
    <div className="layout">
      <div className="container">
        <div className="text-container">
          {/* <HomePicture /> */}
          <h1 className="home-title">Hey, i'm Jules</h1>
          <p className="home-text">
            A fullstack developer with 3 years of experience. <br />
            I am passionate about JavaScript technologies. <br /> I have worked
            on various projects that have allowed me to develop my skills in
            both frontend and backend development.
          </p>
          <div>
            <HomeButton text="About me" />
            <HomeButton text="contact me" />
          </div>
        </div>

        <div className="animation-container">
          <object
            className="animation-size"
            type="image/svg+xml"
            data={Developer}
          ></object>
        </div>
      </div>
    </div>
  );
};

export default Home;
