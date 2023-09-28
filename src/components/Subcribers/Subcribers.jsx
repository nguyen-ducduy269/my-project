import React from "react";

const Subcribers = () => {
  return (
    <div className="subcribe section">
      <div className="sectionContainer container">
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
