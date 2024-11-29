import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Image2 from "../../Assets/Image/organizers/image2.png";
import Image3 from "../../Assets/Image/organizers/image3.png";
import Image4 from "../../Assets/Image/organizers/Green_Clean_Text.png";
import Host from "../../Assets/Image/Host/Host1.png";
import BackgroundImage from "../../Assets/Image/Host/bground.jpg";

function HeroThree() {
  return (
    <div
      className="relative w-full py-12 bg-center bg-cover"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-[#066C16] opacity-90"></div>

      {/* Content */}
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-6 lg:grid-cols-3 max-w-[1440px] mx-auto z-10 px-4 lg:px-8">
        {/* Social Media Section */}
        <div className="flex flex-col items-center lg:items-start mt-14">
          <h1 className="mb-4 text-lg font-bold text-white sm:text-xl lg:text-[20px] leading-6 font-sanss text-center lg:text-left">
            Stay connected with Us <br />
            #RN2025
          </h1>
          <div className="flex justify-center pt-2 space-x-4 lg:justify-start sm:space-x-6">
            {[
              { icon: FaFacebookF, link: "#" },
              { icon: FaLinkedinIn, link: "#" },
              { icon: FaInstagram, link: "#" },
              { icon: FaYoutube, link: "#" },
            ].map(({ icon: Icon, link }, index) => (
              <Link
                key={index}
                to={link}
                className="flex items-center justify-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] text-[#005911] bg-white rounded-full shadow-lg hover:bg-gray-200"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* Organizer Section */}
        <div className="flex flex-col items-center justify-center text-center lg:items-center">
          <h1 className="mb-4 text-lg text-white font-[500] lg:mb-8 sm:text-xl lg:text-2xl font-sanss">
            Organizers
          </h1>
          <div className="flex flex-wrap items-start justify-center space-x-6 sm:space-x-10">
            {[
              { image: Image2, text: "Office of the Speaker" },
              { image: Image2, text: "Committee on Renewable Energy" },
              { image: Image3, text: "", subImage: Image4 },
            ].map(({ image, text, subImage }, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 w-[120px] sm:w-[150px] mb-6"
              >
                <img
                  src={image}
                  alt={`Organizer ${index}`}
                  className="object-contain h-[100px] w-[100px] sm:h-[130px] sm:w-[130px]"
                />
                {text && (
                  <p
                    className={`text-white leading-6 text-[14px] sm:text-[16px] whitespace-pre-wrap ${
                      text.includes("Committee") ? "w-[150px]" : ""
                    }`}
                  >
                    {text}
                  </p>
                )}
                {subImage && (
                  <img
                    src={subImage}
                    alt="Sub Logo"
                    className="w-[120px] h-[25px] sm:w-[160px] sm:h-[32.73px]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Host Section */}
        <div className="flex flex-col items-center justify-center text-center lg:items-end">
          <h1 className="mb-4 text-lg font-bold text-white sm:text-xl lg:text-2xl">
            Host
          </h1>
          <div className="flex flex-col items-center text-center">
            <img
              src={Host}
              alt="Host Logo"
              className="object-contain w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]"
            />
            <p className="leading-6 text-white whitespace-pre-wrap mt-2 text-[14px] sm:text-[16px]">
              Lagos State <br />
              Government
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroThree;
