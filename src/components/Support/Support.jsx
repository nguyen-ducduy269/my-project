import React from "react";

const Support = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="tittleDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>
            Find helpwith booking and travel plans, see what to expect along the
            journey!
          </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey to your favourite destinations!
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey to your favourite destinations!
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey to your favourite destinations!
              </p>
            </div>
          </div>

          <div className="imgDiv">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
