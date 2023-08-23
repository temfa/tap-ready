import React from "react";
import "./customReq.css";

const CustomeReq = () => {
  return (
    <div className="customreq-container">
      <h2>Have a custom requirement? </h2>
      <h2>Let’s discuss idea.</h2>
      <div className="customreq-email">
        <input type="text" placeholder="Enter email to subscribe" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default CustomeReq;
