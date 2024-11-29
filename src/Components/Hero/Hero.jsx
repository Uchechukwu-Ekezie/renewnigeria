import React from "react";
import background from "../../Assets/Image/bg0ne.png";
import legi from "../../Assets/Image/house of rep.png";
import nigeria from "../../Assets/Image/renweew.png";
import speaker1 from "../../Assets/Image/men/taju.jpeg";
import speaker2 from "../../Assets/Image/men/afam.jpeg";
import speaker3 from "../../Assets/Image/men/sonwo.jpeg";
import ring from "../../Assets/Image/men/ring.png";

function Hero() {
  return (
    <div className="w-full">
      <div>
        <div
          className="relative w-full h-screen lg:h-[90vh] xl:h-[85vh] 2xl:h-[80vh] font-sans bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center 20%",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 mx-auto text-center text-white lg:flex-row lg:items-start lg:text-left max-w-screen-2xl">
            {/* Left Section: Logo */}
            <div className="flex justify-center w-full mb-6 lg:justify-start lg:w-[20%] lg:mb-0">
              <img
                src={legi}
                alt="Logo"
                className="lg:h-[240px] w-[90px] lg:w-[240px] md:w-[200px] md:pt-10 mx-auto mt-[10px] lg:mt-0"
              />
            </div>

            {/* Center Section: Main Content */}
            <div className="flex flex-col items-center w-full lg:items-start lg:w-[60%] mt-[40px] md:mt-[40px]">
              {/* Title */}
              <div className="flex justify-center w-full mt-[-50px] lg:mt-8 mb-3 lg:justify-start lg:mb-0">
                <img
                  src={nigeria}
                  alt="Logo"
                  className="h-[111px] w-[371px] 2xl:w-[871px] md:w-[471px] md:h-[150px] 2xl:h-[310px] lg:h-[210px] lg:w-[700px] mx-auto"
                />
              </div>

              {/* Subtitle */}
              <p className="lg:text-[32px] md:text-[20px] font-[700] font-sanss lg:leading-[41.66px] text-center md:mt-[30px]">
                FIRST NATIONAL LEGISLATIVE SUMMIT & EXPO ON RENEWABLE ENERGY
              </p>

              {/* Date & Venue */}
              <p className="mb-2 mt-2 lg:mt-[10px] md:text-[20px] font-sanss font-[700] lg:text-[32px] text-center md:mt-[20px]">
                11th - 13th February, 2025 | Eko Hotel, Lagos State, Nigeria
              </p>

              {/* Theme */}
              <p className="mb-[-20px] mx-auto font-bold text-center lg:mt-[5px] md:text-[20px] md:mt-[10px]">
                <span className="text-[#FFC707] font-segoe-script lg:text-[48px]">
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
            <div className="flex justify-center w-full pb-9 lg:justify-start lg:w-[20%] lg:mt-10 mt-10 md:w-[80%] md:pb-36">
              <div className="flex sm:flex-row sm:space-x-6 lg:flex-col lg:space-x-6 lg:space-y-5 md:flex-row md:space-x-6 md:space-y-0">
                {/* Speaker 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <img
                      src={ring}
                      alt="Ring"
                      className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] 2xl:w-[160px] 2xl:h-[160px] lg:w-[150px] lg:h-[140px] rounded-full mx-auto relative z-10"
                    />
                    <img
                      src={speaker1}
                      alt="Speaker 1"
                      className="absolute inset-0 w-[80%] h-[80%] rounded-full object-cover mx-auto top-[10%] z-20"
                    />
                  </div>
                  <p className="mt-4 text-sm font-[800] leading-[19.53px] font-sans md:text-[14px] lg:text-[15px]">
                    Rt. Hon. Abbas Tajudeen, <br />
                    PhD, GCON
                  </p>
                  <p className="text-[12px] font-sans md:text-[13px] lg:text-[12px]">
                    Speaker, House of Representatives
                  </p>
                </div>

                {/* Speaker 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <img
                      src={ring}
                      alt="Ring"
                      className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] 2xl:w-[160px] 2xl:h-[160px] lg:w-[150px] lg:h-[140px] rounded-full mx-auto"
                    />
                    <img
                      src={speaker2}
                      alt="Speaker 2"
                      className="absolute w-[80%] h-[80%] rounded-full object-cover mx-auto top-[10%]"
                    />
                  </div>
                  <p className="mt-4 text-sm font-[800] leading-[19.53px] font-sans md:text-[14px] lg:text-[15px]">
                    Hon. Victor Afam Ogene
                  </p>
                  <p className="text-[12px] font-sans md:text-[13px] lg:text-[12px]">
                    Chairman, House Committee on <br /> Renewable Energy
                  </p>
                </div>

                {/* Speaker 3 */}
                <div className="flex flex-col items-center text-center sm:mt-[-10px]">
                  <div className="relative">
                    <img
                      src={ring}
                      alt="Ring"
                      className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] 2xl:w-[160px] 2xl:h-[160px] lg:w-[150px] lg:h-[140px] rounded-full mx-auto"
                    />
                    <img
                      src={speaker3}
                      alt="Speaker 3"
                      className="absolute w-[80%] h-[80%] rounded-full object-cover mx-auto top-[10%]"
                    />
                  </div>
                  <p className="mt-4 text-sm font-[800] leading-[19.53px] font-sans md:text-[14px] lg:text-[15px]">
                    Mr. Babajide Sanwo-Olu
                  </p>
                  <p className="text-[12px] font-sans md:text-[13px] lg:text-[12px]">
                    Executive Governor, Lagos State
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
