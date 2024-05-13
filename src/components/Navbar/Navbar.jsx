import React, { useState } from "react";
import Arrow from "../Arrow/Arrow.jsx";
import ArrowBlack from "../Arrow/ArrowBlack.jsx";
import DownArrow from "../DownArrow/DownArrow.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdowns, setShowDropdowns] = useState(false);

  const toggleDropdowns = () => {
    setShowDropdowns(!showDropdowns);
  };

  const hideDropdowns = () => {
    setShowDropdowns(false);
  };
  return (
    <>
      <div
        className="navbar bg-white p-0 pb-10 sm:py-10 md:p-10"
        onClick={hideDropdowns}
      >
        <div className="navbar-start">
          <div className="dropdown" onClick={(e) => e.stopPropagation()}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdowns}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000000"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-[22rem] bg-white ${
                showDropdowns ? "" : "hidden"
              }`}
            >
              <li className="text-black font-[Lufga-Light-2] w-[21rem]">
                <details>
                  <summary>Company</summary>
                  <ul className="py-2 bg-white font-[Lufga-Light-2] font-thin whitespace-nowrap w-52">
                    <Link to="/about">
                      <li onClick={hideDropdowns}>
                        <a>
                          About Us <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                    <Link to="/careers">
                      <li onClick={hideDropdowns}>
                        <a>
                          Careers <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                    <Link to="/blog">
                      <li onClick={hideDropdowns}>
                        <a>
                          Blog
                          <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                    <Link to="/contact">
                      <li onClick={hideDropdowns}>
                        <a>
                          Contact Us <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                  </ul>
                </details>
              </li>
              <li className="text-black font-[Lufga-Light-2]">
                <details>
                  <summary>Products & Solutions</summary>
                  <ul className="p-2 bg-white font-[Lufga-Light-2] font-thin whitespace-nowrap w-80">
                    <Link to="/managedKubernetes">
                      <li onClick={hideDropdowns}>
                        <a>
                          Managed Services for Kubernetes <ArrowBlack />{" "}
                        </a>
                      </li>
                    </Link>
                    <Link to="/migrateToCloud">
                      <li onClick={hideDropdowns}>
                        <a>
                          Migrate to the Cloud <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                    <Link to="/customApi">
                      <li onClick={hideDropdowns}>
                        <a>
                          Custom API Development <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                  </ul>
                </details>
              </li>
              <li className="text-black font-[Lufga-Light-2]">
                <details>
                  <summary>Services</summary>
                  <ul className="p-2 bg-white font-[Lufga-Light-2] font-thin whitespace-nowrap w-64">
                    <Link to="multiCloud">
                      <li onClick={hideDropdowns}>
                        <a>
                          Multi-Cloud <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                    <Link to="devops">
                      <li onClick={hideDropdowns}>
                        <a>
                          DevOps <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                    <Link to="kubernetes">
                      <li onClick={hideDropdowns}>
                        <a>
                          Kubernetes <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                    <Link to="redhatOpenshift">
                      <li onClick={hideDropdowns}>
                        <a>
                          Red hat Openshift <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                    <Link to="webApp">
                      <li onClick={hideDropdowns}>
                        <a>
                          Web App Development <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                    <Link to="mobileApp">
                      <li onClick={hideDropdowns}>
                        <a>
                          Mobile App Development <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                    <Link to="uiux">
                      <li onClick={hideDropdowns}>
                        <a>
                          UX/UI Design <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                    <Link to="cyberSecurity">
                      <li onClick={hideDropdowns}>
                        <a>
                          Cyber Security <ArrowBlack />
                        </a>
                      </li>
                    </Link>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img
              className=" w-56 h-20"
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Logo%20on%20White.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex text-black font-[Lufga-Regular-2] font-extrabold bg-white ">
          {/* <ul className="menu menu-horizontal px-2 bg-white ">
            <li className="px-2 font-[Lufga-Regular-2]">
              <details>
                <summary>Company</summary>
                <ul className="details-menu p-2 bg-white font-[Lufga-Light-2] font-thin whitespace-nowrap w-40">
                  <li className="details-menu">
                    <a>
                      About Us <ArrowBlack />
                    </a>
                  </li>
                  <li>
                    <a>
                      Careers <ArrowBlack />
                    </a>
                  </li>
                  <li>
                    <a>
                      Blog <ArrowBlack />
                    </a>
                  </li>
                  <li>
                    <a>
                      Contact Us <ArrowBlack />
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="px-2">
              <details>
                <summary>Products & Solutions</summary>
                <ul className="details-menu p-2 bg-white font-[Lufga-Light-2] font-thin whitespace-nowrap w-80">
                  <li>
                    <a>
                      Managed Services for Kubernetes <ArrowBlack />{" "}
                    </a>
                  </li>
                  <li>
                    <a>
                      Migrate to the Cloud <ArrowBlack />
                    </a>
                  </li>
                  <li>
                    <a>
                      Custom API Development <ArrowBlack />
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="px-2">
              <details>
                <summary>Services</summary>
                <ul className="details-menu p-2 bg-white font-[Lufga-Light-2] font-thin whitespace-nowrap w-64">
                  <li>
                    <a>
                      Multi-Cloud <ArrowBlack />
                    </a>
                  </li>
                  <li>
                    <a>
                      DevOps <ArrowBlack />
                    </a>
                  </li>
                  <li>
                    <a>
                      Kubernetes <ArrowBlack />
                    </a>
                  </li>
                  <li>
                    <a>
                      Red hat Openshift <ArrowBlack />
                    </a>
                  </li>
                  <li>
                    <a>
                      Web App Development <ArrowBlack />
                    </a>
                  </li>
                  <li>
                    <a>
                      Mobile App Development <ArrowBlack />
                    </a>
                  </li>
                  <li>
                    <a>
                      UX/UI Design <ArrowBlack />
                    </a>
                  </li>
                  <li>
                    <a>
                      Cyber Security <ArrowBlack />
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul> */}
          <div className="dropdown2">
            <button className="dropbtn2">
              <div className="flex items-center gap-2">
                <div>Company</div>{" "}
                <div>
                  <DownArrow />
                </div>
              </div>
            </button>
            <div className="dropdown-content2 rounded-md font-[Lufga-Light-2] font-thin w-[12rem]">
              <Link to="/about">
                <a href="">
                  <div className="flex items-center gap-4">
                    <div>About Us</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
              <Link to="/careers">
                <a href="">
                  <div className="flex items-center gap-4">
                    <div>Careers</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
              <Link to="/blog">
                <a href="">
                  <div className="flex items-center gap-4">
                    <div>Blog</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
              <Link to="/contact">
                <a href="">
                  <div className="flex items-center gap-4">
                    <div>Contact Us</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* 2nd */}
          <div className="dropdown2">
            <button className="dropbtn2">
              <div className="flex items-center gap-2">
                <div>Products & Solution</div>{" "}
                <div>
                  <DownArrow />
                </div>
              </div>
            </button>
            <div className="dropdown-content2 rounded-md font-[Lufga-Light-2] font-thin w-[23rem]">
              <Link to="/managedKubernetes">
                <a href="#">
                  <div className="flex items-center gap-4">
                    <div>Managed Services for Kubernetes</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
              <Link to="/migrateToCloud">
                <a href="#">
                  <div className="flex items-center gap-4">
                    <div>Migrate to the Cloud</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
              <Link to="/customApi">
                <a href="#">
                  <div className="flex items-center gap-4">
                    <div>Custom API Development</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          {/* 3rd */}
          <div className="dropdown2">
            <button className="dropbtn2">
              <div className="flex items-center gap-2">
                <div>Services</div>{" "}
                <div>
                  <DownArrow />
                </div>
              </div>
            </button>
            <div className="dropdown-content2 rounded-md font-[Lufga-Light-2] font-thin w-[20rem]">
              <Link to="multiCloud">
                <a href="#">
                  <div className="flex items-center gap-4">
                    <div>Multi-Cloud</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
              <Link to="devops">
                <a href="#">
                  <div className="flex items-center gap-4">
                    <div>DevOps</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
              <Link to="kubernetes">
                <a href="#">
                  <div className="flex items-center gap-4">
                    <div>Kubernetes</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
              <Link to="redhatOpenshift">
                <a href="#">
                  <div className="flex items-center gap-4">
                    <div>Red hat Openshift</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
              <Link to="webApp">
                <a href="#">
                  <div className="flex items-center gap-4">
                    <div>Web App Development</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
              <Link to="mobileApp">
                <a href="#">
                  <div className="flex items-center gap-4">
                    <div>Mobile App Development</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
              <Link to="uiux">
                <a href="#">
                  <div className="flex items-center gap-4">
                    <div>UX/UI Design</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
              <Link to="cyberSecurity">
                <a href="#">
                  <div className="flex items-center gap-4">
                    <div>Cyber Security</div>{" "}
                    <div>
                      {" "}
                      <ArrowBlack />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end font-[Lufga-Regular-2] font-extrabold mx-4 hidden md:flex">
          <Link to="/contact">
            <a className="btn text-white bg-[#001eee] border-[#001eee]">
              Contact Us {<Arrow />}
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
