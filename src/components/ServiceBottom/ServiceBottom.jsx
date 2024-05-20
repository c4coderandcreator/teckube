import React from "react";
import { Link } from "react-router-dom";

const ServiceBottom = () => {
  return (
    <div className="my-4 sm:my-20">
      <div className=" font-[Lufga-Regular-2] flex flex-col items-center text-center bg-cover rounded-3xl bg-[url('https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/ManagedKubernetes/CTA%20Section%20-%20V2-back.png')] mx-1 md:mx-4 lg:mx-[15rem] py-10">
        <div>
          <p className="font-[Lufga-ExtraBold-2] text-[1.5rem] sm:text-[2.3rem] text-white py-4">
            Improve Efficiency, Boost <br />
            Innovation, Increase Profits
          </p>
          <p className="text-white pb-4">
            Let’s help you achieve your business goals <br />{" "}
          </p>
        </div>
        <div className="pb-4 pt-2">
          <Link to="../contact">
            <button className="btn border-[#001eee] text-[#001eee] bg-white mx-2 font-[Lufga-Regular-2] font-extrabold hover:text-white">
              Get in Touch{" "}
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceBottom;
