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
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-3 lg:grid-cols-3 max-w-[1440px] mx-auto z-10 px-6">
        {/* Social Media Section */}
        <div className="flex flex-col items-center lg:items-start mt-14">
          <h1 className="mb-4 text-lg font-bold text-white sm:text-xl lg:text-[20px] leading-6 font-sanss">
            Stay connected with Us <br />
            #RN2025
          </h1>
          <div className="flex justify-center pt-2 space-x-8">
            {[ 
              { icon: FaFacebookF, link: "#" }, 
              { icon: FaLinkedinIn, link: "#" }, 
              { icon: FaInstagram, link: "#" }, 
              { icon: FaYoutube, link: "#" },
            ].map(({ icon: Icon, link }, index) => (
              <Link
                key={index}
                to={link}
                className="flex items-center justify-center w-[50px] h-[50px] text-[#005911] bg-white rounded-full shadow-lg hover:bg-gray-200"
              >
                <Icon size={25} />
              </Link>
            ))}
          </div>
        </div>

        {/* Organizer Section */}
        <div className="flex flex-col items-center justify-center text-center lg:items-center">
          <h1 className="mb-4 text-lg text-white font-[500] lg:mb-8 sm:text-xl lg:text-2xl font-sanss">
            Organizers
          </h1>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
            {[ 
              { image: Image2, text: "Office of the Speaker" }, 
              { image: Image2, text: "Committee on Renewable Energy" }, 
              { image: Image3, text: "", subImage: Image4 },
            ].map(({ image, text, subImage }, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 w-[150px]"
              >
                <img
                  src={image}
                  alt={`Organizer ${index}`}
                  className="object-contain h-[130px] w-[130px]"
                />
                {text && (
                  <p
                    className={`text-white leading-7 whitespace-normal text-[18px] ${
                      text.includes("Committee")
                        ? "w-[150px]"
                        : ""
                    }`}
                  >
                    {text}
                  </p>
                )}
                {subImage && (
                  <img
                    src={subImage}
                    alt="Sub Logo"
                    className="lg:mt-2 w-[160px] h-[32.73px] lg:w-[150px] xl:w-[160px]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Host Section */}
        <div className="flex flex-col items-center justify-center text-center lg:items-end">
          <h1 className="mb-7  text-lg font-[500] text-white lg:mr-11 lg:mt-[-50px] sm:text-xl lg:text-2xl font-sanss">
            Host
          </h1>
          <div className="flex flex-col items-center text-center">
            <img
              src={Host}
              alt="Host Logo"
              className="w-[130px] h-[130px] "
            />
            <p className="leading-7 text-white whitespace-pre-wrap mt-2 text-[18px] font-sanss">
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
