import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Subcribers = () => {
  const [inputText, setInputText] = useState();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const changeInputText = () => {
    console.log(inputText);
  };

  return (
    <div className="subcribe section">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="sectionContainer container"
      >
        <h2>Subscribe Newsletters & get Latest News</h2>

        <div className="inputDiv flex">
          <input
            type="text"
            placeholder="Enter your email address"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button className="btn" onClick={() => changeInputText()}>
            Subcribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subcribers;
