import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_SI,
        import.meta.env.VITE_REACT_TI,
        form.current,
        {
          publicKey: import.meta.env.VITE_REACT_PK,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          const successAlert = document.createElement("div");
          successAlert.className =
            "bg-green-500 text-white px-4 py-2 rounded-md fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
          successAlert.textContent = "Your message has been sent successfully";
          document.body.appendChild(successAlert);
          setTimeout(() => {
            document.body.removeChild(successAlert);
          }, 3000);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          const errorAlert = document.createElement("div");
          errorAlert.className =
            "bg-red-500 text-white px-4 py-2 rounded-md fixed top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
          errorAlert.textContent =
            "There is some server issue , please mail me at : info@teckube.io";
          document.body.appendChild(errorAlert);
          setTimeout(() => {
            document.body.removeChild(errorAlert);
          }, 30000);
        }
      );
  };

  return (
    <>
      <div className="flex mx-6 sm:mx-10 justify-between">
        <div>
          <img
            className="hidden sm:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/main/Image%20Resource/Contact%20us/Image.png"
            alt="img"
          />
        </div>
        <div className="text-black sm:p-16 sm:w-[50vw]">
          <p className=" font-[Lufga-Bold-2] text-[2.25rem] py-1">
            Let’s <span className="text-[#001eee]">bring</span> your digital{" "}
            <br /> products to <span className="text-[#001eee]">life</span>
          </p>
          <p className="font-[Lufga-Regular-2]">
            You can reach us anytime via{" "}
            <span className="text-[#001eee]">
              {" "}
              <Link to="mailto:info@TecKube.io">info@TecKube.io</Link>
            </span>
          </p>
          <form
            className="font-[Lufga-Regular-2] flex flex-col justify-center align-middle p-2 md:p-6 rounded-md"
            ref={form}
            onSubmit={sendEmail}
          >
            <label className="text-webbut-400 py-4 font-monoDM">Name</label>
            <input
              className="  bg-white border-2 rounded-md p-2 text-xs md:text-base"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <label className="text-webbut-400 py-4">Email</label>
            <input
              className="  bg-white border-2 rounded-md p-2 text-xs md:text-base"
              type="email"
              name="user_email"
              placeholder="you@company.com"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <label className="text-webbut-400 py-4">Phone Number</label>
            <input
              className=" text-black bg-white border-2  rounded-md p-2 text-xs md:text-base"
              type="tel"
              name="user_phone"
              placeholder="+1 (555) 000-0000"
              required
            />
            <label className="text-webbut-400 py-4">How can we help ?</label>
            <textarea
              className="h-32  border-2 text-black bg-white rounded-md p-2 text-xs md:text-base "
              name="message"
              placeholder="Tell us a little about the project..."
              required
            />
            <label className="text-webbut-400 py-4 font-[Lufga-Bold-2] text-[1.25rem]">
              Services
            </label>
            <div className="flex items-center gap-12">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <div>
                    <input
                      type="checkbox"
                      name="service"
                      value="Multi-Cloud"
                      className="bg-white rounded-full"
                    />
                  </div>
                  <div>
                    <label className="text-webbut-400">Multi-Cloud</label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <input
                      type="checkbox"
                      name="service"
                      value="DevOps"
                      className="text-webbut-400"
                    />
                  </div>
                  <div>
                    <label className="text-webbut-400">DevOps</label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <input
                      type="checkbox"
                      name="service"
                      value="Kubernetes"
                      className="text-webbut-400"
                    />
                  </div>
                  <div>
                    <label className="text-webbut-400">Kubernetes</label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <input
                      type="checkbox"
                      name="service"
                      value="UX/UI Design"
                      className="text-webbut-400"
                    />
                  </div>
                  <div>
                    <label className="text-webbut-400">UX/UI Design</label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <input
                      type="checkbox"
                      name="service"
                      value="Cyber Security"
                      className="text-webbut-400"
                    />
                  </div>
                  <div>
                    <label className="text-webbut-400">Cyber Security</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <div>
                    <input
                      type="checkbox"
                      name="service"
                      value="Redhat Openshift"
                      className="text-webbut-400"
                    />
                  </div>
                  <div>
                    <label className="text-webbut-400">Redhat Openshift</label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <input
                      type="checkbox"
                      name="service"
                      value="Web App Development"
                      className="text-webbut-400"
                    />
                  </div>
                  <div>
                    <label className="text-webbut-400">
                      Web App Development
                    </label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <input
                      type="checkbox"
                      name="service"
                      value="Mobile App Development"
                      className="text-webbut-400"
                    />
                  </div>
                  <div>
                    <label className="text-webbut-400">
                      Mobile App Development
                    </label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <input
                      type="checkbox"
                      name="service"
                      value="Custom API Development"
                      className="text-webbut-400"
                    />
                  </div>
                  <div>
                    <label className="text-webbut-400">
                      Custom API Development
                    </label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <input
                      type="checkbox"
                      name="service"
                      value="Other Service"
                      className="text-webbut-400"
                    />
                  </div>
                  <div>
                    <label className="text-webbut-400">Other Service</label>
                  </div>
                </div>
              </div>
            </div>
            <input
              className="sm:w-[40vw] bg-[#001eee] text-white font-[Lufga-Bold-2] font-medium text-xs md:text-base border-2 border-webbut-400 bg-webbut-400 hover:bg-black hover:text-webbut-400 cursor-pointer w-[20rem] items-center py-4 sm:py-2 md:py-2 my-4 rounded-lg"
              type="submit"
              value="Get Started"
            />
          </form>
        </div>
      </div>
      <div className=" font-[Lufga-Regular-2] text-white flex flex-wrap bg-[#001eee] items-center justify-between px-6 sm:px-24 py-20 sm:mx-10">
        <div className="flex flex-col mr-4">
          <p className="pb-4">Get in touch </p>
          <p className="text-[2.3rem] font-[Lufga-Bold-2] pb-2">
            Contact Numbers
          </p>
        </div>
        <div className="flex flex-col mr-28">
          <p className="font-[Lufga-Bold-2] text-[1.5rem]">Phone</p>
          <p>+1 (833) TecKube</p>
          <p>+1 (833) 832-5823</p>
        </div>
        <div className="flex flex-col mr-32 mt-4 sm:mt-0">
          <p className="font-[Lufga-Bold-2] text-[1.5rem]">Fax</p>
          <p>+1 (833) 832-5800</p>
        </div>
      </div>

      {/* second */}
      <div className="text-black font-[Lufga-Regular-2] grid sm:grid-cols-3 gap-4 pb-4 sm:pb-8 pt-10 px-6 sm:px-0">
        <div className="justify-self-start sm:justify-self-center">
          <p>
            Our locations <br />{" "}
            <span className="text-[2.3rem] font-[Lufga-Bold-2]">
              Visit our offices
            </span>{" "}
            <br /> Find us at these locations.
          </p>
        </div>
        <div className="justify-self-start sm:justify-self-center">
          <p>
            <span className="font-[Lufga-Bold-2] text-[1.2rem] sm:text-[1.5rem]">
              United State (HQ)
            </span>
            <br /> 1740 Broadway 15th Floor <br /> New York, NY 10019
          </p>
        </div>
        <div className="justify-self-start sm:justify-self-center">
          <p>
            <span className="font-[Lufga-Bold-2] text-[1.2rem] sm:text-[1.5rem]">
              INDIA
            </span>{" "}
            <br /> 1385/3, 3rd Floor, 4th Cross,
            <br /> Tulasi Theather Road, <br />
            Marathahalli, Bangalore 560037
          </p>
        </div>
      </div>
      {/* third */}
      <div className="text-black font-[Lufga-Regular-2] grid sm:grid-cols-3 gap-4 pb-10 px-6 sm:px-0">
        <div className="justify-self-start sm:justify-self-center mr-20">
          <p>
            <span className="font-[Lufga-Bold-2] text-[1.2rem] sm:text-[1.5rem]">
              Canada
            </span>
            <br /> 60 Atlantic Ave Suite 200 <br /> Toronto, ON M6K 1X9
          </p>
        </div>
        <div className="justify-self-start sm:justify-self-center">
          <p>
            <span className="font-[Lufga-Bold-2] text-[1.2rem] sm:text-[1.5rem]">
              United Emirates
            </span>{" "}
            <br /> Technohub 1, DTEC Dubai <br /> Silicon Oasis Dubai
          </p>
        </div>
        <div className="justify-self-start sm:justify-self-center mr-14">
          <p>
            <span className="font-[Lufga-Bold-2] text-[1.2rem] sm:text-[1.5rem]">
              United Kingdom
            </span>{" "}
            <br /> 71-75 Shelton Street, <br />
            Covent Garden London,
            <br /> WC2H 9JQ
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
