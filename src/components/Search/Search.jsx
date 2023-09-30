import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

//////import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

const singleBtn = ["Economy", "Business Class", "First Class"];

const countries = [
  "--- Choose the place ---",
  "Taiwan",
  "China",
  "Mongolia",
  "North Korea",
  "Korea",
  "Japan",
  "VietNam",
  "Brunei",
  "East Timor",
  "Campuchia",
  "Indonesia",
  "Laos",
  "Malaysia",
  "Philippines",
  "Myanmar",
  "Singapore",
  "Thailand",
  "Afghanistan",
  "Maldives",
  "Bhutan",
  "Bangladesh",
  "India",
  "Iran",
  "Nepal",
  "Pakistan",
  "Sri",
  "Lanka",
  "Armenia",
  "Azerbaijan",
  "Bahrain",
  "Georgia",
  "Israel",
  "Liban",
  "Oman",
  "Palestine",
  "Czech Republic",
  "Arabic",
  "Iraq",
  "Jordan",
  "Kuwait",
  "Yemen",
  "Saudi Arabic",
  "Qatar",
  "Türkiye",
  "Syria",
  "Uzbekistan",
  "Turkmenistan",
  "Kyrgyzstan",
  "Kazakhstan",
  "Tajikistan",
  "England",
  "Latvia",
  "Lithuania",
  "Finland",
  "Sweden",
  "Estonia",
  "Denmark",
  "Chireland",
  "Norway",
  "Iceland",
  "Belarus",
  "Romania",
  "Bulgaria",
  "Hungary",
  "Slovakia",
  "Russia",
  "Ukraine",
  "Moldova",
  "Poland",
  "Albania Bosnia",
  "Herzegovina",
  "Croatia",
  "Macedonia",
  "MaltaMontenegro",
  "Slovenia",
  "Italy",
  "Greek",
  "Portugal",
  "Spain",
  "Vatican",
  "Andorra",
  "San Marino",
  "Serbia",
  "Belgium",
  "Netherlands",
  "Luxembourg",
  "Switzerland",
  "Republic of Austria",
  "Germany",
  "Liechtenstein",
  "Pháp",
  "Monaco",
  "Algeria",
  "Maroc",
  "Tunisia",
  "Egypt",
  "Libya",
  "Sudan",
  "Western Sahara",
  "Lesotho",
  "Namibia",
  "Botswana",
  "South Africa",
  "Swaziland",
  "Cameroon",
  "Democratic Republic of the Congo Gabon",
  "São Tomé",
  "Príncipe Chad",
  "Angola",
  "Republic of the Congo",
  "Central African Republic",
  "Equatorial Guinea",
  "Chad",
  "Australia",
  "Fiji",
  "Kiribati",
  "Marshall Islands",
  "Micronesia",
  "Nauru",
  "New Zealand",
  "Palau",
  "Papua New Guinea",
  "Samoa",
  "Solomon Islands",
  "Tonga",
  "Tuvalu",
  "Vanuatu",
];

