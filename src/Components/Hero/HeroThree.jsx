import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Image1 from "../../Assets/Image/organizers/image1.png";
import Image2 from "../../Assets/Image/organizers/image2.png";
import Image3 from "../../Assets/Image/organizers/image3.png";
import Image4 from "../../Assets/Image/organizers/Green_Clean_Text.png";
import Host from "../../Assets/Image/Host/Host1.png";

function HeroOne() {
  return (
    <div className="w-full h-auto bg-[#005911] py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-3 lg:grid-cols-3 w-[90%] mx-auto">
        {/* Social Media Section */}
        <div className="flex flex-col items-center lg:items-start mt-14">
          <h1 className="font-bold text-white text-l sm:text-xl lg:text-sm mb-4">
            Stay connected with Us <br />#RN2025
          </h1>
          <div className="flex justify-center pt-2 space-x-2">
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10 text-[#005911] bg-white rounded-full shadow-lg hover:bg-gray-200"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10 text-[#005911] bg-white rounded-full shadow-lg hover:bg-gray-200"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10 text-[#005911] bg-white rounded-full shadow-lg hover:bg-gray-200"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10 text-[#005911] bg-white rounded-full shadow-lg hover:bg-gray-200"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10 text-[#005911] bg-white rounded-full shadow-lg hover:bg-gray-200"
            >
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>

        {/* Organizer Section */}
        <div className="flex flex-col items-center text-center justify-center lg:items-center">
          <h1 className="mb-4 text-lg font-bold text-white lg:mb-8 sm:text-xl lg:text-2xl">
            Organizers
          </h1>
          <div className="flex flex-row gap-5 items-center justify-center">
            {/* Organizer 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={Image2}
                alt="Speaker logo"
                className="w-[70%] h-[70%] lg:w-[70%]"
              />
              <p className="text-white">Office of the Speaker</p>
            </div>

            {/* Organizer 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={Image2}
                alt="Committee Logo"
                className="w-[70%] h-[70%] lg:w-[70%]"
              />
              <p className="text-white">Committee on Renewable Energy</p>
            </div>

            {/* Organizer 3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={Image3}
                alt="Green Clean Logo"
                 className="w-[70%] h-[70%] lg:w-[70%]"
              />
              <img
                src={Image4}
                alt="Green Clean Text"
                className="w-[160px] h-[32.73px] lg:w-[160px] xl:w-[160px]"
              />
            </div>
          </div>
        </div>

        {/* Host Section */}
        <div className="flex flex-col items-center text-center justify-center lg:items-end">
          <h1 className="mb-4 lg:mr-11 text-lg font-bold text-white lg:mb-8 sm:text-xl lg:text-2xl">
            Host
          </h1>
        

            {/* Organizer 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={Host}
                alt="Speaker logo"
                className="w-[80%] h-[85%] lg:w-[85%]"
              />
              <p className="text-white">Lagos State <br/>Government</p>
            </div>

            
        </div>

           
          
      </div>
    </div>
  );
}

export default HeroOne;
