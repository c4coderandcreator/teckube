import React from "react";
import FooterTop from "../../FooterTop/FooterTop";
import Dot from "../../Dot/Dot";

const Careers = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-5 ml-4 md:ml-14 lg:ml-40">
        <div className="sm:mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[2.8rem] lg:text-[3.8rem] leading-[2.7rem] md:leading-[3.1rem] lg:leading-[4.7rem] gradient-text">
            Let’s get you doing work that matters
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:ml-14 lg:ml-40 text-black font-[Lufga-Regular-2]">
        <div className=" py-10">
          <p className="mx-4 sm:mx-1">
            We are creators of possibilities, seeing modern challenges as a
            means for the creation of innovative solutions. With a team of
            skilled engineers, finding the right solution for your organisation
            is not a problem.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-12 gap-2 place-content-center">
        <div className="row-span-2 col-span-3 col-start-2 justify-self-end hidden sm:block">
          <img
            className="min-h-[50]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Careers/Image%201.svg"
            alt="img"
          />
        </div>
        <div className="col-span-6 place-items-stretch">
          <img
            className="min-h-[50]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Careers/Image%202.svg"
            alt="img"
          />
        </div>
        <div className="col-span-6 place-items-center hidden sm:block  ">
          <div className="flex gap-2">
            <div className="">
              <img
                className="min-h-[50]"
                src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Careers/Image%203.svg"
                alt="img"
              />
            </div>
            <div>
              <img
                className="min-h-[50]"
                src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Careers/Image%204.svg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* home part */}
      <div className="mt-20">
        <div className="mx-2 md:mx-7 lg:mx-24 mt-4">
          <div className="flex items-center border-b border-[#595959] mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              When you work with us
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-1 lg:px-20">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              Good <span className="text-[#001eee]">people</span>, great
              <span className="text-[#001eee]"> culture</span>, and{" "}
              <span className="text-[#001eee]">you</span> are at the{" "}
              <span className="text-[#001eee]">center</span> of it all
            </p>
            <p className="font-[Lufga-Light-2] text-[1rem] py-6">
              At TecKube we will equip you with the tools and resources to get
              answers to challenges.
            </p>
          </div>
        </div>
      </div>
      {/* Next Part */}
      <div className="grid grid-cols-2 md:grid-cols-5 mr-2 sm:mx-10 sm:gap-4 place-items-center text-center text-black font-[Lufga-Light-2] mb-6">
        <div className=" lg:p-6">
          <img
            className="md:mx-2 lg:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Careers/Leave.png"
            alt="img-56"
          />
          <p className="font-[Lufga-Regular-2] text-black lg:text-[1.25rem]">
            Paid Leave
          </p>{" "}
        </div>
        <div className=" lg:p-6">
          <img
            className="md:mx-2 lg:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Careers/Learning.png"
            alt="img-57"
          />
          <p className="font-[Lufga-Regular-2] text-black lg:text-[1.25rem]">
            Learning & Development
          </p>{" "}
        </div>
        <div className=" lg:p-6">
          <img
            className="md:mx-2 lg:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Careers/Health.png"
            alt="img-58"
          />
          <p className="font-[Lufga-Regular-2] text-black lg:text-[1.25rem]">
            Health Insurance
          </p>{" "}
        </div>
        <div className=" lg:p-6">
          <img
            className="md:mx-2 lg:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Careers/Salary.png"
            alt="img-59-1"
          />
          <p className="font-[Lufga-Regular-2] text-black lg:text-[1.25rem]">
            Competitive Salary
          </p>{" "}
        </div>
        <div className=" lg:p-6">
          <img
            className="md:mx-2 lg:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Careers/More%20Illustration.png"
            alt="img-60"
          />
          <p className="font-[Lufga-Regular-2] text-black lg:text-[1.25rem]">
            Much more...
          </p>{" "}
        </div>
      </div>
      <FooterTop />
    </>
  );
};

export default Careers;
