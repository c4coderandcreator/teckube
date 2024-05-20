import React from "react";
import Tick from "../Tick/Tick";
import Arrow from "../Arrow/Arrow";
import { Link } from "react-router-dom";
import LearnMore from "../LearnMore/LearnMore";

const FooterTop = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:mx-7 lg:mx-24">
        <div className="font-[Lufga-ExtraBold-2] text-[2.1rem] text-black px-1 lg:px-6 w-full md:w-1/2 flex flex-wrap">
          <p>
            <span className="text-black"> Ultimately </span>
            everything begins with an idea
          </p>
          <p className="font-[Lufga-Light-2] text-[1rem]">
            Got one? Get in touch with us today.
            <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2 flex-start">
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Focus on business priorities</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Certified Professionals</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Lower operating costs</p>
                </div>
              </div>
            </div>
            <div className="md:pr-12 flex">
              <Link to="../about">
                <LearnMore />
              </Link>

              <div className=" navbar-end font-[Lufga-Regular-2] font-extrabold mx-4 flex">
                <a className="btn text-white bg-[#001eee]">
                  <Link to="../contact">Contact Us </Link> {<Arrow />}
                </a>
              </div>
            </div>
          </p>
        </div>

        <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
          <img
            className="hidden md:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Contact.svg"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default FooterTop;
