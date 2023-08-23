import React from "react";

const DoubleCircle = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="73" viewBox="0 0 107 73" fill="none">
      <g filter="url(#filter0_b_264_1372)">
        <ellipse cx="35" cy="36.6614" rx="35" ry="35.9856" fill="white" fill-opacity="0.2" />
        <path
          d="M69.5 36.6614C69.5 56.2727 54.0408 72.1469 35 72.1469C15.9592 72.1469 0.5 56.2727 0.5 36.6614C0.5 17.05 15.9592 1.17578 35 1.17578C54.0408 1.17578 69.5 17.05 69.5 36.6614Z"
          stroke="url(#paint0_radial_264_1372)"
        />
      </g>
      <g filter="url(#filter1_b_264_1372)">
        <ellipse cx="72" cy="36.6614" rx="35" ry="35.9856" fill="white" fill-opacity="0.2" />
        <path
          d="M106.5 36.6614C106.5 56.2727 91.0408 72.1469 72 72.1469C52.9592 72.1469 37.5 56.2727 37.5 36.6614C37.5 17.05 52.9592 1.17578 72 1.17578C91.0408 1.17578 106.5 17.05 106.5 36.6614Z"
          stroke="url(#paint1_radial_264_1372)"
        />
      </g>
      <defs>
        <filter id="filter0_b_264_1372" x="-40" y="-39.3242" width="150" height="151.971" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_264_1372" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_264_1372" result="shape" />
        </filter>
        <filter id="filter1_b_264_1372" x="-3" y="-39.3242" width="150" height="151.971" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_264_1372" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_264_1372" result="shape" />
        </filter>
        <radialGradient
          id="paint0_radial_264_1372"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-8.62319 -12.7787) rotate(65.6098) scale(121.402 102.486)">
          <stop stop-color="white" stop-opacity="0.75" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_264_1372"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.3768 -12.7787) rotate(65.6098) scale(121.402 102.486)">
          <stop stop-color="white" stop-opacity="0.75" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default DoubleCircle;
