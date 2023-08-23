import React from "react";
import "./welcome.css";
import Header from "../header/header";
import Biggest from "../../assets/biggest-circle.svg";
import Bigger from "../../assets/bigger-circle.svg";
import Big from "../../assets/big-circle.svg";
import Phone from "../../assets/iphone.svg";
import DoubleCircle from "../../svg-components/double-circle/doubleCircle";
import GooglePlay from "../../svg-components/google-play/googlePlay";
import AppStore from "../../svg-components/app-store/appStore";
import TapCard from "../../assets/tap-card.svg";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Header />
      <div className="welcome-wrapper">
        <h2>
          Accept contactless payment on NFC-enabled <span>devices</span> .
        </h2>
        <div className="welcome-cont">
          <div className="biggest-circle">
            <img src={Biggest} alt="biggest" />
          </div>
          <div className="bigger-circle">
            <img src={Bigger} alt="big" />
          </div>
          <div className="big-circle">
            <img src={Big} alt="big" />
          </div>
          <div className="phone-contents">
            <img src={Phone} alt="phone" />
            <div className="phone-texts">
              <DoubleCircle />
              <h2>Accept contactless payments on smartphones, tablets, smart watches, POS/ATM. All banks supported.</h2>
            </div>
            <div className="phone-store">
              <div>
                <GooglePlay />
                <AppStore />
              </div>
              <img src={TapCard} alt="tapCard" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
