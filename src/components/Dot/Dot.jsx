import React from "react";

const Dot = () => {
  return (
    <div>
      <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_428_37209)">
          <path
            d="M6.5 11C9.26142 11 11.5 8.76142 11.5 6C11.5 3.23858 9.26142 1 6.5 1C3.73858 1 1.5 3.23858 1.5 6C1.5 8.76142 3.73858 11 6.5 11Z"
            fill="url(#paint0_linear_428_37209)"
            stroke="url(#paint1_linear_428_37209)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_428_37209"
            x1="1.5"
            y1="6"
            x2="11.5"
            y2="6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#08E6FD" />
            <stop offset="0.5" stopColor="#00A5FD" />
            <stop offset="1" stopColor="#001EEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_428_37209"
            x1="1.5"
            y1="6"
            x2="11.5"
            y2="6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#08E6FD" />
            <stop offset="0.5" stopColor="#00A5FD" />
            <stop offset="1" stopColor="#001EEE" />
          </linearGradient>
          <clipPath id="clip0_428_37209">
            <rect
              width="12"
              height="12"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Dot;
