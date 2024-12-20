import React, { useState } from "react";
import background from "../../Assets/Image/bg0ne.png";
import legi from "../../Assets/Image/house of rep.png";
import nigeria from "../../Assets/Image/renweew.png";
import speaker1 from "../../Assets/Image/men/taju.png";
import speaker2 from "../../Assets/Image/men/afam.jpeg";
import speaker3 from "../../Assets/Image/men/sonwo.jpeg";
import ring from "../../Assets/Image/men/ring.png";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <div>
        <div
          className="relative w-full min-h-screen font-sans bg-center bg-no-repeat bg-cover 2xl:min-h-[1000px]"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center 20%",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row h-full text-center text-white justify-between items-center lg:items-start lg:text-left 2xl:pt-[50px]  max-w-screen-2xl mx-auto px-4">
            {/* Left Section: Logo */}
            <div className="flex justify-center w-full mb-16 md:mb-11 lg:justify-start lg:w-[20%] lg:mb-0">
              <img
                src={legi}
                alt="Logo"
                className="lg:h-[100%] w-[90px] lg:w-[100%] md:w-[200px] md:pt-10 mx-auto mt-[10px] lg:mt-0"
              />
            </div>

            {/* Center Section: Main Content */}
            <div className="flex flex-col items-center w-full lg:items-start lg:w-[60%] ">
              {/* Title */}
              <div className="flex justify-center w-full md:mt-4 mt-[-50px] lg:mt-8 mb-3 lg:justify-start lg:mb-0">
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
              <p className="mb-[-20px] mx-auto font-bold text-center  lg:mt-[5px] md:text-[20px] md:mt-[10px]">
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
                <button
                  className="px-6 py-3 lg:py-[20px] lg:px-[31px] font-bold font-sanss text-white rounded-md bg-[#066C18] hover:bg-green-700 text-[16px]"
                  onClick={openModal}
                >
                  Register Now
                </button>

                {isModalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[50%] p-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold">
                          Register for the Event
                        </h2>
                        <button
                          onClick={closeModal}
                          className="text-black hover:text-red-500"
                        >
                          &times;
                        </button>
                      </div>
                      <form className="mt-4">
                        <div className="mb-4">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-gray-700"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                )}

                <button className="px-6 py-3 lg:py-[20px] lg:px-[31px] font-[500] text-black text-[16px] bg-white rounded-md font-sanss hover:bg-gray-100">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Section: Speakers */}
            <div className="flex justify-center w-full pb-9 lg:justify-start lg:w-[20%] lg:mt-10 md:w-[80%] md:pb-36">
              <div className="flex pt-8 sm:flex-row sm:space-x-6 lg:flex-col lg:space-x-6 lg:space-y-5 md:flex-row md:space-x-6 md:space-y-0">
                {/* Speaker 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <img
                      src={ring}
                      alt="Ring"
                      className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] 2xl:w-[160px] 2xl:h-[160px] lg:w-[150px] lg:h-[140px] rounded-full mx-auto"
                    />
                    <img
                      src={speaker1}
                      alt="Speaker 1"
                      className="w-[77px] h-[77px] md:w-[100px] md:h-[100px] lg:w-[121.29px] lg:h-[121.29px] 2xl:w-[141.29px] 2xl:h-[141.29px] rounded-full absolute lg:top-[9px] md:top-[10px] top-[6px] left-[-2px] right-0 bottom-0 mx-auto"
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
                      className="w-[77px] h-[77px] md:w-[100px] md:h-[100px] lg:w-[121.29px] lg:h-[121.29px] 2xl:w-[141.29px] 2xl:h-[141.29px] rounded-full absolute lg:top-[9px] md:top-[11px] top-[6px] left-[-2px] right-0 bottom-0 mx-auto"
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
                      className="w-[77px] h-[77px] md:w-[100px] md:h-[100px] lg:w-[121.29px] lg:h-[121.29px] 2xl:w-[141.29px] 2xl:h-[141.29px] rounded-full absolute lg:top-[9px] md:top-[9px] top-[6px] left-[-2px] right-0 bottom-0 mx-auto"
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
