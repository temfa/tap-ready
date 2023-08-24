import React from "react";

const PhoneCode = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
      <g clip-path="url(#clip0_378_1144)">
        <path
          d="M38.3336 69.9999H26.6669C24.8988 69.9999 23.2031 69.2975 21.9529 68.0473C20.7026 66.797 20.0002 65.1013 20.0002 63.3332V16.6665C20.0002 14.8984 20.7026 13.2027 21.9529 11.9525C23.2031 10.7023 24.8988 9.99988 26.6669 9.99988H53.3336C55.1017 9.99988 56.7974 10.7023 58.0476 11.9525C59.2979 13.2027 60.0002 14.8984 60.0002 16.6665V43.3332"
          stroke={color}
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M66.6669 69.9999L73.3335 63.3332L66.6669 56.6666" stroke={color} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M56.6669 56.6666L50.0002 63.3332L56.6669 69.9999" stroke={color} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36.6669 13.3332H43.3335" stroke={color} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40.0002 56.6666V56.6999" stroke={color} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_378_1144">
          <rect width="80" height="80" fill="white" transform="translate(0.000244141 -0.00012207)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PhoneCode;
