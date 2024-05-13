import React from "react";
import { Link } from "react-router-dom";
import Dot from "../../Dot/Dot";
import ServiceBottom from "../../ServiceBottom/ServiceBottom";
import FooterTop from "../../FooterTop/FooterTop";

const DevOps = () => {
  return (
    <>
      {/* first */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-5 ml-4 sm:ml-20">
        <div className="sm:mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
            Helping you deliver quality software to users as quickly as possible
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:ml-20 text-black font-[Lufga-Regular-2]">
        <div className=" py-10">
          <p className="mx-4 sm:mx-1">
            Let’s help you build your DevOps toolchain tailored to your
            automation and orchestration strategy. We can help you tackle key
            DevOps practices such as continuous integration, continuous
            delivery, automation, and collaboration.
          </p>
        </div>
      </div>
      <div className="grid w-[100vw] sm:w-[90vw] sm:grid-cols-7 place-items-center sm:mx-10 gap-2 rounded-lg pb-6 sm:pb-20">
        <div className="col-span-2 hidden sm:block">
          <img
            className="rounded-lg"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/Rectangle%201.png"
            alt="img"
          />
        </div>
        <div className="col-span-4 row-span-2 place-self-start">
          <img
            className="rounded-lg"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/Rectangle%201-2.png"
            alt="img"
          />
        </div>
        <div className="col-span-1 place-self-stretch hidden sm:block">
          <img
            className="rounded-lg"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/Rectangle%201-1.png"
            alt="img"
          />
        </div>
        <div className="sm:flex col-span-2 gap-2 hidden ">
          <div>
            <img
              className="rounded-lg"
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/Rectangle%201-3.png"
              alt="img"
            />
          </div>
          <div>
            <img
              className="rounded-lg"
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/Rectangle%202.png"
              alt="img"
            />
          </div>
        </div>
        <div className="col-span-1 place-self-stretch sm:-translate-x-40 hidden sm:block">
          <img
            className="rounded-lg"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/Rectangle%201-4.png"
            alt="img"
          />
        </div>
      </div>
      {/* second */}
      <div>
        <div className="mx-2 md:mx-24">
          <div className="flex items-center border-b border-black mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Why use our custom DevOps service?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              We have a track <span className="text-[#100EEE]">record</span> of{" "}
              <br className="hidden sm:block" />
              <span className="text-[#100EEE]"> strong</span> and visible
              <span className="text-[#100EEE]"> success </span>in{" "}
              <br className="hidden sm:block" /> DevOps practices
            </p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              With domain expertise and a team of diverse sets our engineers
              will help your business implement the best practices and the right
              DevOps toolchain. <br /> <br />
              Let’s help you with toolchain analysis by identifying current
              limitations and bottlenecks in your application, leading to us
              building a solid DevOps process for your business and then
              implementing the designed toolchain.
              <br /> <br />
              <Link to="../contact">
                <div className="text-[#100EEE] flex flex-nowrap pb-6">
                  <div>
                    <p>Get our DevOps Service Today</p>
                  </div>
                  <div>
                    <svg
                      className="ml-4"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 12H19.5"
                        stroke="#100EEE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.5 5L19.5 12L12.5 19"
                        stroke="#100EEE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* third */}
      <div className="bg-[#100EEE] p-6 md:p-20 mx-2 md:mx-10 text-[#ffffff]">
        <p className="pb-8 font-[Lufga-Regular-2] ">
          Harness the power of DevOps
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div>
            <p className="font-[Lufga-ExtraBold-2] text-[1.8rem] md:text-[2.3rem]">
              We are ready to help you put valuable software in the hands of
              users quickly
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-[3rem] py-10">
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/engineer%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Domain expertise in the best DevOps practices.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/certificate%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              CNCF Certified Developers and Engineers.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/processing%20(1)%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Tailor-made toolchain for your specific cloud-based workloads.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/Frame%208.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              CI/CD integration to help speed up time to market.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/support-team%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Access to domain experts in DevOps.
            </p>
          </div>
        </div>
      </div>
      {/* forth */}
      <div className="mt-6 sm:mt-20">
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-20">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p className="font-[Lufga-Light-2] text-[1rem] py-6">
              Strong partnerships lead to strong cloud collaborations
            </p>
            <p>Technologies & Specializations</p>
          </div>
        </div>
      </div>
      {/* Next Part */}
      <div className="grid grid-cols-2 md:grid-cols-6 mr-2 sm:mx-10 sm:gap-4 place-items-center text-center text-black font-[Lufga-Light-2] mb-6">
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/Group%2075.png"
            alt="img-56"
          />
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/Group%2087.png"
            alt="img-57"
          />
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/Group%2079.png"
            alt="img-58"
          />
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/Group%2089.png"
            alt="img-59-1"
          />
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/Group%2091.png"
            alt="img-60"
          />
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/DevOps/Group%2077.png"
            alt="img-60"
          />
        </div>
      </div>
      <ServiceBottom />
      <FooterTop />
    </>
  );
};

export default DevOps;
