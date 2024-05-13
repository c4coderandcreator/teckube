import React, { useRef, useEffect, useState } from "react";
import Arrow from "../Arrow/Arrow";
import Dot from "../Dot/Dot";
import LearnMore from "../LearnMore/LearnMore";
import Tick from "../Tick/Tick";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();
  const countUpRefs = useRef([]);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false); // Reset visibility when section goes out of view
    }
  }, [inView]);
  return (
    <>
      <div className="mt-[2rem] md:mt-[1.5rem]">
        <p className="font-extrabold text-center text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text pb-[0.6rem]">
          Ideate. Code. Build.
          <br /> Deploy. Release.
        </p>
        <p className="text-center text-black my-6 font-[Lufga-Regular-2] tracking-wide py-4">
          Let's help you streamline your workplace, reduce costs and securely
          deliver <br className="hidden md:block" /> your cloud native
          applications.
        </p>
        <div className="items-center text-center flex flex-row justify-center pb-8">
          <Link to="about">
            <button className="btn border-[#001eee] text-[#001eee] bg-white mx-2 font-[Lufga-Regular-2] font-extrabold hover:text-white">
              Know More{" "}
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
          <div className="">
            <Link
              to="https://wa.me/16466735982"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn text-white border-[#001eee] bg-[#001eee] mx-2 font-[Lufga-Regular-2] font-extrabold ">
                Chat with Us {<Arrow />}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Hero%20Image.svg"
          alt="home-img"
        />
      </div>
      <div>
        <div className="mx-2 md:mx-24">
          <div className="flex items-center border-b border-black mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">Who we are ?</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              We’re a <span className="text-[#100EEE]">strategic</span> team of
              <span className="text-[#100EEE]"> experts</span> focused on your
              goals
            </p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              We focus on creating cloud-native products that better businesses
              and strengthen brand experience and user adoption. <br /> <br />
              We pride ourselves on how innovative and radical we are, whilst
              being grounded by the emphasis on core business goals and
              expectations. We are redefining what is possible for building and
              running a business in the cloud. <br /> <br />
              <Link to="about">
                <div className="text-[#100EEE] flex flex-nowrap">
                  <div>
                    <p>Find out more</p>
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
          <div className="flex items-center border-b border-[#D9D9D9] mb-6 pb-4 "></div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p></p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              We are trusted by leading companies
              <div className="flex flex-nowrap">
                <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black pt-2">
                  <p>
                    Known by the <span className="text-[#100EEE]">company</span>{" "}
                    we keep
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 m-2 sm:mx-8 md:mx-24 sm:grid-cols-4 md:grid-cols-5 ">
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Group%2020.svg"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Group%2021.svg"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Group%2022.svg"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Group%2053.svg"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/image%207.svg"
            alt="img"
          />
        </div>
      </div>
      {/* 3rd */}
      <div>
        <div className="mx-2 md:mx-24 mt-4">
          <div className="flex items-center border-b border-[#595959] mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Our products and solutions
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              Managed Services for
              <span className="text-[#100EEE]"> Kubernetes</span>
            </p>
            <p className="font-[Lufga-Light-2] text-[1rem]">
              Focus on your business priorities and let our team of engineers
              handle the heavy lifting.
              <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2">
                <div>
                  <div className="flex">
                    <Tick />{" "}
                    <p className="pl-2">
                      Access to Certified Kubernetes experts
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <Tick />{" "}
                    <p className="pl-2">Support for any K8s distribution</p>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <Tick />{" "}
                    <p className="pl-2">
                      Proactive management, monitoring, and updating
                    </p>
                  </div>
                </div>
              </div>
            </p>
            <div className="md:pr-8">
              <Link to="managedKubernetes">
                <LearnMore />
              </Link>
            </div>
          </div>

          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <img
              className="hidden md:block"
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Group%2015.svg"
              alt="img"
            />
          </div>
        </div>

        {/* 2nd */}
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <img
              className="hidden md:block"
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Migrate%20to%20Cloud%20Illustration.svg"
              alt="img"
            />
          </div>
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              Migrate to the
              <span className="text-[#100EEE]"> Cloud</span>
            </p>
            <p className="font-[Lufga-Light-2] text-[1rem]">
              Let’s transform your business operations for the better. Migrate
              to the Cloud and experience the magic.
              <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2">
                <div>
                  <div className="flex">
                    <Tick />{" "}
                    <p className="pl-2">
                      Assessment and modification of your existing monolithic
                      application
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <Tick />{" "}
                    <p className="pl-2">
                      Tailor-made adoption plans for cloud migration
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <Tick />{" "}
                    <p className="pl-2">
                      Access to CNCF Certified experts in cloud migration
                    </p>
                  </div>
                </div>
              </div>
            </p>

            <Link to="migrateToCloud">
              <LearnMore />
            </Link>
          </div>
        </div>
        {/* 3rd */}
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              <span className="text-[#100EEE]"> Custom </span>
              API development services
            </p>
            <p className="font-[Lufga-Light-2] text-[1rem]">
              Open, Partner, Internal or Composite API? We have you covered. Our
              team of experts have you well on the way to creating magic.
              <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2">
                <div>
                  <div className="flex">
                    <Tick />{" "}
                    <p className="pl-2">
                      Support for multiple API architectures
                    </p>
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
              </div>
            </p>

            <div className="md:pr-12">
              <Link to="customApi">
                <LearnMore />
              </Link>
            </div>
          </div>

          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <img
              className="hidden md:block"
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/API%20Illustration.svg"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#100EEE] p-6 md:p-20 mx-2 md:mx-10 text-[#ffffff]">
        <p className="pb-8 font-[Lufga-Regular-2] ">
          From ideation to release we are your trusted partner
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div>
            <p className="font-[Lufga-ExtraBold-2] text-[1.8rem] md:text-[2.3rem]">
              We’ve got the entire digital product pipeline covered
            </p>
          </div>
          <div>
            <p className="pt-10 md:px-12 md:ml-8 font-[Lufga-Regular-2]">
              Your customers are at the centre of attention. Let’s create that
              exciting and great product together.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-[1.9rem] py-10">
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Home%20Resources/cloud-computing%20Icon.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Multi-Cloud
            </p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              Accelerate the next phase of your digital products
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Home%20Resources/DevOps%20Icon.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">DevOps</p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              Helping you deliver quality software to users as quickly as
              possible
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Home%20Resources/Vector.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Kubernetes
            </p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              Delivering high availability for your containerized workloads
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Home%20Resources/openshift%20Icon.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Red hat Openshift
            </p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              Build, develop and deploy on nearly any infrastructure
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Home%20Resources/web-development%20Icon.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Web App Development
            </p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              Building intuitive web based applications shouldn’t be a hassel
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Home%20Resources/Mobile%20Icon.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Mobile App Development
            </p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              Mobile is the new normal, get closer to the customers that matter
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Home%20Resources/UI%20Icon.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              UX/UI Design
            </p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              Giving you longer user retention rates with delightful interfaces
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Home%20Resources/cyber.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Cyber Security
            </p>
            <p className="font-[Lufga-Light-2] text-[0.8rem]">
              Protecting organizations, their people, and their assets from
              cyber threats
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="py-4 px-8 flex flex-col items-center justify-center pt-10 sm:pt-20">
          <svg
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.333008"
              width="56"
              height="56"
              rx="28"
              fill="#FAFAFA"
            />
            <path
              d="M29.6667 16.6665L18 30.6665H28.5L27.3333 39.9998L39 25.9998H28.5L29.6667 16.6665Z"
              stroke="#100EEE"
              strokeWidth="2.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-black text-[2.25rem] font-[Lufga-Bold-2] text-center">
            Our <span className="text-[#100EEE]">numbers</span> speak for
            themselves
          </p>
          <p className="text-black font-[Lufga-Light-2] text-[0.8rem]">
            Let us help you with what we do best
          </p>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-center mx-4 md:mx-64 pb-4 sm:pb-20 py-6"
        >
          <div className="flex flex-col items-center justify-center sm:border-r-[1px] border-gray-300">
            <p className="text-[2.1rem] md:text-[3.75rem] text-[#100EEE] font-[Lufga-Bold-2]">
              {isVisible && <CountUp end={17} />}
            </p>
            <p className="text-black font-[Lufga-Light-2] text-[0.8rem] text-center">
              Staff across multiple regions
            </p>
          </div>
          <div className="mx-2 flex flex-col items-center justify-center sm:border-r-[1px] border-gray-300">
            <p className="text-[2.1rem] md:text-[3.75rem] text-[#100EEE] font-[Lufga-Bold-2]">
              {isVisible && <CountUp end={600} />}%
            </p>
            <p className="text-black font-[Lufga-Light-2] text-[0.8rem] text-center">
              Return on investment
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[2.1rem] md:text-[3.75rem] text-[#100EEE] font-[Lufga-Bold-2]">
              {isVisible && <CountUp end={85} />}+
            </p>
            <p className="text-black font-[Lufga-Light-2] text-[0.8rem] text-center pb-4 sm:pb-0">
              Global customers
            </p>
          </div>
        </div>
      </div>
      <div className="m-4 py-2 md:py-8">
        <p className="text-black font-[Lufga-Light-2] text-[0.8rem] text-left pb-4 sm:pb-0 md:ml-10">
          Strong partnerships lead to strong cloud collaborations
        </p>
        <p className="font-[Lufga-ExtraBold-2] text-black text-[1.8rem] md:text-[2.3rem] md:ml-10">
          Partners & Certifications
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2 items-center md:mx-4 pr-4">
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Group%2020.svg"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Group%2021.svg"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Group%2022.svg"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Group%2053.svg"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Group%2052.svg"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Group%2054.svg"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Group%2055.svg"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/image%207.svg"
              alt="img"
            />
          </div>
        </div>
      </div>
      {/* 3rd to here */}
      <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
        <div className="font-[Lufga-ExtraBold-2] text-[2.1rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
          <p>
            <span className="text-black"> Ultimately </span>
            everything begins with an idea
          </p>
          <p className="font-[Lufga-Light-2] text-[1rem]">
            Got one? Get in touch with us today.
            <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2">
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
              <Link to="about">
                <LearnMore />
              </Link>

              <div className=" navbar-end font-[Lufga-Regular-2] font-extrabold mx-4 flex">
                <a className="btn text-white bg-[#001eee] border-[#001eee]">
                  <Link to="contact">Contact Us </Link> {<Arrow />}
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

export default Home;