const Search = () => {
  const [toggleClick, setToggleClick] = useState(null);
  const [flyType, setFlyType] = useState("");
  const [location, setLocation] = useState("");
  const [travelers, setTravelers] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [checkFlyType, setCheckFlyType] = useState(false);
  const [checkLocation, setCheckLocation] = useState(false);
  const [checkTravelers, setCheckTravelers] = useState(false);
  const [checkCheckIn, setCheckCheckIn] = useState(false);
  const [checkCheckOut, setCheckCheckOut] = useState(false);

  const toggleBtn = (params) => {
    setToggleClick(params);
  };

  const searchFlight = () => {
    console.log("flyType", flyType);
    console.log("location", location);
    console.log("travelers", travelers);
    console.log("checkIn", checkIn);
    console.log("checkOut", checkOut);

    const myFlight = [flyType, location, travelers, checkIn, checkOut];
    console.log("myFlight", myFlight);

    if (
      (flyType == "" || flyType == null) &&
      (location == "" || location == null) &&
      (travelers == "" || travelers == null) &&
      (checkIn == "" || checkIn == null) &&
      (checkOut == "" || checkOut == null)
    ) {
      setCheckFlyType(true);
      setCheckLocation(true);
      setCheckTravelers(true);
      setCheckCheckIn(true);
      setCheckCheckOut(true);
    } else if (
      (flyType != "" || flyType != null) &&
      (location != "" || location != null) &&
      (travelers != "" || travelers != null) &&
      (checkIn != "" || checkIn != null) &&
      (checkOut != "" || checkOut != null)
    ) {
      setCheckFlyType(false);
      setCheckLocation(false);
      setCheckTravelers(false);
      setCheckCheckIn(false);
      setCheckCheckOut(false);
    }

    // if (
    //   (flyType != "" || flyType != null) &&
    //   (location == "" || location == null) &&
    //   (travelers == "" || travelers == null) &&
    //   (checkIn == "" || checkIn == null) &&
    //   (checkOut == "" || checkOut == null)
    // ) {
    //   setCheckFlyType(false);
    //   setCheckLocation(true);
    //   setCheckTravelers(true);
    //   setCheckCheckIn(true);
    //   setCheckCheckOut(true);
    // }

    // if (
    //   (flyType != "" || flyType != null) &&
    //   (location != "" || location != null) &&
    //   (travelers == "" || travelers == null) &&
    //   (checkIn == "" || checkIn == null) &&
    //   (checkOut == "" || checkOut == null)
    // ) {
    //   setCheckFlyType(false);
    //   setCheckLocation(false);
    //   setCheckTravelers(true);
    //   setCheckCheckIn(true);
    //   setCheckCheckOut(true);
    // }

    // if (
    //   (flyType != "" || flyType != null) &&
    //   (location != "" || location != null) &&
    //   (travelers != "" || travelers != null) &&
    //   (checkIn == "" || checkIn == null) &&
    //   (checkOut == "" || checkOut == null)
    // ) {
    //   setCheckFlyType(false);
    //   setCheckLocation(false);
    //   setCheckTravelers(false);
    //   setCheckCheckIn(true);
    //   setCheckCheckOut(true);
    // }

    // if (
    //   (flyType != "" || flyType != null) &&
    //   (location != "" || location != null) &&
    //   (travelers != "" || travelers != null) &&
    //   (checkIn != "" || checkIn != null) &&
    //   (checkOut == "" || checkOut == null)
    // ) {
    //   setCheckFlyType(false);
    //   setCheckLocation(false);
    //   setCheckTravelers(false);
    //   setCheckCheckIn(false);
    //   setCheckCheckOut(true);
    // }

    // if (
    //   (flyType != "" || flyType != null) &&
    //   (location == "" || location == null) &&
    //   (travelers == "" || travelers == null) &&
    //   (checkIn == "" || checkIn == null) &&
    //   (checkOut == "" || checkOut == null)
    // ) {
    //   setCheckFlyType(false);
    //   setCheckLocation(true);
    //   setCheckTravelers(true);
    //   setCheckCheckIn(true);
    //   setCheckCheckOut(true);
    // }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="search container section">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer grid"
      >
        <div className="btns flex">
          {singleBtn.map((item, index) => {
            return (
              <div
                className={
                  toggleClick == index
                    ? "singleBtn singleBtnActive"
                    : "singleBtn"
                }
                onClick={() => {
                  toggleBtn(index);
                  setFlyType(item);
                }}
                key={index}
              >
                <span>{item}</span>
              </div>
            );
          })}
        </div>

        {checkFlyType == true ? (
          <p
            style={{
              color: "red",
              fontSize: "16px",
              width: "100%",
              textAlign: "center",
            }}
          >
            Please choose your sheet type class!
          </p>
        ) : (
          ""
        )}

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="seachInputs flex"
        >
          {/* single input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>

            <div className="texts">
              <h4>Location</h4>
              <select id="countries">
                {countries.map((item, index) => {
                  location == item;
                  return (
                    <option value={location} key={index}>
                      {item}
                    </option>
                  );
                })}
              </select>

              {checkLocation == true ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "8px",
                  }}
                >
                  Please choose the place you want to go!
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* single input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>

            <div className="texts">
              <h4>Travelers</h4>
              <input
                type="text"
                value={travelers}
                onChange={(e) => {
                  setTravelers(e.currentTarget.value);
                }}
                placeholder="Add guests"
              />

              {checkTravelers == true ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "8px",
                  }}
                >
                  Please enter your full name!
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* single input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>

            <div className="texts">
              <h4>Check In</h4>
              <input
                type="text"
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.currentTarget.value);
                }}
                placeholder="Add date"
              />

              {checkCheckIn == true ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "8px",
                  }}
                >
                  Please choose time check in!
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* single input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>

            <div className="texts">
              <h4>Check Out</h4>
              <input
                type="text"
                value={checkOut}
                onChange={(e) => {
                  setCheckOut(e.currentTarget.value);
                }}
                placeholder="Add date"
              />

              {checkCheckOut == true ? (
                <p
                  style={{
                    color: "red",
                    fontSize: "8px",
                  }}
                >
                  Please choose time check out!
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <button className="btn btnBlock flex" onClick={searchFlight}>
            Search Flight
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
