import React from "react";
import FooterTop from "../../FooterTop/FooterTop";
import ServiceBottom from "../../ServiceBottom/ServiceBottom";
import { Link } from "react-router-dom";

const MultiCloud = () => {
  return (
    <>
      {/* first */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-5 ml-4 sm:ml-20">
        <div className=" sm:mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
            Accelerate the next phase of your digital products
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:ml-20 text-black font-[Lufga-Regular-2]">
        <div className=" py-10">
          <p className="mx-4 sm:mx-1">
            Scaling efficiently and rapidly is at the heart of every business's
            proposition to its customers. With the aid of multi-cloud, your
            business gets the benefit of reliability and redundancy, cost
            savings and so much more.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center sm:mx-10 rounded-2xl">
        <img
          className="w-[100vw] sm:w-[90vw] sm:pb-4"
          src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Multi-Cloud/Rectangle%203.png"
          alt="img"
        />
      </div>
      {/* third */}
      <div className="mt-6 sm:mt-20">
        <div className="flex flex-wrap justify-between py-2 md:py-8 px-4 md:px-24">
          <div className="hidden sm:block"></div>
          <div className="font-[Lufga-ExtraBold-2] text-[1.8rem] sm:text-[2.3rem] text-black w-full flex flex-wrap">
            <p>
              Benefits of<span className="text-[#001eee]"> using </span>
              <br />
              multi-cloud
            </p>
          </div>
        </div>
        <div className="pb-14 grid grid-cols-1 sm:grid-cols-3 place-items-center gap-2 text-black">
          <div className="w-96 h-[30.75rem] shadow-md m-4 p-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Multi-Cloud/Group%2066-0.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Flexibility
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              Multi-Cloud helps you be flexible giving you the ability to mix
              and match cloud solutions that favor various aspects of your
              business without compromising and sticking to one cloud solution.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 p-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Multi-Cloud/Group%2066-1.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Choice of best-breed service
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              Certain services work best on certain cloud providers or just
              plain work on your on-prem infrastructure. With the power of
              multi-cloud, you get to have the best of all worlds, never locked
              into one provider thus ensuring you and your customers get the
              best services.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 p-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Multi-Cloud/Group%2066-3.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Reliability and Redundancy
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              By utilizing multi-cloud deployment, your business avoids the
              danger of putting your eggs into one basket. Consolidating your
              resources in one cloud can be very dangerous in the event of an
              outage. Multi-cloud fixes this.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 p-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Multi-Cloud/Group%2066.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Reduced vendor lock-in
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              Multi-cloud ensures you do not get tied down to one cloud
              provider, as it becomes difficult to spread out resources when you
              and your business become invested in a single provider. Thus,
              multi-cloud makes it possible to spread out infrastructure across
              clouds.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 p-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Multi-Cloud/Group%2066-2.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Potential cost savings
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              Aided by reduced vendor lock-in, when your business gets to choose
              between cloud providers, you also get to pick the most affordable
              services offered by the different vendors thus saving costs.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 p-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Multi-Cloud/Group%2066-4.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Proximity{" "}
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              Certain workloads are response time sensitive and heavily
              dependent on distance. With aid of multi-cloud and edge locations,
              you can decrease response time and lower latency thus ensuring the
              best experience for customers.
            </p>
          </div>
        </div>
      </div>
      {/* part-2 kuber */}
      <div className="flex flex-wrap items-center sm:border-t-2 border-[##595959] mx-10 justify-between py-2 sm:py-20 md:px-20">
        <div className="font-[Lufga-ExtraBold-2] text-[1.5rem] sm:text-[2.3rem] text-black sm:px-6 w-full md:w-1/2 flex flex-wrap">
          <p className="pb-4">
            Worried about multi-cloud{" "}
            <span className="text-[#100EEE]">complexities</span> ? Our
            <span className="text-[#100EEE]">
              {" "}
              experts <br className="hidden sm:block" />
            </span>{" "}
            have you covered
          </p>
        </div>
        <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] sm:px-6 md:w-1/2 flex flex-wrap items-center">
          <p>
            While the multi-cloud experience possesses great benefits it is
            quite daunting and tricky to navigate. We at TecKube have done the
            heavy lifting so you don’t have to do this anymore. Our experts have
            got you covered from mapping out a multi-cloud strategy to
            implementation all is taken care of. <br /> <br />
            Let’s help you reduce complexities and have you working on what
            matters today.
            <br /> <br />
            <Link to="../contact">
              <div className="text-[#100EEE] flex flex-nowrap pb-6">
                <div>
                  <p>Start using multi-cloud</p>
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
      {/* Kuber */}
      <div className="bg-[#100EEE] p-6 md:p-20 mx-2 md:mx-10 text-[#ffffff]">
        <p className="pb-8 font-[Lufga-Regular-2] ">
          Forget about the complexities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div>
            <p className="font-[Lufga-ExtraBold-2] text-[1.5rem] md:text-[2.3rem]">
              Short-comings you say? We see better service delivery for
              customers across clouds
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-[3rem] py-10">
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Multi-Cloud/management%201.png"
              alt="img"
            />
            <p className="text-[1rem] sm:text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              We will have you manage infrastructure across cloud providers thus
              reducing complexity.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Multi-Cloud/secure%201.png"
              alt="img"
            />
            <p className="text-[1rem] sm:text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Implementation cross-cloud best security practices to ensure
              secure communication with multi-cloud infrastructure.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Multi-Cloud/adapt%201.png"
              alt="img"
            />
            <p className="text-[1rem] sm:text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Helping you ensure consistency across your multi-cloud
              infrastructure.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Multi-Cloud/database%201.png"
              alt="img"
            />
            <p className="text-[1rem] sm:text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Mitigation of failover and data loss across clouds.
            </p>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Multi-Cloud/support-team%201.png"
              alt="img"
            />
            <p className="text-[1rem] sm:text-[1.25rem] py-4 font-[Lufga-Bold-2]">
              Access to experts in multi-cloud technology.
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
              Your choice cloud provider our expertise
              <div className="flex flex-nowrap">
                <div className="font-[Lufga-ExtraBold-2] text-[1.5rem] sm:text-[2.3rem] text-black pt-2">
                  <p>
                    <span className="text-[#100EEE]">Regardless </span>of your{" "}
                    <span className="text-[#100EEE]">
                      cloud <br className="hidden sm:block" />
                    </span>{" "}
                    provider we’ve got it
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
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MigrateToCloud/Group%2069.png"
            alt="img"
          />
          <img
            className="h-20 w-20 md:h-40 md:w-40"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MigrateToCloud/Group%2067.png"
            alt="img"
          />
        </div>
      </div>
      <ServiceBottom />
      <FooterTop />
    </>
  );
};

export default MultiCloud;
