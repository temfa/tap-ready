import React from "react";
import "./landing.css";
import Welcome from "../../components/welcome/welcome";
import What from "../../components/what/what";
import Footer from "../../components/footer/footer";
import CustomeReq from "../../components/custom-req/customReq";

const Landing = () => {
  return (
    <div className="landing-container">
      <Welcome />
      <What />
      <CustomeReq />
      <Footer />
    </div>
  );
};

export default Landing;
