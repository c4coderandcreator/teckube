import React from "react";
import Tick from "../../Tick/Tick";
import { Link } from "react-router-dom";
import FooterTop from "../../FooterTop/FooterTop";
import ServiceBottom from "../../ServiceBottom/ServiceBottom";

const ManagedKubernetes = () => {
  return (
    <>
      {/* first */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-5 ml-4 sm:ml-40">
        <div className=" sm::mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
            Scale to meet business needs with our managed Kubernetes Service
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:ml-40 text-black font-[Lufga-Regular-2]">
        <div className=" py-10">
          <p className="mx-4 sm:mx-1">
            As a leading Kubernetes consultancy, our experts provide unique
            insight and help with every aspect of your Kubernetes deployment,
            from its installation and architecture to its configuration and
            optimization.
          </p>
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
            Our managed
            <span className="text-[#100EEE]"> K8s service</span>
          </p>
          <p className="font-[Lufga-Light-2] text-[1rem]">
            Let’s help you achieve improved infrastructure utilization, workload
            portability, scalability and more.
            <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2">
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Setup & Configuration</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">100 % CKA support team</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">24/7 coverage</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Maintenance & Patching</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Monitoring & Alarming</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Backup & recovery in case of emmergency
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick />{" "}
                  <p className="pl-2">
                    Help with your clusters, app issues, and add-ons
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
          Retain customers and focus on the business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div>
            <p className="font-[Lufga-ExtraBold-2] text-[1.8rem] md:text-[2.3rem]">
              Let’s help you keep your Kubernetes cluster in good shape
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-[1.9rem] py-10">
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/ManagedKubernetes/maintenance%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Regular maintenance of all components
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/ManagedKubernetes/system-update%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Kubernetes update and upgrades
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/ManagedKubernetes/backup%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Backup of all data revevant for the cluster configuration (no
              customer applications)
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/ManagedKubernetes/business-monitoring%201.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Monitoring of all cluster components (no customer applications)
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/ManagedKubernetes/Frame%208.png"
              alt="img"
            />
            <p className="text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Proactive alarming during office hours <br />
              (24/7 SLA as required)
            </p>
          </div>
        </div>
      </div>
      {/* fourth */}
      <div className="flex flex-wrap items-center justify-between py-2 sm:py-20 md:px-24">
        <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
          <p>
            Our <span className="text-[#100EEE]">experienced</span> &
            <span className="text-[#100EEE]">
              {" "}
              certified <br className="hidden sm:block" />
              Kubernetes
            </span>{" "}
            professionals <br className="hidden sm:block" /> are here for you
          </p>
        </div>
        <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
          <p>
            Let’s help you achieve your Kubernetes adoption plan by helping you
            on the journey. From Advisor services on creating a roadmap, audits,
            and a deployment plan to aid in achieving your business goals for
            K8s. <br /> <br />
            Our team of experts have you covered with Deployments and migration,
            Security compliance, Professional support, and Kubernetes training
            to name a few. <br /> <br />
            <Link to="../contact">
              <div className="text-[#100EEE] flex flex-nowrap">
                <div>
                  <p>Get Started Today</p>
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
              We have a team of CNCF Cloud experts
              <div className="flex flex-nowrap">
                <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black pt-2">
                  <p>
                    Our <span className="text-[#100EEE]">Kubernetes</span>{" "}
                    plaques speak for themselves
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 m-2 sm:mx-8 md:mx-20 sm:grid-cols-3 md:grid-cols-5 pb-10 ">
          <img
            className="h-20 w-20 md:h-40 md:w-40 sm:col-start-2"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Group%2053.svg"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40 "
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/65e09dd513b132cffbf4768ea90cbc3ef5f32822/Image%20Resource/ManagedKubernetes/image%209.svg"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/image%207.svg"
            alt="img"
          />
        </div>
      </div>
      <ServiceBottom />
      <FooterTop />
    </>
  );
};

export default ManagedKubernetes;
