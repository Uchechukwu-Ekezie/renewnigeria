import React from "react";
import solar from "../../Assets/Image/solar.png"; // Replace with actual solar image path
import background from "../../Assets/Image/features/iiiww.png"; // Replace with actual background image path
import nigeria from "../../Assets/Image/renweew.png"; // Replace with actual Nigeria image path
import legi from "../../Assets/Image/house of rep.png";
import staff from "../../Assets/Image/staff.png";

const HeroSlideOne = () => {
  return (
    <div className="w-full min-h-screen">
      <div
        className="relative w-full min-h-screen bg-center bg-no-repeat bg-cover font-sanss 2xl:min-h-[1000px]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center 30%",
        }}
      >
        {/* Overlay */}
      
      

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] flex flex-col items-center justify-center lg:h-[330px]">
          {/* Solar Image */}
          <img
            src={solar}
            alt="Solar Panel"
            className="absolute lg:top-[120%] 2xl:top-[200%]  left-[28%] w-[42vw] 2xl:w-[511.93px] lg:-left-[0] lg:w-[450px] lg:h-auto 2xl:left-[-90px] md:w-[40vw] md:left-[32%] md:top-[90%] top-[100%]"
          />

          <div className="relative z-10 flex flex-col lg:flex-row h-full text-center text-white justify-between items-center lg:items-start lg:text-left 2xl:pt-[50px]  max-w-screen-2xl mx-auto px-4">
            {/* Left Section: Logo */}
            <div className="flex justify-center w-full mb-16 md:mb-11 lg:justify-start lg:w-[20%] lg:mb-0">
              <img
                src={legi}
                alt="Logo"
                className=" w-[90px] pt-10 lg:w-[200px] lg:ml-[80px] 2xl:ml-[0px] lg:h-full md:w-[200px] md:pt-10 mx-auto mt-[10px] lg:mt-0"
              />
            </div>

            {/* Center Section: Main Content */}
            <div className="flex flex-col items-center w-full lg:items-start lg:w-[60%] ">
              {/* Title */}
              <div className="flex justify-center w-full md:mt-4 mt-[-50px] lg:mt-8 mb-3 lg:justify-start lg:mb-0">
                <img
                  src={nigeria}
                  alt="Logo"
                  className="h-full w-[80vw] 2xl:w-[900px] md:w-[471px] md:h-[150px] 2xl:h-[310px] lg:h-[210px] lg:w-[800px] mx-auto"
                />
              </div>

              {/* Subtitle */}
              <p className="lg:text-[32px] md:text-[20px] font-[700] font-sanss lg:leading-[41.66px] text-center md:mt-[30px] mt-2">
                FIRST NATIONAL LEGISLATIVE SUMMIT & EXPO ON RENEWABLE ENERGY
              </p>

              {/* Date & Venue */}
              <p className="mb-2 mt-4 lg:mt-[10px] md:text-[20px] font-sanss font-[700] lg:text-[32px] text-center md:mt-[20px] ">
                11th - 13th February, 2025 | Eko Hotel, Lagos State, Nigeria
              </p>

              {/* Theme */}
              <p className="mb-[-20px] mx-auto font-bold text-center  lg:mt-[5px] md:text-[20px] md:mt-[10px] mt-4">
                <span className="text-[#FFC707] font-segoe lg:text-[48px]">
                  Theme
                </span>{" "}
                <span className="font-[700] font-raleway lg:text-[36px]">
                  : RENEW NIGERIA
                </span>{" "}
                <br />
                <span className="text-center text-white font-raleway lg:text-[36px]">
                  Unlocking Nigeria’s Energy Future
                </span>
              </p>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-4 mt-8 lg:justify-center lg:ml-[210px] lg:mt-[40px] md:mt-[50px] 2xl:ml-[280px] ">
                <button className="px-6 py-3 lg:py-[20px] lg:px-[31px] font-bold font-sanss text-white rounded-md bg-[#066C18] hover:bg-green-700 text-[16px]">
                  Register Now
                </button>
                <button className="px-6 py-3 lg:py-[20px] lg:px-[31px] font-[500] text-black text-[16px] bg-white rounded-md font-sanss hover:bg-gray-100">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Section: Speakers */}
            <div className="flex justify-center w-full pb-9 lg:justify-start lg:w-[20%] lg:mt-10 md:w-[80%] md:pb-36">
              <img
                src={staff}
                alt="Staff"
                className="absolute mt-[-105%]   right-[1%] md:left-[70%] w-[25vw] md:-mt-[70%] md:w-[25vw]  lg:mt-[3%] 2xl:left-[80%] 2xl:w-[310px] 2xl:h-[406px] 2xl:mt-[5%] sm:left-[10%] lg:left-[75%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideOne;