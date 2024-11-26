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
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(77, 111, 65, 0.8) 80%, rgba(77, 95, 65, 1) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[90%] h-full flex flex-col justify-center items-center">
        {/* Solar Image */}
        <img
          src={solar}
          alt="Solar Panel"
          className="absolute top-[1%] left-[-5%] w-[15vw] lg:w-[26.14vw] lg:h-[17.19vw]"
        />

        {/* Nigeria Image */}
        <img
          src={nigeria}
          alt="Renew Nigeria"
          className="absolute top-[17%] left-[15%] w-[60vw] md:w-[50vw] lg:w-[55.63vw]"
        />

        {/* Gold Image */}
        <img
          src={gold}
          alt="Gold Line"
          className="absolute hidden top-[33.2%] lg:top-[33%] left-[15.9%] w-[80%] lg:w-[59%]"
        />

        {/* GoldOne Image */}
        <img
          src={goldOne}
          alt="Flash"
          className="absolute hidden top-[30.1%] lg:top-[27.9%] left-[17.7%] lg:w-[5.10%]"
        />

        {/* Legislative Image */}
        <img
          src={legi}
          alt="Legislative Icon"
          className="absolute top-[20%] right-[10%] w-[15vw]"
        />

        {/* Staff Image */}
        <img
          src={staff}
          alt="Staff"
          className="absolute bottom-[23%] left-[-8%] w-[24vw]"
        />

        {/* Main Text */}
        <div className="text-left text-white">
          <p className="text-[4vw] lg:mt-[50%] lg:ml-[-1%] font-bold leading-tight md:text-[3vw]">
            FIRST NATIONAL LEGISLATIVE SUMMIT & EXPO ON <br /> RENEWABLE ENERGY
          </p>

          {/* Date and Location */}
          <p className="mt-4 text-[3vw] font-semibold md:text-[2vw]">
            11th – 13th February, 2025
            <br />
            Eko Hotel, Lagos State, Nigeria
          </p>

          {/* Year Image */}
          <img
            src={year}
            alt="2025"
            className="mx-auto mt-4 w-[40vw] lg:w-[30vw]"
          />

          {/* Theme */}
          <p className="mt-6 text-[2vw] md:text-[1.5vw] font-raleway">
            <span className="font-semibold text-[#FFC707]">Theme:</span>
            <br />
            <span className="font-bold text-white">
              RENEW NIGERIA &nbsp; Unlocking Nigeria's Energy Future
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
