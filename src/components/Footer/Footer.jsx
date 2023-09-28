import React from "react";

//// import icons
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img
              src="data:image/png;base64,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"
              className="logo"
              alt=""
            />
          </div>

          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterestP className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check In</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Our communities</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Chauffuer</a>
          </li>
          <li>
            <a href="">Our partners</a>
          </li>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Transportation</a>
          </li>
          <li>
            <a href="">Programme Rules</a>
          </li>
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>
          Courtesy Design | Developed by{" "}
          <a href="" target="_blank">
            NguyenDucDuy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
