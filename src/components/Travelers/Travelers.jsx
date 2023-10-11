import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const travelers = [
  {
    id: 1,
    destinationImage:
      "https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=400",
    accountImage:
      "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=400",
    travelersName: "IsraTech",
    travelersMail: "@isratech8",
  },
  {
    id: 2,
    destinationImage:
      "https://images.pexels.com/photos/1400249/pexels-photo-1400249.jpeg?auto=compress&cs=tinysrgb&w=400",
    accountImage:
      "https://images.pexels.com/photos/18363070/pexels-photo-18363070/free-photo-of-man-in-brown-suit-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=400",
    travelersName: "Wilson Lindsey",
    travelersMail: "@wilsonlindsey",
  },
  {
    id: 3,
    destinationImage:
      "https://images.pexels.com/photos/12237149/pexels-photo-12237149.jpeg?auto=compress&cs=tinysrgb&w=400",
    accountImage:
      "https://images.pexels.com/photos/1547742/pexels-photo-1547742.jpeg?auto=compress&cs=tinysrgb&w=400",
    travelersName: "Nicole Web",
    travelersMail: "@nicoleweb",
  },
  {
    id: 4,
    destinationImage:
      "https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=400",
    accountImage:
      "https://images.pexels.com/photos/3310799/pexels-photo-3310799.jpeg?auto=compress&cs=tinysrgb&w=400",
    travelersName: "Naresh Lamer",
    travelersMail: "@nareshlamer",
  },
];

const Travelers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="1500">
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
          {travelers.map((item) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="singleTraveler"
                key={item.id}
              >
                <img
                  src={item.destinationImage}
                  className="destinationImage"
                  alt=""
                />

                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img
                      src={item.accountImage}
                      alt=""
                      className="travelerImage"
                    />
                  </div>

                  <div className="travelerName">
                    <span>{item.travelersName}</span>
                    <p>{item.travelersMail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
