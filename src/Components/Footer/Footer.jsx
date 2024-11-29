import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import logo from "../../assets/image/Green_Clean logo.png";

import logo from "../../Assets/Image/Footer.png";
import logo1 from "../../Assets/Image/Footer2.png";
function Footer() {
  return (
    <div className="py-10 text-white ">
      <div className="px-6 mx-auto mt-16 w-[95%] lg:w-[90%]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-6 lg:grid-cols-4"> {/* Grid layout on tablet and above */}
          {/* Left Section */}
          <div className="w-full">
            <div className="flex flex-col justify-center items-center gap-2 w-[100%] space-x-3">

              <img
                src={logo}
                alt="Green Clean Logo"
                className="  h-[47px] w-[137px] lg:block"
                
              />
              <img
                src={logo1}
                alt="Green Clean Logo"
                className="  h-[5px] w-[150px] lg:block"
                
              />
            </div>
            <p className="mt-5 ml-4 text-center text-[14px] leading-6 font-albert font-[400] text-white md:text-[16px] md:w-[250px]">
              Driving Nigeria's <br /> Green Revolution
            </p> <br />
            
          </div>

          {/* first Center Section */}
          <div className="w-full">
            <h3 className="mb-4 text-[20px] font-albert font-[600] md:text-[24px]">
              Our <span className="text-[#005911]">Services</span>
            </h3>
            <ul className="space-y-2 text-[14px] leading-6 font-albert font-[400] md:text-[16px]">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>Wind Turbines</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>Solar Panels</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>Hydropower Plants</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>Fossil Resources</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>Battery Materials</span>
                </a>
              </li>
            </ul>
          </div>
           {/* second Center Section */}
           <div className="w-full">
            <h3 className="mb-4 text-[20px] font-albert font-[600] md:text-[24px]">
            Useful <span className="text-[#005911]">Links</span>
            </h3>
            <ul className="space-y-2 text-[14px] leading-6 font-albert font-[400] md:text-[16px]">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>Leadership Team</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>News & blog</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>Our Projects</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:text-green-500"
                >
                  <span className="font-extrabold">›</span>
                  <span>Contacts</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="w-full">
            <h3 className="mb-5 text-[20px] font-albert font-[600] md:text-[24px]">
              Get  <span className="text-[#005911]">Notified</span>
            </h3>
            <p className="mb-5 text-[14px] text-[#FFFFFF] font-albert font-[400] md:text-[16px]">
              Stay updated with our latest news! Enter your email here
            </p>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mb-4 text-[#74787C]rounded-md md:w-[306px] md:h-[60px] bg-white border-[1px] border-[#868681] focus:outline-dashed"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-[#49AF45] rounded-md md:w-[306px] md:h-[60px] hover:bg-[#30862d]"
              >
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-16 text-center border-t text-[#74787C] border-gray-600 text-[14px] font-albert font-[400] md:text-[16px]">
          © Copyright 2024 Renew Nigeria.
        </div>
      </div>
    </div>
  );
}

export default Footer;
