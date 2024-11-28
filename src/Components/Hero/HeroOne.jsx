import React from "react";
import solar from "../../Assets/Image/solar.png"; // Replace with actual solar image path
import background from "../../Assets/Image/abuja.png"; // Replace with actual background image path
import nigeria from "../../Assets/Image/goldOn.png"; // Replace with actual Nigeria image path
import legi from "../../Assets/Image/house of rep.png";
import staff from "../../Assets/Image/staff.png";
import year from "../../Assets/Image/2025.png";

const HeroOne = () => {
  return (
    <div className="w-full">
      <div
        className="relative w-full min-h-screen bg-center bg-no-repeat bg-cover font-sanss"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center 30%",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(77, 111, 65, 0.8) 80%, rgba(77, 95, 65, 1) 100%)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] flex flex-col items-center justify-center lg:h-[330px]">
          {/* Solar Image */}
          <img
            src={solar}
            alt="Solar Panel"
            className="absolute top-[1%] left-[-2%] w-[45vw] lg:w-[400px] lg:h-[290px] md:w-[35vw] md:left-[-1%]"
          />

          {/* Nigeria Image */}
          <img
            src={nigeria}
            alt="Renew Nigeria"
            className="absolute mt-[110%] md:mt-[35%] md:w-[64vw] md:left-[9%] lg:mt-[-1%] lg:top-[40%] 2xl:top-[50%] md:top-[170%] left-[12%] w-[70vw] lg:w-[700px] 2xl:w-[900px] xl:w-[740px] 2xl:left-[15%] lg:left-[19%] lg:h-[210.82px] 2xl:h-[356.82px]"
          />

          {/* Legislative Image */}
          <img
            src={legi}
            alt="Legislative Icon"
            className="absolute mt-[110%] right-[2%] w-[15vw] md:mt-[35%] md:w-[25vw] lg:mt-[9%] lg:w-[200px] 2xl:top-[36%] 2xl:left-[80%] md:top-[165%] lg:top-[9%] lg:right-[10%]"
          />

          {/* Staff Image */}
          <img
            src={staff}
            alt="Staff"
            className="absolute mt-[110%] left-[-1%] w-[24vw] md:mt-[95%] md:w-[25vw] md:left-[-4%] lg:mt-[43%] 2xl:left-[-1%] 2xl:w-[310px] 2xl:mt-[55%] sm:left-[1%] lg:left-[4%]"
          />

          {/* Main Text */}
          <p
            className="absolute top-[-90%] text-center p-2 text-[4vw] mt-[100%] font-bold leading-[1]
           md:mt-[80%] md:top-[-190%] md:left-[2%] md:text-[4vw] 
           lg:text-left lg:mt-[55%] lg:ml-[22%] lg:top-[-98%] lg:text-[27px] lg:p-0
           2xl:text-[2vw] xl:top-[-110%]  2xl:ml-[14.2%] 2xl:top-[-80%] 2xl:text-left text-white font-raleway "
          >
            FIRST NATIONAL LEGISLATIVE SUMMIT & EXPO ON <br /> RENEWABLE ENERGY
          </p>

          {/* Date and Location */}
          <p className="absolute text-[4vw] text-white font-semibold md:text-[3vw] md:mt-[200%] lg:mt-[50%] 2xl:mt-[68%] lg:ml-[-27%] 2xl:text-[28px] lg:text-[22px] lg:text-left 2xl:ml-[-39%]  text-center font-sanss">
            11th – 13th February, 2025
            <br />
            Eko Hotel, Lagos State, Nigeria
          </p>

          {/* Year Image */}
          <img
            src={year}
            alt="2025"
            className="absolute w-[40vw] md:mt-[140%] md:w-[35vw] lg:w-[30vw] lg:mt-[50%] lg:ml-[30%] mt-[170%] 2xl:left-[20%] 2xl:top-[-50%]"
          />

          {/* Theme */}
          <p className="absolute text-[4vw] lg:text-[2.5vw] md:text-[3vw] sm:text-[4.5vw] italic font-raleway mt-[280%] p-2 text-center md:mt-[220%] lg:mt-[70%] 2xl:mt-[90%] lg:ml-[7%]">
            <span className="font-semibold text-[#FFC707]">Theme:</span>{" "}
            <span className="font-bold text-white">RENEW NIGERIA&nbsp;</span>
            <span className="font-bold text-white ">
              Unlocking Nigeria's Energy Future
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
