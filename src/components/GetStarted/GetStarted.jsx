import React from "react";

const GetStarted = () => {
  return (
    <div className="items-center text-center flex flex-row justify-center pb-8">
      <button className="btn border-[#001eee] text-[#001eee] bg-white mx-2 font-[Lufga-Regular-2] font-extrabold hover:text-white">
        Get Started Today{" "}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17L17 7"
            stroke="#100EEE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 7H17V17"
            stroke="#100EEE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default GetStarted;
