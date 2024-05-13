import React from "react";
import FooterTop from "../../FooterTop/FooterTop";
import Dot from "../../Dot/Dot";
import Tick from "../../Tick/Tick";
import LearnMore from "../../LearnMore/LearnMore";
import { Link } from "react-router-dom";
import Arrow from "../../Arrow/Arrow";
const AboutUs = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-5 ml-4 sm:ml-20">
        <div className=" sm:mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
            Tackling modern challenges with innovative solutions
          </p>
        </div>
        <div className="ml-64">
          <img
            className="hidden sm:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/4d99acac01967145ebc9718a423635e1424672b9/Image%20Resource/About%20Us/Target%20Illustration.svg"
            alt="img"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-7 text-black font-[Lufga-Regular-2]">
        <div></div>
        <div className="col-start-2 py-10 mr-4">
          <p>
            We are creators of possibilities, seeing modern challenges as a
            means for the creation of innovative solutions. With a team of
            skilled engineers, finding the right solution for your organisation
            is not a problem.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 sm:pb-40">
        <div className="col-span-2 ">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/4d99acac01967145ebc9718a423635e1424672b9/Image%20Resource/About%20Us/Image%201.svg"
            alt="img"
          />
        </div>
        <div className="col-span-2 translate-y-10 sm:translate-y-40 ">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/4d99acac01967145ebc9718a423635e1424672b9/Image%20Resource/About%20Us/Image%202.svg"
            alt="img"
          />
        </div>
        <div className="col-span-2 translate-y-6 sm:translate-y-24">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/4d99acac01967145ebc9718a423635e1424672b9/Image%20Resource/About%20Us/Image%203.svg"
            alt="img"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/4d99acac01967145ebc9718a423635e1424672b9/Image%20Resource/About%20Us/Image%204.svg"
            alt="img"
          />
        </div>
      </div>
      {/* home part
      <div className="mt-20">
        <div className="mx-2 md:mx-24 mt-4">
          <div className="flex items-center border-b border-[#595959] mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Meet the team
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-20">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              Meet our team of <span className="text-[#001eee]">creators</span>,{" "}
              <span className="text-[#001eee]">designers</span>, and world-class{" "}
              <span className="text-[#001eee]">problem solvers</span>
            </p>
            <p className="font-[Lufga-Light-2] text-[1rem] py-6">
              Diversity is at the heart of our organization as this is the
              source of our strength. Unique People = Unique Ideas.
            </p>
          </div>
        </div>
      </div> */}
      {/* Next Part */}
      {/* <div className="grid grid-cols-2 md:grid-cols-5 mx-10 sm:gap-4 place-items-center text-center text-black font-[Lufga-Light-2] mb-6">
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/About%20Us/Group%2056.png"
            alt="img-56"
          />
          <p className="font-[Lufga-Bold-2] text-black sm:text-[1.25rem]">
            Arlene McCoy
          </p>{" "}
          <p>Network Administrator</p>
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/About%20Us/Group%2057.png"
            alt="img-57"
          />
          <p className="font-[Lufga-Bold-2] text-black sm:text-[1.25rem]">
            Annette Black
          </p>{" "}
          <p>Computer Network Architect</p>
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/About%20Us/Group%2058.png"
            alt="img-58"
          />
          <p className="font-[Lufga-Bold-2] text-black sm:text-[1.25rem]">
            Ralph Edwards
          </p>{" "}
          <p>Site Reliability Engineer</p>
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/About%20Us/Group%2059-1.png"
            alt="img-59-1"
          />
          <p className="font-[Lufga-Bold-2] text-black sm:text-[1.25rem]">
            Ronald Richards
          </p>{" "}
          <p>Data Architect</p>
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/About%20Us/Group%2060.png"
            alt="img-60"
          />
          <p className="font-[Lufga-Bold-2] text-black sm:text-[1.25rem]">
            Wade Warren
          </p>{" "}
          <p>Site Reliability Engineer</p>
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/About%20Us/Group%2061.png"
            alt="img-61"
          />
          <p className="font-[Lufga-Bold-2] text-black sm:text-[1.25rem]">
            Courtney Henry
          </p>{" "}
          <p>Site Reliability Engineer</p>
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/About%20Us/Group%2062.png"
            alt="img-62"
          />
          <p className="font-[Lufga-Bold-2] text-black sm:text-[1.25rem]">
            Bessie Cooper
          </p>{" "}
          <p>Computer Systems Analyst</p>
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/About%20Us/Group%2059.png"
            alt="img-59"
          />
          <p className="font-[Lufga-Bold-2] text-black sm:text-[1.25rem]">
            Eleanor Pena
          </p>{" "}
          <p>Hardware Engineer</p>
        </div>
        <div className="sm:p-6">
          <img
            className="sm:mx-8 py-4"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/About%20Us/Group%2064.png"
            alt="img-64"
          />
          <p className="font-[Lufga-Bold-2] text-black sm:text-[1.25rem]">
            Jenny Wilson
          </p>{" "}
          <p>
            Computer Technical <br /> Support Specialist
          </p>
        </div>
        <div className="sm:p-6">
          <img
            className="py-2"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/About%20Us/Group%2063.png"
            alt="img-63"
          />
          <p className="font-[Lufga-Bold-2] text-black sm:text-[1.25rem]">
            Darlene Robertson
          </p>{" "}
          <p>Solutions Architect</p>
        </div>
      </div>{" "} */}
      {/* Next part 2 */}
      <div className="mt-20">
        <div className="mx-2 sm:mx-24 mt-4">
          <div className="flex  items-center border-b border-[#595959] mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Why choose us?
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between py-2 md:py-8 md:px-32 sm:ml-60">
          <div className="hidden sm:block"></div>
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              The <span className="text-[#001eee]">foresight</span>, to think
              big. <br /> The <span className="text-[#001eee]">vision</span> to
              make it <br /> happen.
            </p>
            <p className="font-[Lufga-Light-2] text-[1rem] py-6">
              Commitment, Integrity, Respect and Modesty are the driving <br />{" "}
              factors for how we approach every customer, employee, <br /> and
              business partner.
            </p>
          </div>
        </div>
        <div className="pb-14 grid grid-cols-1 sm:grid-cols-3 place-items-center gap-2 text-black">
          <div className="w-96 h-[30.75rem] shadow-md m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/accd5914b2a93d492700d243e7d3d9bc06b2ee79/Image%20Resource/About%20Us/Group%2066.svg"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Customer Satisfaction Obsessed
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              We go above and beyond to ensure customers are delighted by the
              solutions we create. We strongly believe in happiness and need to
              satisfy our customers. Every business has a backbone, and they are
              indeed the ones.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/accd5914b2a93d492700d243e7d3d9bc06b2ee79/Image%20Resource/About%20Us/Group%2066-1.svg"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Open Communication
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              We know that tough situation arises and as different individuals,
              various opinions accompany our decisions. We handle differences by
              being open to saying and sharing the right things.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/accd5914b2a93d492700d243e7d3d9bc06b2ee79/Image%20Resource/About%20Us/Group%2066-2.svg"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Shared Goals & Teamwork
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              We believe being on the same page is the key. We are a team that
              sets respective shared goals to ensure we can track our progress
              and enhance the services we provide to our customers.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/accd5914b2a93d492700d243e7d3d9bc06b2ee79/Image%20Resource/About%20Us/Group%20105.svg"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Leadership
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              Whilst being a team that trusts and respects and shares everything
              with each other, talent without proper guidance is deemed useless.
              Thus, we have invested in having the best leadership structure set
              out to ensure our teams are high-performing engineers in the
              industry.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/accd5914b2a93d492700d243e7d3d9bc06b2ee79/Image%20Resource/About%20Us/Group%20106.svg"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Personal Growth
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              We believe that lifting others lifts us, and therefore at TecKube
              - we invest heavily in ensuring our team members get to grow. And
              this results in a compounding effect which trickles down to the
              rest of the organization as their growth equals our collective
              growth.
            </p>
          </div>
          <div className="w-96 h-[30.75rem] shadow-md m-4 rounded-lg">
            <img
              src="https://raw.githubusercontent.com/c4coderandcreator/tKube/accd5914b2a93d492700d243e7d3d9bc06b2ee79/Image%20Resource/About%20Us/Group%20107.svg"
              alt="img"
            />
            <p className="px-4 py-3 font-[Lufga-Bold-2] text-[1.25rem]">
              Customer Affinity{" "}
            </p>
            <p className="px-4 py-2 font-[Lufga-Light-2] text-[0.9rem]">
              Our customers’ goals are at the forefront of every of our
              decision. We believe in understanding the needs and wants of the
              customers to better serve and create innovative solutions to the
              challenges brought to us.
            </p>
          </div>
        </div>
      </div>
      {/* FooterTop */}
      <div className="flex flex-wrap items-center justify-between pb-6 sm:pb-1 py-2 md:py-8 md:px-24">
        <div className="font-[Lufga-ExtraBold-2] text-[2.1rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
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
            <div className=" navbar-end font-[Lufga-Regular-2] font-extrabold mx-4 flex">
              <a className="btn text-white bg-[#001eee]">
                <Link href="#about" to="../contact">
                  Contact Us{" "}
                </Link>{" "}
                {<Arrow />}
              </a>
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

export default AboutUs;
