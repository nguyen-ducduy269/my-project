import React from "react";

const information = [
  {
    id: 1,
    number: "01",
    title: "Travel requirements for Dubai",
    discription:
      "Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!",
  },
  {
    id: 2,
    number: "02",
    title: "Chauffeur services at your arrival",
    discription:
      "Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!",
    color: "var(--colorOne)",
  },
  {
    id: 3,
    number: "03",
    title: "Multi-risk travel insurance",
    discription:
      "Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!",

    color: "var(--colorTwo)",
  },
];

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
            {information.map((item) => {
              return (
                <div className="singleInfo" key={item.id}>
                  <span
                    className="number"
                    style={{
                      "--color": item.color,
                    }}
                  >
                    {item.number}
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.discription}</p>
                </div>
              );
            })}
          </div>

          <div className="imgDiv">
            <img
              src="https://mixkit.imgix.net/videos/preview/mixkit-outside-a-plane-window-4203-0.jpg?q=80&auto=format%2Ccompress"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
