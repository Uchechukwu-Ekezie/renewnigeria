import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
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
        backgroundPosition: "0px 0px"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#066C16] to-[#005911] opacity-95"></div>

      {/* Content */}
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-1 lg:gap-3 lg:grid-cols-3 max-w-[1440px] mx-auto z-10 px-6">
        {/* Social Media Section */}
        <div className="flex flex-col items-center lg:items-start mt-14">
          <h1 className="mb-4 text-lg font-bold text-white sm:text-xl lg:text-[20px] leading-6 font-sanss text-center lg:text-left">
            Stay connected with Us <br />
            #RenewNigeria #RN2025
          </h1>
          <div className="flex justify-center pt-2 space-x-8">
            {[
              { icon: FaFacebook, link: "#" },
              { icon: FaLinkedin, link: "#" },
              { icon: FaInstagram, link: "#" },
              { icon: FaYoutube, link: "#" },
              { icon: FaWhatsapp, link: "https://wa.me/qr/VZXHSUXBGS5IP1" },
            ].map(({ icon: Icon, link }, index) => (
              <Link
                key={index}
                to={link}
                className="flex items-center justify-center w-[50px] h-[50px] text-[#005911] bg-white rounded-full shadow-lg hover:bg-gray-200"
              >
                <Icon size={24} />
              </Link>
            ))}
          </div>
        </div>

        {/* Organizer Section */}
        <div className="flex flex-col items-center justify-center text-center lg:items-center">
          <h1 className="mb-4 text-lg text-white font-[500] lg:mb-8 sm:text-xl lg:text-2xl font-sanss">
            Organizers
          </h1>
          <div className="grid grid-cols-3 gap-1 md:gap-28 lg:grid-cols-3 lg:gap-44 sm:w-[275px] md:w-[350px] lg:w-[275px] sm:mx-auto md:mx-auto justify-center ml-[-20px] md:ml-[80px] lg:ml-[-40px] ">
            {[
              { image: Image2, text: "Office of the Speaker" },
              { image: Image2, text: "Committee on a Renewable Energy" },
              { image: Image3, text: "", subImage: Image4 },
            ].map(({ image, text, subImage }, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4   w-[130px] md:w-[300px]"
              >
                <img
                  src={image}
                  alt={`Organizer ${index}`}
                  className="object-contain w-[90px] h-[90px] md:w-[140px] md:h-[140px] lg:h-[130px] lg:w-[130px]"
                />
                {text && (
                  <p
                    className={`text-white leading-7 whitespace-normal lg:text-[18px] text-[12px] md:text-[15px] font-[500] ${
                      text.includes("Committee") ? "w-[150px]" : ""
                    }`}
                  >
                    {text.split(" a ").map((part, i) => (
                      <React.Fragment key={i}>
                        {part}
                        {i === 0 && <br />}{" "}
                        {/* Add a line break after the first part */}
                      </React.Fragment>
                    ))}
                  </p>
                )}
                {subImage && (
                  <img
                    src={subImage}
                    alt="Sub Logo"
                    className="lg:mt-2 w-[90px] h-[20.36px] lg:h-[32.73px] lg:w-[150px] xl:w-[160px]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Host Section */}
        <div className="flex flex-col items-center justify-center text-center lg:items-end">
          <h1 className="mb-7  text-lg font-[500] text-white lg:mr-3 lg:mt-[-px] sm:text-xl lg:text-2xl font-sanss">
            Host City
          </h1>
          <div className="flex flex-col items-center text-center">
            <img
              src={Host}
              alt="Host Logo"
              className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] lg:w-[130px] lg:h-[130px] "
            />
            <p className="leading-7 text-white whitespace-pre-wrap mt-2 lg:text-[18px] text-[12px] md:text-[15px] font-sanss">
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
