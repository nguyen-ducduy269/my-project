import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

///// import assets
import backGroundView from "../../assets/backGroundView.mp4";
import takeOffImg from "../../assets/takeOff.png";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">
          Create Ever-lasting Memories With Us
        </h1>
      </div>

      <div
        data-aos="fade-down"
        data-aos-duration="2500"
        className="homeImages flex"
      >
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
