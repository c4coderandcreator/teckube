import React from "react";
import Mail from "../FootIcon/Mail";
import Phone from "../FootIcon/Phone";
import Fax from "../FootIcon/Fax";
import Twitter from "../FootIcon/Twitter";
import Linkedin from "../FootIcon/Linkedin";
import { Link } from "react-router-dom";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <>
      <div className="mx-2 px-6 md:mx-10 py-8 md:py-14 justify-start md:justify-center grid grid-cols-2  md:flex md:flex-wrap gap-6 md:gap-24 bg-[#001eee] text-white">
        <div className="md:px-4">
          <ul>
            <span className="text-[1.25rem] md:text-[1.5rem] font-[Lufga-Bold-2]">
              Company
            </span>
            <Link to="about">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] mt-3 md:mt-8  pb-1 md:pb-4">
                About Us
              </li>
            </Link>
            <Link to="careers">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
                Careers
              </li>
            </Link>
            <Link to="blog">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
                Blog
              </li>
            </Link>
            <Link to="privacy">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
                Privacy Policy
              </li>
            </Link>
            <Link to="terms">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
                Terms of Use
              </li>
            </Link>
          </ul>
        </div>
        <div className="md:px-4">
          <ul>
            <span className="text-[1.25rem] md:text-[1.5rem] font-[Lufga-Bold-2]">
              Products
            </span>
            <Link to="managedKubernetes">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] mt-3 md:mt-8  pb-1 md:pb-4">
                Managed Services for <br /> Kubernetes
              </li>
            </Link>
            <Link to="migrateToCloud">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
                Migrate to the Cloud
              </li>
            </Link>
            <Link to="customApi">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
                Custom API development <br />
                services
              </li>
            </Link>
          </ul>
        </div>
        <div className="md:px-4">
          <ul>
            <span className="text-[1.25rem] md:text-[1.5rem] font-[Lufga-Bold-2]">
              Services
            </span>
            <Link to="multiCloud">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] mt-3 md:mt-8  pb-1 md:pb-4">
                Multi-Cloud
              </li>
            </Link>
            <Link to="devops">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
                DevOps
              </li>
            </Link>
            <Link to="kubernetes">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
                Kubernetes
              </li>
            </Link>
            <Link to="redHatOpenshift">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
                Red hat Openshift
              </li>
            </Link>
            <Link to="webApp">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
                Web App Development
              </li>
            </Link>
            <Link to="mobileApp">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
                Mobile App Development
              </li>
            </Link>
            <Link to="uiux">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
                UX/UI Design
              </li>
            </Link>
            <Link to="cyberSecurity">
              <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4 hover:shadow-inner ">
                Cyber Security
              </li>
            </Link>
          </ul>
        </div>
        <div className="md:px-4">
          <ul>
            <span className="text-[1.25rem] md:text-[1.5rem] font-[Lufga-Bold-2]">
              Contact Us
            </span>
            <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] mt-3 md:mt-8  pb-1 md:pb-4"></li>
            <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
              <div className="flex items-center gap-2">
                <div className="">
                  <Mail />
                </div>
                <div>
                  <Link to="mailto:info@TecKube.io">info@TecKube.io</Link>
                </div>
              </div>
            </li>
            <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
              <div className="flex items-center gap-2">
                <div className="">
                  <Phone />
                </div>
                <div>
                  {" "}
                  <Link to="tel:+1 (833) 833-5823">+1 (833) TecKube</Link>
                </div>
              </div>
            </li>
            <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
              <div className="flex items-center gap-2">
                <div className="">
                  <Phone />
                </div>
                <div>
                  <Link to="tel:+1 (833) 833-5823">+1 (833) 832-5823</Link>
                </div>
              </div>
            </li>
            <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
              <div className="flex items-center gap-2">
                <div className="">
                  <Fax />
                </div>
                <div>+1 (833) 832-5800</div>
              </div>
            </li>
            <li className="text-[0.75rem] md:text-[1rem] font-[Lufga-Light-2] pb-1 md:pb-4">
              We are Social
              <div className="flex gap-2 md:gap-6 mt-2 md:mt-4">
                <div>
                  <Link
                    to="https://twitter.com/TecKube_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://www.linkedin.com/company/teckube/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-2 text-[0.7rem] md:text-[1rem] md:mx-24 py-2 md:py-8 text-black font-[Lufga-Light-2]">
        <p className="py-4">
          The content on this website does not constitute a complete description
          of TecKube’s advisory services. By using this website, you accept our
          <span className="font-[Lufga-Bold-2] text-[#001eee]">
            {" "}
            <Link to="terms">Terms of Use</Link>
          </span>{" "}
          and{" "}
          <span className="font-[Lufga-Bold-2] text-[#001eee]">
            <Link to="privacy">Privacy Policy.</Link>
          </span>
        </p>
        <p className="pb-4 md:py-2"> © {Year} TecKube | All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
