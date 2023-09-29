import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Subcribers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="subcribe section">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer container"
      >
        <h2>Subscribe Newsletters & get Latest News</h2>

        <div className="inputDiv flex">
          <input type="text" placeholder="Enter your email address" />
          <button className="btn">Subcribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subcribers;
