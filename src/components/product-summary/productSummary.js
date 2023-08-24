import React from "react";
import "./productSummary.css";

const ProductSummary = () => {
  return (
    <div className="product-summary-container">
      <h2>
        Checkout the <span>tapReady</span>
      </h2>
      <h2> Product Summary</h2>
      <div className="product-summary-wrapper">
        <div className="product-sdk">
          <div className="product-sdk-header">
            <div></div>
            <div>
              <p>Tap to Mobile SDK</p>
            </div>
            <div>
              <p>Contactless Java SDK</p>
            </div>
            <div>
              <p>Contactless Generic SDK</p>
            </div>
          </div>
          <div className="product-sdk-body">
            <div>
              <p>Operating systems</p>
            </div>
            <div>
              <p>Android / iOS</p>
            </div>
            <div>
              <p>Android </p>
            </div>
            <div>
              <p>Any platform that has a C compiler</p>
            </div>
          </div>
          <div className="product-sdk-body">
            <div>
              <p>Supported Development Languages</p>
            </div>
            <div>
              <p>Java, React, Flutter, Kotlin</p>
            </div>
            <div>
              <p>Java, React, Flutter, Kotlin </p>
            </div>
            <div>
              <p>C, C++</p>
            </div>
          </div>
          <div className="product-sdk-body">
            <div>
              <p>Suited for</p>
            </div>
            <div>
              <p>Mobile phones Tablets, Smart watches</p>
            </div>
            <div>
              <p>Android NFC Readers Android POS </p>
            </div>
            <div>
              <p>Linux POS ATM Embedded devices</p>
            </div>
          </div>
        </div>
        <div className="product-support">
          <div className="product-support-single">
            <div className="product-support-head">
              <h2>Supported Card Schemes</h2>
            </div>
            <div className="product-support-body">
              <p>Mastercard (Version 3.0.2), Visa VCPS (Version 2.2) Apple Pay, Google Pay</p>
            </div>
          </div>
          <div className="product-support-single">
            <div className="product-support-head">
              <h2>Data Authentication Methods</h2>
            </div>
            <div className="product-support-body">
              <p>Visa fast Dynamic Data Authentication (fDDA) MasterCard and Maestro Contactless SDA and CDA</p>
            </div>
          </div>
          <div className="product-support-single">
            <div className="product-support-head">
              <h2>Terminal Configuration</h2>
            </div>
            <div className="product-support-body">
              <p>Online Only, Offline with Online capability, Offline Only</p>
            </div>
          </div>
          <div className="product-support-single">
            <div className="product-support-head">
              <h2>Acquirer Interfaces</h2>
            </div>
            <div className="product-support-body">
              <p>Authorization Request, Financial Transaction Request, Batch Data Capture, Online Data Capture</p>
            </div>
          </div>
          <div className="product-support-single">
            <div className="product-support-head">
              <h2>Cardholder Verification Methods</h2>
            </div>
            <div className="product-support-body">
              <p>Online Enciphered PINSignature, No CVM, Fail CVM, Mobile Device CVM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
