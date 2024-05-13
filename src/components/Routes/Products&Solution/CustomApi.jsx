import React from "react";
import FooterTop from "../../FooterTop/FooterTop";
import ServiceBottom from "../../ServiceBottom/ServiceBottom";
import { Link } from "react-router-dom";
import Dot from "../../Dot/Dot";
import Tick from "../../Tick/Tick";

const CustomApi = () => {
  return (
    <>
      {/* first */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-5 ml-4 sm:ml-20">
        <div className="sm:mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
            {"{ Leverage the power of programmatic design }"}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:ml-20 text-black font-[Lufga-Regular-2]">
        <div className=" py-10">
          <p className="mx-4 sm:mx-1">
            At TecKube, smooth integration between your new and existing
            applications is a top priority for us, as such, we take the business
            of creating reliable, robust, and secure web API services seriously.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center sm:mx-10 rounded-2xl">
        <img
          className=" w-[100vw] sm:w-[90vw] pb-20"
          src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CustomApi/Rectangle%201.png"
          alt="img"
        />
      </div>
      {/* second */}
      <div>
        <div className="mx-2 md:mx-24">
          <div className="flex items-center border-b border-black mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Why use our custom API development service?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              Leveraging <span className="text-[#100EEE]">robust</span>,
              reliable <br className="hidden sm:block" />&
              <span className="text-[#100EEE]"> secure</span> API development{" "}
              <br className="hidden sm:block" />
              <span className="text-[#100EEE]"> approaches</span>
            </p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              APIs power the integration of diverse web applications behind the
              scenes. We know that every technology is not the same as such APIs
              vary, we are here to help you through the journey of figuring out
              what works and how to fit it into your stack. <br /> <br />
              Let’s get you out of the rut and help you accomplish business
              goals without worrying about the complexities of APIs. <br />{" "}
              <br />
              <Link to="../contact">
                <div className="text-[#100EEE] flex flex-nowrap">
                  <div>
                    <p>Get a consultation Today </p>
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
      {/* 2nd */}
      <div>
        <div className="mx-2 md:mx-24">
          <div className="flex items-center  mb-6 pb-4 "></div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p></p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              Our API development expertise is limitless
              <div className="flex flex-nowrap">
                <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black pt-2">
                  <p>
                    The <span className="text-[#100EEE]">best</span> in class
                    API <br /> development
                    <span className="text-[#100EEE]"> technology</span>
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 m-2 sm:mx-8 md:mx-24 sm:grid-cols-4 md:grid-cols-5 ">
          <img
            className="h-40 w-40 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CustomApi/Group%2070.png"
            alt="img"
          />
          <img
            className="h-40 w-40 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CustomApi/Group%2071.png"
            alt="img"
          />
          <img
            className="h-40 w-40 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CustomApi/Group%2073.png"
            alt="img"
          />
          <img
            className="h-40 w-40 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CustomApi/Group%2072.png"
            alt="img"
          />
          <img
            className="h-40 w-40 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CustomApi/Group%2074.png"
            alt="img"
          />
        </div>
      </div>
      {/* third */}
      <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
        <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
          <img
            className="hidden md:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CustomApi/Group%2015.png"
            alt="img"
          />
        </div>
        <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
          <p>
            Our
            <span className="text-[#100EEE]"> API </span>Development service
          </p>
          <p className="font-[Lufga-Light-2] text-[1rem]">
            Let’s help you achieve improved infrastructure utilization, workload
            portability, scalability and more.
            <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2">
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Open, Partner, Internal or Composite API? We have you
                    covered. Our team of experts have you well on the way to
                    creating magic
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">Support for multiple API architectures</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Integration of best practices in API creation
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Industry-leading turnaround time in API creation
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">API as a service (APIaaS)</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">API Testing and Security</p>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
      <ServiceBottom />
      <FooterTop />
    </>
  );
};

export default CustomApi;
