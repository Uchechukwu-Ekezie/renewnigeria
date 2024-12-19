import React from "react";
import backgroundImage from "../../Assets/Image/conferencehero.png"; // Update path as needed

const CleanEnergyConference = () => {
  return (
    <div
      className="relative flex items-center justify-center w-full h-screen px-5 text-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-700 bg-opacity-40"></div>

      {/* Content */}
      <div >
        <div className=" max-w-[1280px] relative z-10 text-[#FFFFFF] px-4 md:px-8">
          {/* Title */}
          <div className="w-full ">
            <h1 className=" lg:text-[40px] text-[30px]  font-sanss font-medium leading-relaxed  lg:leading-[50px] mb-4">
              Powering Nigeria’s Clean Energy Transition
            </h1>
          </div>

          {/* Subtitle */}
          <div className="lg:w-[75%] w-[100%] lg:mx-auto">
            <p className="lg:text-[23px] text-[15px]  font-sanss  md:text-[25px] leading-relaxed lg:leading-[33px] mb-6">
              A defining conference enabling sustainable, affordable, and
              reliable energy access within Nigeria
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="px-4 py-2 font-bold text-white transition bg-transparent border sm:py-3 sm:px-6 hover:bg-gray-200">
              Book Your Delegate Pass
            </button>
            <button className="px-4 py-2 font-bold text-white transition bg-transparent border sm:py-3 sm:px-6 hover:bg-green-700">
              Sponsorship Enquiries
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleanEnergyConference;
