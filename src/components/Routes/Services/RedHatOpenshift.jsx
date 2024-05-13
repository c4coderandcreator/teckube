import React from "react";
import Dot from "../../Dot/Dot";
import { Link } from "react-router-dom";
import Tick from "../../Tick/Tick";
import FooterTop from "../../FooterTop/FooterTop";

const RedHatOpenshift = () => {
  return (
    <>
      {/* first */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-5 ml-4 sm:ml-20">
        <div className="sm:mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
            Build, develop and <br />
            deploy on nearly any infrastructure
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:ml-20 text-black font-[Lufga-Regular-2]">
        <div className=" py-10">
          <p className="mx-4 sm:mx-1">
            Run a virtual cloud or a private cloud? Regardless of your
            infrastructure needs, OpenShift is the platform for you to bring
            your containerized workflows to the enterprise level. Build it once,
            and run it anywhere on any cloud infrastructure.
          </p>
        </div>
      </div>
      {/* second */}
      <div>
        <div className="mx-2 md:mx-24">
          <div className="flex items-center border-b border-black mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Why use our Redhat Openshift Service?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              On-premises? Public cloud ? <br className="hidden sm:block" />
              or hosted,<span className="text-[#100EEE]"> we</span> have you{" "}
              <br className="hidden sm:block" />
              <span className="text-[#100EEE]"> covered </span>on all fronts
            </p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              TecKube offers you a managed cloud and OpenShift service, giving
              your business the capacity to scale. Run your OpenShift container
              platforms deployed on AWS, Azure or GCP with ease. <br /> <br />
              Our team of OpenShift experts are ready and on standby to help
              your enterprise-level applications function like they were
              designed to. <br /> <br />
              <Link to="../contact">
                <div className="text-[#100EEE] flex flex-nowrap pb-6">
                  <div>
                    <p>Get our Redhat Openshift Service </p>
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
      {/* second */}
      <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
        <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
          <img
            className="hidden md:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Redhat/Server.png"
            alt="img"
          />
        </div>
        <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
          <p>
            Why
            <span className="text-[#100EEE]"> OpenShift</span>
          </p>
          <p className="font-[Lufga-Light-2] text-[1rem]">
            <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2">
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Rapidly deploy applications consistently and at scale across
                    all public and private clouds
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    You get support for your applications across multi-cloud
                    environments from leading public cloud providers
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    OpenShift makes it easy to scale based on demands and you
                    guessed it is cross-cloud as well
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Cost savings are also a benefit as developing on OpenShift
                    makes it easy to utilize underlying infrastructure
                    efficiently
                  </p>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
      {/* third */}
      <div className="bg-[#100EEE] p-6 md:p-20 mx-2 md:mx-10 text-[#ffffff]">
        <p className="pb-8 font-[Lufga-Regular-2] ">
          Endless possibilities with Openshift
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div>
            <p className="font-[Lufga-ExtraBold-2] text-[1.8rem] md:text-[2.3rem]">
              A centralized location for running your application across many
              infrastructure
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-[1.9rem] py-10">
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Redhat/development%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Build your application once run it anywhere across any
              infrastructure.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Redhat/icons8-kubernetes%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Built on Kubernetes making it <br /> highly scalable.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Redhat/development%20(1)%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Uniform way for your developers <br /> to create your application.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Redhat/cloud%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Deploy across all public clouds <br /> AWS, Azure or GCP.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Redhat/support-team%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Access to experts for adoption,
              <br /> migration, and training.
            </p>
          </div>
        </div>
      </div>
      <FooterTop />
    </>
  );
};

export default RedHatOpenshift;
