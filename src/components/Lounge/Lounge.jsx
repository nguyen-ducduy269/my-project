import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Lounge = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="image1"
          >
            <img
              src="https://images.unsplash.com/photo-1483450388369-9ed95738483c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluc2lkZSUyMGFpcnBsYW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
          </div>

          <div data-aos="fade-left" data-aos-duration="1500" className="image2">
            <img
              src="https://images.unsplash.com/photo-1608023136037-626dad6c6188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zaWRlJTIwYWlycGxhbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
          </div>
        </div>

        <div className="textDiv">
          <h2 data-aos="fade-down" data-aos-duration="1500">
            Unaccompanied Minor Lounge
          </h2>

          <div className="grids grid">
            <div
              className="singleGrid"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <span className="gridTitle">Help through the airpot</span>

              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div
              className="singleGrid"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <span className="gridTitle">Priority Boarding</span>

              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div
              className="singleGrid"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <span className="gridTitle">Care on the flight</span>

              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div
              className="singleGrid"
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              <span className="gridTitle">Chauffeur drive service</span>

              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
