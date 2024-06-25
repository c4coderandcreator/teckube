import React from "react";
import Tick from "../../Tick/Tick";
import { Link } from "react-router-dom";
import Dot from "../../Dot/Dot";
import FooterTop from "../../FooterTop/FooterTop";
import { Helmet } from "react-helmet-async";

const CyberSecurity = () => {
  return (
    <>
      <Helmet>
        <title>Cyber Security Services | TecKube</title>
        <meta
          name="description"
          content="Protect your business with TecKube’s comprehensive cyber security services."
        />
        <meta
          name="keywords"
          content="Cyber Security, TecKube Cyber Security, Cyber Protection"
        />
        <link rel="canonical" href="https://teckube.io/cyberSecurity" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* first */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-5 ml-4 md:ml-10 lg:ml-20">
        <div className="sm:mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
            Unmatched Information Security Solutions For All Enterprises
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:ml-10 lg:ml-20 text-black font-[Lufga-Regular-2]">
        <div className=" py-10">
          <p className="mx-4 sm:mx-1">
            We provide organizations with proven expertise, tailored solutions
            and services to help make better cybersecurity decisions that
            minimize risk.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center sm:mx-10 rounded-2xl">
        <img
          className=" w-[100vw] sm:w-[90vw] pb-10 sm:pb-20"
          src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/1.png"
          alt="img"
        />
      </div>
      {/* second */}
      <div>
        <div className="mx-2 md:mx-7 lg:mx-24">
          <div className="flex items-center border-b border-black mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Why use our Information Security / ISO Standards Consulting?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:mx-7 lg:mx-24">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 md:px-2 lg:px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              Helping organizations{" "}
              <span className="text-[#100EEE]">fight </span>daily growing
              <span className="text-[#100EEE]"> threats</span>, incidents and
              <br className="hidden lg:block" />
              actual
              <span className="text-[#100EEE]"> cybercrime</span>.
            </p>
          </div>
          <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
            <p>
              We provide an unparalleled Cyber Security Defence Ecosystem for
              organizations by delivering superior Cyber Security Services and
              expertise against any sort of Cyberattack, harm, or exploitation
              while adhering to the highest technological standards and striving
              to be the best every day. <br /> <br />
              Let's help you in fighting your threats and protecting your
              organization from cybercriminals.
              <br /> <br />
              <Link to="../contact">
                <div className="text-[#100EEE] flex flex-nowrap pb-6">
                  <div>
                    <p>Get started Today </p>
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
      <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:mx-7 lg:mx-24">
        <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
          <img
            className="hidden lg:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/2.jpeg"
            alt="img"
          />
        </div>
        <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full lg:w-1/2 flex flex-wrap">
          <p>
            Our Information Security / ISO Standards Consulting and Solutions
          </p>
          <p className="font-[Lufga-Light-2] text-[1rem]">
            Our consulting services extend to the following areas
            <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2">
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">PCI-DSS, ISO27001, ISO20000</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">ISO22301, ISO9001</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">ISO20000, COBIT</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">IT Security Assessments</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">VAPT Assessments</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2"> Application Assessments</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Remediation Support</p>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
      {/* third */}
      <div className="mt-20 md:mt-0 lg:mt-20">
        <div className="flex flex-wrap justify-between py-2 md:py-8 px-4 md:mx-7 lg:mx-24">
          <div className="hidden sm:block"></div>
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black w-full flex flex-wrap">
            <p>
              Benefits of<span className="text-[#001eee]"> using </span>
              <br />
              our cybersecurity services
            </p>
          </div>
        </div>
        <div className="pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-2 text-black">
          <div className="w-96 h-[30.75rem] shadow-md p-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/3.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              PCI-DSS
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              ISO 9001 is the international standard for a quality management
              system (“QMS”). In order to be certified to the ISO 9001 standard,
              a company must follow the requirements set forth in the ISO 9001
              Standard.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md p-4 m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/4.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              ISO27001
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              ISO/IEC 27001 is the international standard for information
              security. It sets out the specification for an effective ISMS
              (information security management system).
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md p-4 m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/5.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              VAPT ASSESSMENTS
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              Vulnerability Assessment and Penetration Testing (VAPT) are both
              security services that focus on identifying vulnerabilities in the
              network, server, and system infrastructure.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md p-4 m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/6.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              ISO9001
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              ISO 9001 is the international standard for a quality management
              system (“QMS”). In order to be certified to the ISO 9001 standard,
              a company must follow the requirements set forth in the ISO 9001
              Standard.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md p-4 m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/7.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              ISO20000
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              ISO/IEC 20000, often referred to simply as ISO 20000, is the
              international IT service management (ITSM) standard that enables
              IT organizations to ensure that their ITSM processes are aligned
              both with the needs of the business and with international best
              practice.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md p-4 m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/8.png"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              ISO 22301: Business Continuity Management Systems
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              ISO 22301 is the international standard for Business Continuity
              Management (BCM). It provides a practical framework for setting up
              and managing an effective business continuity management system.
            </p>
          </div>
        </div>
      </div>
      {/* forth */}
      <div className="sm:mt-20">
        <div className="mx-2 md:mx-7 lg:mx-24 mt-4">
          <div className="flex items-center border-b border-[#595959] mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Trusted by industry leaders
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-7 lg:px-20">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>Our Partners</p>
          </div>
        </div>
      </div>
      {/* Next Part */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mr-2 sm:mx-10 sm:gap-4 place-items-center text-center text-black font-[Lufga-Light-2] mb-6">
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4 h-[95px] sm:h-[150px] w-[95px] sm:w-[150px]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/9.png"
            alt="img-56"
          />
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4 h-[95px] sm:h-[150px] w-[95px ] sm:w-[150px]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/10.jpeg"
            alt="img-57"
          />
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4 h-[95px] sm:h-[150px] w-[95px ]sm:w-[150px]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/11.jpeg"
            alt="img-58"
          />
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4 h-[95px] sm:h-[150px] w-[95px ]sm:w-[150px]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/12.png"
            alt="img-59-1"
          />
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4 h-[95px] sm:h-[150px] w-[95px ]sm:w-[150px]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/13.jpeg"
            alt="img-60"
          />
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4 h-[95px] sm:h-[150px] w-[95px ]sm:w-[150px]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/14.jpeg"
            alt="img-60"
          />
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4 h-[95px] sm:h-[150px] w-[95px ]sm:w-[150px]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/15.png"
            alt="img-60"
          />
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4 h-[95px] sm:h-[150px] w-[95px ]sm:w-[150px]"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/CyberSecurity/16.png"
            alt="img-60"
          />
        </div>
      </div>
      <FooterTop />
    </>
  );
};

export default CyberSecurity;
5;
