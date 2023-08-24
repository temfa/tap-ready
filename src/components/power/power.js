import React, { useState } from "react";
import "./power.css";
import PhoneCode from "../../svg-components/phone-code/phoneCode";

const Power = () => {
  const [state, setState] = useState("");
  return (
    <div className="power-container">
      <div className="power-first">
        <div className="power-first-text">
          <h2>Powering contactless payments on NFC-enabled devices.</h2>
          <p>Our Tap to Phone solutions</p>
        </div>
        <div
          className="power-sdk"
          onMouseOver={() => {
            setState("White");
          }}
          onMouseOut={() => {
            setState("");
          }}>
          <h2>White Label</h2>
          <p>
            Are you a bank or a FinTech? <br /> Deploy your own branded T ap to Phone solution in a matter of weeks
          </p>
          <div className="power-sdk-text">
            <div>
              <p>- Speedy development</p>
              <p>- EMV Experts building for you</p>
              <p>- Compliant App</p>
            </div>
            <div className="power-sdk-circle">
              <PhoneCode color={state === "White" ? "#05FF69" : "#000000"} />
            </div>
          </div>
        </div>
      </div>
      <div className="power-second">
        <div
          className="power-sdk"
          onMouseOver={() => {
            setState("SDK");
          }}
          onMouseOut={() => {
            setState("");
          }}>
          <h2>SDK</h2>
          <p>Are you a developer, a device manufacturer, or a software company? </p>
          <p>Integrate NFC payments into your app or device quickly and securely without proprietary card readers or proprietary card issuance.</p>
          <div className="power-sdk-text">
            <div>
              <p>- Tested Software</p>
              <p>- Compliant SDK</p>
            </div>
            <div className="power-sdk-circle">
              <PhoneCode color={state === "SDK" ? "#05FF69" : "#000000"} />
            </div>
          </div>
        </div>
        <div
          className="power-sdk"
          onMouseOver={() => {
            setState("Merchant");
          }}
          onMouseOut={() => {
            setState("");
          }}>
          <h2>Merchant App</h2>
          <p>Are you a merchant, a service contractor, or a trader or a SME?</p>
          <p>Onboard onto our SoftPOS app and start accepting payments quickly.</p>
          <div className="power-sdk-text">
            <div>
              <p>- No external hardware required </p>
              <p>- No terminal delays</p>
              <p>- You can use your phone</p>
              <p>- Competitive rates</p>
            </div>
            <div className="power-sdk-circle">
              <PhoneCode color={state === "Merchant" ? "#05FF69" : "#000000"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Power;
