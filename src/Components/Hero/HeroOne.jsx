import React from "react";
import solar from "../../Assets/Image/solar.png"; // Replace with actual solar image path
import background from "../../Assets/Image/abuja.png"; // Replace with actual background image path
import nigeria from "../../Assets/Image/renweew.png"; // Replace with actual Nigeria image path
import gold from "../../Assets/Image/gold.png"; // Replace with actual Nigeria image path
import goldOne from "../../Assets/Image/goldOne.png";
import legi from "../../Assets/Image/house of rep.png";
import staff from "../../Assets/Image/staff.png";
import year from "../../Assets/Image/2025.png";

const HeroOne = () => {
  return (
    <div
      className="relative  max-w-full bg-center bg-no-repeat bg-cover lg:h-[800px] h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: " center 20%",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(77, 111, 65, 0.8) 80%, rgba(77, 95, 65, 1) 100%)",
        }}
      ></div>

      {/* Content */}
      {/* Heading */}

      <div className="relative mx-auto max-w-screen-2xl">
        <img
          src={solar}
          alt="Solar Panel"
          className="absolute top-4 left-4 w-[150px] md:w-[250px] lg:w-[501.93px] lg:h-[330px]"
        />

        <img
          src={nigeria}
          alt="renew nigeria"
          className="absolute top-[130px] left-[15px] lg:top-[220px] lg:left-[171px] w-[400px] lg:w-[1068px] lg:h-[352.82px] md:top-[180px] md:left-[100px]  md:w-[568px] md:h-[252.82px] "
        />

        <img
          src={gold}
          alt="gold"
          className="absolute lg:top-[393px] lg:left-[183px] lg:w-[1011px] lg:h-[36px] md:top-[301px] md:left-[111px] md:w-[530px] md:h-[36px] top-[197px] left-[21px] w-[375px] h-[15px]"
        />
        <img
          src={goldOne}
          alt="flash"
          className="absolute top-[332px] left-[211.5px] lg:w-[98px] lg:h-[134px] transform rotate-[-1.6deg]"
        />
        <img
          src={legi}
          alt="Solar Panel"
          className="absolute top-[311px] left-[1155px] lg:w-[200px] lg:h-[200px]"
        />
        <img
          src={staff}
          alt="staff"
          className="absolute top-[383px] left-[20px] lg:w-[310px] lg:h-[406px]"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white md:px-8">
          {/* Subtitle */}
          <p className="mt-4 text-[36px] font-raleway font-bold sm:text-2xl md:text-3xl lg:mt-[580px] text-left ml-[-300px]">
            FIRST NATIONAL LEGISLATIVE SUMMIT & EXPO ON <br /> RENEWABLE ENERGY
          </p>

          {/* Date and Location */}
          <p className="mt-2 text-[32px] sm:text-xl md:text-2xl text-left ml-[-670px] font-[700] font-sanss">
            11th – 13th February, 2025
            <br />
            Eko Hotel, Lagos State, Nigeria
          </p>

          <img
            src={year}
            alt=""
            className="absolute top-[599px] left-[643px] lg:w-[565.98px] lg:h-[170px]"
          />

          {/* Theme */}
          <p className="mt-6 text-xl italic md:text-2xl lg:text-3xl font-raleway">
            <span className="font-semibold text-[#FFC707]">Theme:</span>
            <span className="font-bold text-white text-[36px]">
              RENEW NIGERIA&nbsp;
            </span>
            <span className="font-bold text-[36px]">
              Unlocking Nigeria's Energy Future
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
