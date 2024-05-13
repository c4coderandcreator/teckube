import React from "react";
import { Link } from "react-router-dom";
import Dot from "../../Dot/Dot";
import FooterTop from "../../FooterTop/FooterTop";

const WebAppDevelopment = () => {
  return (
    <>
      {/* first */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-5 ml-4 sm:ml-20">
        <div className="sm:mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
            Building intuitive web-based applications shouldn’t be a hassle
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:ml-20 text-black font-[Lufga-Regular-2]">
        <div className=" py-10">
          <p className="mx-4 sm:mx-1">
            Tailoring your application to the needs of your customers is of
            utmost priority. We at TecKube are here to help you streamline your
            web application development process, giving you and your customers
            the best of services.
          </p>
        </div>
      </div>
      {/* careers */}
      <div className="grid w-[100vw] sm:w-[90vw] sm:grid-cols-12 gap-2 place-content-center mb-4 sm:my-14">
        <div className="row-span-2 col-span-3 col-start-2 justify-self-end hidden sm:block">
          <img
            className="min-h-[50]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/Rectangle%201.png"
            alt="img"
          />
        </div>
        <div className="col-span-6 place-items-stretch">
          <img
            className="min-h-[50]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/Rectangle%202.png"
            alt="img"
          />
        </div>
        <div className="col-span-6 place-items-center hidden sm:block  ">
          <div className="flex gap-2">
            <div className="">
              <img
                className="min-h-[50]"
                src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/Rectangle%203.png"
                alt="img"
              />
            </div>
            <div>
              <img
                className="min-h-[50]"
                src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/Rectangle%204.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* second */}
      <div>
        <div className="mx-2 md:mx-24">
          <div className="flex items-center border-b border-black mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Why use our web development service?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              Helping you<span className="text-[#100EEE]"> achieve </span>your
              <br className="hidden sm:block" />
              <span className="text-[#100EEE]"> dream </span> product by
              utilizing <br className="hidden sm:block" />
              the
              <span className="text-[#100EEE]"> right </span>tools for the job
            </p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              TecKube is your choice partner for everything web development.
              With experts in every field of web development, you and your
              application are in safe hands. For small, medium, or large-scale
              businesses no worries our developers can support the web
              application dream. <br /> <br />
              Let’s get up with the right technology for your web application
              today.
              <br /> <br />
              <Link to="../contact">
                <div className="text-[#100EEE] flex flex-nowrap pb-6">
                  <div>
                    <p>Get our web development service </p>
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
      {/* Migrate */}
      <div>
        <div className="mx-2 md:mx-24">
          <div className="flex items-center  border-[#D9D9D9] mb-6 pb-4 "></div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p></p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              From HTML5, CSS3, PHP, MySQL, Python, Ruby on Rails, Java,
              JavaScript, React, AngularJS, Node.js and jQuery we are your
              partner.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 m-2 sm:mx-8 md:mx-24 sm:grid-cols-4 md:grid-cols-8 pb-10 ">
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/Group%2056.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/Group%2057.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/Group%2063.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/Group%2064.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/Group%2065.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/Group%2066.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/Group%2059.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/Group%2067.png"
            alt="img"
          />
        </div>
      </div>
      {/* third */}
      <div className="bg-[#100EEE] p-6 md:p-20 mx-2 md:mx-10 text-[#ffffff]">
        <p className="pb-8 font-[Lufga-Regular-2] ">
          Deeply rooted in a solid development process
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div>
            <p className="font-[Lufga-ExtraBold-2] text-[1.8rem] md:text-[2.3rem]">
              Our 6 step process is battle tested to give you the best in web
              technology
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-[1.9rem] py-10">
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/planning%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">Planning</p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              Let’s sit with you to determine your goals and business
              requirements for your application.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/web-layout.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Wireframing
            </p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              We design the basic structure and building blocks of how your
              website should look and function.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/design.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">Design</p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              Here we bring your ideas to life with high-fidelity mock-ups of
              your product which are near like actual code.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/code.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">Code</p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              We get into action and begin coding and developing your
              application.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/test.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Testing & Quality Assurance
            </p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              Bugs are eminent and as such, we ensure to test your application
              for them
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/WebApp/launcher.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Deployment
            </p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              Using agile methods we then deploy your application based on your
              preferred mechanism.
            </p>
          </div>
        </div>
      </div>
      <FooterTop />
    </>
  );
};

export default WebAppDevelopment;
