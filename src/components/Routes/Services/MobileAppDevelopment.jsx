import React from "react";
import Tick from "../../Tick/Tick";
import Dot from "../../Dot/Dot";
import { Link } from "react-router-dom";
import LearnMore from "../../LearnMore/LearnMore";
import FooterTop from "../../FooterTop/FooterTop";
import GetStarted from "../../GetStarted/GetStarted";

const MobileAppDevelopment = () => {
  return (
    <>
      {/* first */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-5 ml-4 sm:ml-20">
        <div className="sm::mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
            Mobile is the new normal, get closer to the customers that matter
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:ml-20 text-black font-[Lufga-Regular-2]">
        <div className=" py-10">
          <p className="mx-4 sm:mx-1">
            The world market is getting dominated by mobile and tablet devices,
            with billions of devices already in the hands of users. Let’s help
            bring you closer to the people that matter, let’s make your product
            more intimate.
          </p>
        </div>
      </div>
      {/* About */}
      <div className="grid grid-cols-7 gap-1 pb-14 sm:pb-52">
        <div className="col-span-2 ">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MobileApp/Rectangle%201-3.png"
            alt="img"
          />
        </div>
        <div className="col-span-2 translate-y-10 sm:translate-y-40 ">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MobileApp/Rectangle%201-1.png"
            alt="img"
          />
        </div>
        <div className="col-span-2 translate-y-6 sm:translate-y-24">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MobileApp/Rectangle%201-2.png"
            alt="img"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MobileApp/Rectangle%201.png"
            alt="img"
          />
        </div>
      </div>
      {/* RedHat */}
      {/* second */}
      <div>
        <div className="mx-2 md:mx-24">
          <div className="flex items-center border-b border-black mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Why use our mobile app development service?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              Helping you <span className="text-[#100EEE]"> achieve </span>
              your <br className="hidden sm:block" />
              <span className="text-[#100EEE]"> dream</span> product by
              utilizing <br className="hidden sm:block" />
              the <span className="text-[#100EEE]"> right </span>tools for the
              job
            </p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              Building a native app? A hybrid app? Regardless of the
              architecture, TecKube has you covered on the mobile app
              development front. We are customer-centric and take pride is
              understanding your business goals as well as the audience you wish
              to deliver your products to. <br /> <br />
              Let’s help you take advantage of the capabilities inherent in
              mobile technology today, don’t wait, build that mobile app today!
              <br /> <br />
              <Link to="../contact">
                <div className="text-[#100EEE] flex flex-nowrap pb-6">
                  <div>
                    <p>Get our mobile app development service </p>
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
      <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
        <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
          <img
            className="hidden md:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MobileApp/Group%2015.png"
            alt="img"
          />
        </div>
        <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
          <p>Android Mobile Application Development</p>
          <p className="font-[Lufga-Light-2] text-[1rem]">
            We create exceptional Android mobile applications that satisfy your
            specific business and customer requirements.
            <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2">
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Safe and highly performant applications
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Industry-standard and Android platform-compliant design
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">Publish to the Google Play store</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">Routine maintenance and updates</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Bug fixes and more</p>
                </div>
              </div>
            </div>
          </p>

          <Link to="../contact">
            <GetStarted />
          </Link>
        </div>
      </div>
      {/* 3rd */}
      <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
        <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
          <p>iOS Mobile Application Development</p>
          <p className="font-[Lufga-Light-2] text-[1rem]">
            With the iPhone still toping the chats as the most popular
            smartphone, it is a no-brainer that we are here to help you also
            capture those customers as well.
            <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2">
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Safe and highly performant applications
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Industry-standard and iOS platform-compliant design
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">Publish to the Apple App store</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">Routine maintenance and updates</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Bug fixes and more</p>
                </div>
              </div>
            </div>
          </p>

          <div className="md:pr-12">
            <Link to="../contact">
              <GetStarted />
            </Link>
          </div>
        </div>

        <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
          <img
            className="hidden md:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MobileApp/iOS%20Dev.png"
            alt="img"
          />
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
              Buidling a native app? A hybrid app? Regardless of the <br />
              architecture TecKube has you covered
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 m-2 sm:mx-8 md:mx-24 sm:grid-cols-4 md:grid-cols-5 ">
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MobileApp/Group%2022.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MobileApp/Group%2020.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MobileApp/Group%2021.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MobileApp/Group%2023.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MobileApp/Group%2024.png"
            alt="img"
          />
        </div>
      </div>
      {/* third */}
      <div className="bg-[#100EEE] p-6 md:p-20 mx-2 md:mx-10 text-[#ffffff]">
        <p className="pb-8 font-[Lufga-Regular-2] ">
          Let’s make your mobile app a reality
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div>
            <p className="font-[Lufga-ExtraBold-2] text-[1.8rem] md:text-[2.3rem]">
              Get closer to the people that matter, get an app today
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

export default MobileAppDevelopment;
