import React from "react";
import "./landing.css";
import Welcome from "../../components/welcome/welcome";
import What from "../../components/what/what";
import Footer from "../../components/footer/footer";
import CustomeReq from "../../components/custom-req/customReq";
import ProductSummary from "../../components/product-summary/productSummary";
import Power from "../../components/power/power";

const Landing = () => {
  return (
    <div className="landing-container">
      <Welcome />
      <What />
      <Power />
      <ProductSummary />
      <CustomeReq />
      <Footer />
    </div>
  );
};

export default Landing;
