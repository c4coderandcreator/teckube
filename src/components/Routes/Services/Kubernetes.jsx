import React from "react";
import Dot from "../../Dot/Dot";
import { Link } from "react-router-dom";
import Tick from "../../Tick/Tick";
import FooterTop from "../../FooterTop/FooterTop";

const Kubernetes = () => {
  return (
    <>
      {/* first */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-5 ml-4 sm:ml-20">
        <div className="sm:mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
            Delivering high availability for your containerized workloads
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:ml-20 text-black font-[Lufga-Regular-2]">
        <div className=" py-10">
          <p className="mx-4 sm:mx-1">
            With the rise of containers came the need to manage, secure and
            scale effectively, Kubernetes gives you this all in a box and we are
            here to help achieve those promises without you having to lift a
            finger.
          </p>
        </div>
      </div>
      {/* second */}
      <div>
        <div className="mx-2 md:mx-24">
          <div className="flex items-center border-b border-black mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Why use our Kubernetes Service?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              <span className="text-[#100EEE]">CNCF</span> Kubernetes certified{" "}
              <br className="hidden sm:block" />
              <span className="text-[#100EEE]"> consultants </span>that have you{" "}
              <br className="hidden sm:block" />
              <span className="text-[#100EEE]"> covered</span>
            </p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              Automating application deployments, scaling and management are all
              tedious tasks with various complexities attached to them. With the
              aid of our CNCF Kubernetes-certified experts, we have you covered.{" "}
              <br /> <br />
              Let’s help you deliver your containerized workloads with high
              availability, security, and proper monitoring to see and manage
              the health of your clusters. <br /> <br />
              <Link to="../contact">
                <div className="text-[#100EEE] flex flex-nowrap pb-6">
                  <div>
                    <p>Get our Kubernetes Service </p>
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
              Diverse Kubernetes expertise
              <div className="flex flex-nowrap">
                <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black pt-2">
                  <p>
                    Our consultants are
                    <span className="text-[#100EEE]"> versed </span>in{" "}
                    <span className="text-[#100EEE]">Kubernetes</span>{" "}
                    technologies
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 m-2 sm:mx-8 md:mx-24 sm:grid-cols-4 md:grid-cols-9 py-2 sm:py-10">
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/Group%2092.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/Group%2093.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/Group%2094.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/Group%2095.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/Group%2096.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/Group%2097.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/Group%2098.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/Group%2099.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/Group%20100.png"
            alt="img"
          />
        </div>
      </div>
      {/* second */}
      <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
        <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
          <img
            className="hidden md:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/ManagedKubernetes/Server-pana%201.png"
            alt="img"
          />
        </div>
        <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
          <p>
            Highly equipped in
            <span className="text-[#100EEE]"> Kubernetes</span>
          </p>
          <p className="font-[Lufga-Light-2] text-[1rem]">
            <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2">
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Self-Healing Containers</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Cost Optimizations</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">Automated Rollouts & Rollbacks</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Blue-Green, Rolling & Canary deployments
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">High-Performance delivery</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Kubernetes advisory services</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Access to industry experts</p>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
      {/* third */}
      <div className="bg-[#100EEE] p-6 md:p-20 mx-2 md:mx-10 text-[#ffffff]">
        <p className="pb-8 font-[Lufga-Regular-2] ">
          Kubernetes is powering the most demanding workloads
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div>
            <p className="font-[Lufga-ExtraBold-2] text-[1.8rem] md:text-[2.3rem]">
              From ten containers to tens of thousands we’ve got you covered
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-[1.9rem] py-10">
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/lift-container%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Saving on container orchestration.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/clock%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Increased efficiency for your microservice architecture.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/cloud%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Ability to deploy workloads in multi-cloud environments.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/break-chain%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Limited chance of vendor-lock in.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Kubernetes/community%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Community driven.
            </p>
          </div>
        </div>
      </div>
      <FooterTop />
    </>
  );
};

export default Kubernetes;
