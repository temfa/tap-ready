import React from "react";
import "./what.css";
import Mouse from "../../svg-components/mouse/mouse";
import WhatArrow from "../../svg-components/what-arrow/whatArrow";
import Phone from "../../assets/phone.png";
import Card from "../../assets/cards.png";
import Bot from "../../svg-components/bot/bot";
import Signal from "../../svg-components/signal/signal";
import MasterCard from "../../svg-components/mastercard/masterCard";
import Visa from "../../svg-components/visa/visa";
import AppPay from "../../svg-components/app-pay/appPay";
import GooglePay from "../../svg-components/google-pay/googlePay";

const What = () => {
  return (
    <div className="what-container">
      <div className="what-mouse">
        <Mouse />
      </div>
      <div className="what-head">
        <h2>What makes Tapstride payment solution.</h2>
        <div>
          <WhatArrow />
        </div>
      </div>
      <div className="what-body">
        <div className="what-type">
          <div className="what-nfc">
            <p>NFC Tap to Pay</p>
            <h2>Mobile Solution</h2>
            <div>
              <img src={Card} alt="card" />
              <img src={Phone} alt="phone" />
            </div>
          </div>
          <div className="what-andriod">
            <div className="what-os">
              <p>Supported OS</p>
              <h2>Android 6.0+</h2>
              <div>
                <Bot />
              </div>
            </div>
            <div className="what-compact">
              <div>
                <h2>NFC compatibility.</h2>
                <p>No external card readers are required.</p>
              </div>
              <div className="what-signal">
                <Signal />
              </div>
            </div>
          </div>
        </div>
        <div className="what-support">
          <h2>Supported Card options.</h2>
          <div>
            <MasterCard />
            <Visa />
            <AppPay />
            <GooglePay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
