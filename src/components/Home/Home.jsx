import React from "react";

///// import assets
import backGroundView from "../../assets/backGroundView.mp4";
import takeOffImg from "../../assets/takeOff.png";

const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video
            src={backGroundView}
            autoPlay
            muted
            loop
            className="video"
          ></video>
        </div>

        <img src={takeOffImg} alt="" className="plane" />
      </div>
    </div>
  );
};

export default Home;
