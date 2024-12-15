import React from "react";
import backgroundImage from "../../Assets/Image/conferencehero.png"; // Update path as needed

const CleanEnergyConference = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center px-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-4xl px-4 md:px-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Powering Nigeria’s Clean Energy Transition
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
          A defining conference enabling sustainable, affordable, and reliable
          energy access within Nigeria
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-green-700 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-gray-200 transition">
            Book Your Delegate Pass
          </button>
          <button className="bg-green-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-green-700 transition">
            Sponsorship Enquiries
          </button>
        </div>
      </div>
    </div>
  );
};

export default CleanEnergyConference;
