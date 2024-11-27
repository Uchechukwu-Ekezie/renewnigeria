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
      className="relative w-full h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center 20%",
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
      <div className="relative px-4 mx-auto max-w-screen-2xl md:px-8">
        {/* Images */}
        <img
          src={solar}
          alt="Solar Panel"
          className="absolute top-[5%] left-[5%] w-[20vw] max-w-[150px] md:max-w-[250px] lg:max-w-[501px] lg:h-auto"
        />

        <img
          src={nigeria}
          alt="Renew Nigeria"
          className="absolute top-[20%] left-[10%] w-[80vw] max-w-[400px] md:max-w-[568px] lg:max-w-[1068px]"
        />

        <img
          src={gold}
          alt="Gold"
          className="absolute top-[40%] left-[10%] w-[70vw] max-w-[375px] md:max-w-[530px] lg:max-w-[1011px]"
        />

        <img
          src={goldOne}
          alt="Flash"
          className="absolute top-[35%] left-[15%] w-[8vw] max-w-[98px] lg:max-w-[134px] transform rotate-[-1.6deg]"
        />

        <img
          src={legi}
          alt="Legislative Logo"
          className="absolute top-[30%] right-[5%] w-[15vw] max-w-[120px] md:max-w-[160px] lg:max-w-[200px]"
        />

        <img
          src={staff}
          alt="Staff"
          className="absolute bottom-[5%] left-[5%] w-[18vw] max-w-[200px] md:max-w-[260px] lg:max-w-[310px]"
        />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          {/* Subtitle */}
          <p className="mt-10 text-[4vw] font-raleway font-bold leading-tight lg:text-[2.5vw] md:text-[3vw] sm:text-[5vw]">
            FIRST NATIONAL LEGISLATIVE SUMMIT & EXPO ON <br /> RENEWABLE ENERGY
          </p>

          {/* Date and Location */}
          <p className="mt-4 text-[3.5vw] lg:text-[2vw] md:text-[2.5vw] sm:text-[4vw] font-bold">
            11th – 13th February, 2025
            <br />
            Eko Hotel, Lagos State, Nigeria
          </p>

          {/* Year */}
          <img
            src={year}
            alt="Year"
            className="mt-8 w-[50vw] max-w-[300px] md:max-w-[400px] lg:max-w-[565.98px]"
          />

          {/* Theme */}
          <p className="mt-8 text-[4vw] lg:text-[2.5vw] md:text-[3vw] sm:text-[4.5vw] italic font-raleway">
            <span className="font-semibold text-[#FFC707]">Theme:</span>{" "}
            <span className="font-bold text-white">RENEW NIGERIA&nbsp;</span>
            <span className="font-bold">Unlocking Nigeria's Energy Future</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
