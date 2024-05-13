import React from "react";
import { Link } from "react-router-dom";
import Dot from "../../Dot/Dot";
import ServiceBottom from "../../ServiceBottom/ServiceBottom";
import FooterTop from "../../FooterTop/FooterTop";

const MigrateToCloud = () => {
  return (
    <>
      {/* first */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-5 ml-4 sm:ml-20">
        <div className="sm:mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
            Transform your operations for the better by moving to the cloud
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:ml-20 text-black font-[Lufga-Regular-2]">
        <div className=" py-10">
          <p className="mx-4 sm:mx-1">
            Moving to the cloud can power growth and transform your operations
            for the better. It’s also a process that requires time, specialized
            skills, and a strategic approach. We have developed a process that
            will enable you to migrate your application workloads to the cloud
            safely and securely with limited cost overhead.
          </p>
        </div>
      </div>
      {/* second */}
      <div>
        <div className="mx-2 md:mx-24">
          <div className="flex items-center border-b border-black mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Why move to the cloud?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              Utilize your existing{" "}
              <span className="text-[#100EEE]">infrastructure</span> to expand
              your business
              <span className="text-[#100EEE]"> painlessly</span>
            </p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              We will work with you to assess your needs, develop a personalized
              framework, migrate your existing infrastructure and manage your
              workloads on the cloud with minimal business disruption. We have
              expertise in multi-cloud technologies and can help you with
              migrations to AWS, Azure, and GCP, to name but a few. <br />{" "}
              <br />
              From planning to Building to Running your workloads we will be
              with you all through your cloud migration journey.
              <br /> <br />
              <Link to="../contact">
                <div className="text-[#100EEE] flex flex-nowrap">
                  <div>
                    <p>Move to the cloud</p>
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
                <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black pt-2">
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
      {/* third */}
      <div className="mt-20">
        <div className="flex flex-wrap justify-between py-2 md:py-8 md:px-24">
          <div className="hidden sm:block"></div>
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black w-full flex flex-wrap">
            <p className="px-4 sm:px-0">
              Benefits of<span className="text-[#001eee]"> switching </span> to
              the <br className="hidden sm:block" />
              cloud
            </p>
          </div>
        </div>
        <div className="pb-14 grid grid-cols-1 sm:grid-cols-3 place-items-center gap-2 text-black">
          <div className="w-96 h-[30.75rem] shadow-md m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MigrateToCloud/Group%2066.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Improved Scalability
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              With the aid of virtualization technology, scaling up and down
              infrastructure has never been easier. Cloud helps you to increase
              your existing workloads hardware resources without the risk of
              failures, interruptions, and setbacks, it just works.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MigrateToCloud/Group%2066-2.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Increased agility and flexibility
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              The cloud allows you to quickly develop, test and launch
              applications in environments. This makes it possible for you to
              respond to changing environments or challenges agilely thus giving
              your business a competitive advantage.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MigrateToCloud/Group%2066-4.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Ability to innovate faster
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              With the benefit of agility which the cloud already provides, new
              resources are always a click away resulting in a reduced time
              frame to make those resources available to your teams.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MigrateToCloud/Group%2066-1.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Cost reduction
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              Cloud computing provides you with natural economies of scale,
              allowing your business to pay for only what you need. This reduces
              costs by optimizing both software licenses and hardware or storage
              purchases both on-premises or within the data center.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MigrateToCloud/Group%2066-3.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Better data security & compliance
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              Adopting the cloud ensures your workloads get a collection of
              security measures designed to protect cloud-based infrastructure,
              applications, and data. These measures ensure user and device
              authentication, data and resource access control, and data privacy
              protection.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/MigrateToCloud/Group%2066-5.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Better consumption management{" "}
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              With the pay-as-you-use model, consumption can be mitigated and
              planned out based on a proper understanding of your cloud
              workloads. Only the cloud helps you achieve this for your
              applications.
            </p>
          </div>
        </div>
      </div>
      <ServiceBottom />
      <FooterTop />
    </>
  );
};

export default MigrateToCloud;
