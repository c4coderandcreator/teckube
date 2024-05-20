import React from "react";
import { Link } from "react-router-dom";
import Dot from "../../Dot/Dot";
import Tick from "../../Tick/Tick";
import FooterTop from "../../FooterTop/FooterTop";

const UiUx = () => {
  return (
    <>
      {/* first */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-5 ml-4 md:ml-10 lg:ml-20">
        <div className="sm:mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
            Giving you longer user retention rates with delightful interfaces
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:ml-10 lg:ml-20 text-black font-[Lufga-Regular-2]">
        <div className=" py-10">
          <p className="mx-4 sm:mx-1">
            Every design has an effect. Every individual combination of colour,
            font, illustration, and image, gives you a different reaction. Let’s
            help you craft the right product that invokes emotions and actions
            from your users.
          </p>
        </div>
      </div>
      {/* careers */}
      <div className="grid w-[100vw] sm:w-[90vw] sm:grid-cols-12 gap-2 place-content-center pb-10">
        <div className="row-span-2 col-span-3 col-start-2 justify-self-end hidden sm:block">
          <img
            className="min-h-[50]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/Rectangle%201.png"
            alt="img"
          />
        </div>
        <div className="col-span-6 place-items-stretch">
          <img
            className="min-h-[50]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/Rectangle%202.png"
            alt="img"
          />
        </div>
        <div className="col-span-6 place-items-center hidden sm:block  ">
          <div className="flex gap-2">
            <div className="">
              <img
                className="min-h-[50]"
                src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/Rectangle%203.png"
                alt="img"
              />
            </div>
            <div>
              <img
                className="min-h-[50]"
                src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/Rectangle%204.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* second */}
      <div>
        <div className="mx-2 md:mx-7 lg:mx-24">
          <div className="flex items-center border-b border-black mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Why use our UI/UX service?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:mx-7 lg:mx-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              Quit the <span className="text-[#100EEE]">guessing</span>, game on{" "}
              <br className="hidden sm:block" />
              how a<span className="text-[#100EEE]"> digital </span> product
              <br className="hidden sm:block" /> should
              <span className="text-[#100EEE]"> work</span>
            </p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              Customer satisfaction makes or breaks your brand. In the digital
              age, the customer holds all the cards and UI/UX design is the key
              to unlocking users' perceptions about your products and services.{" "}
              <br /> <br />
              A buggy and unintuitive application are off-putting, similarly, a
              poorly designed feature can make or break your business. Let’s
              help you make the right decisions on how to delight your users and
              keep them coming back for more. <br /> <br />
              <Link to="../contact">
                <div className="text-[#100EEE] flex flex-nowrap pb-6">
                  <div>
                    <p>Get our UI/UX service </p>
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
        <div className="mx-2 md:mx-7 lg:mx-24">
          <div className="flex items-center  border-[#D9D9D9] mb-6 pb-4 "></div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md;px-7 lg:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p></p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              Our UI/UX team has a vast suite of industry-standard design tools
              for delighting and evoking connection with your customers.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 m-2 lg:mx-8 md:mx-24 md:grid-cols-4 lg:grid-cols-8 ">
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/Group%2020.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/Group%2021.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/Group%2022.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/Group%2023.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/Group%2024.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/Group%2025.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/Group%2026.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/Group%2028.png"
            alt="img"
          />
        </div>
      </div>
      {/* second */}
      <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:mx-7 lg:mx-24">
        <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
          <img
            className="hidden md:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/Group%2015.png"
            alt="img"
          />
        </div>
        <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
          <p>Everything and even more</p>
          <p className="font-[Lufga-Light-2] text-[1rem]">
            <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2">
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Understanding business goals and technical specifications
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Competitive analysis</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">Personas and UX research reports</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Sitemaps and Information Architecture creation
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">User Flows and User Journey Maps</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Wireframing and Interactive Prototyping
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Usability Testing</p>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
      {/* third */}
      <div className="bg-[#100EEE] p-6 md:p-20 mx-2 lg:mx-10 text-[#ffffff]">
        <p className="pb-8 font-[Lufga-Regular-2] ">Our process</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
          <div>
            <p className="font-[Lufga-ExtraBold-2] text-[1.8rem] md:text-[2.3rem]">
              Our UI/UX design process helps get you from start to finish on
              your product ideas
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-[1.9rem] py-10">
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/empathise.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">Empathize</p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              We research the needs of your users in-depth to ensure we set
              aside assumptions and truly design for the user
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/target.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">Define</p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              We move on to state the users’ needs and problems gotten from our
              analysis of the user problems
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/ideas.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">Ideate</p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              Here comes the fun part, we get to come up with possible solutions
              to our problems.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/graphic-designing.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">Prototype</p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              We start to create the solution after selections have been made.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/ab-testing-app.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">Testing</p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              We finally get to try out the solutions we made, and adjustments
              are made as needed
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/UiUX/send.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Developer Handoff
            </p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              After tests, we get to ship off assets in a developer-friendly way
              to begin building
            </p>
          </div>
        </div>
      </div>
      <FooterTop />
    </>
  );
};

export default UiUx;
