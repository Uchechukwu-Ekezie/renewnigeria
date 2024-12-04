import React from "react";
import backgroundImage from "../../Assets/Image/pricingpanel.jpg"; // Update with the correct path

const PricingPlans = () => {
  return (
    <section
      className="relative px-6 py-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#60AC45] to-[#005911]"></div>


      <div className="container relative max-w-screen-lg mx-auto text-center">
        {/* Heading Section */}
        <p className="mb-4 font-medium text-green-200 uppercase">Join Us</p>
        <h1 className="mx-auto mb-12 text-2xl font-bold text-white md:text-4xl">
          Join Us At The 2025 Renew Nigeria
        </h1>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 lg:w-[80%] mx-auto">
          {/* Free Plan */}
          <div className="bg-[#005911] text-white rounded-lg shadow-lg p-8 flex flex-col justify-between w-full md:w-[370px] md:h-[520px] lg:w-[390px] lg:h-[470px] mx-auto">
            <div className="w-[100%]">
              <h2 className="mb-4 font-sans text-xl font-normal md:text-2xl">Free</h2>
              <p className="mb-4 text-4xl font-bold md:text-5xl font-poppins">$0</p>
              <p className="text-base md:text-lg font-sans text-[15.5px] mb-6">
                Best for Small Teams or Individuals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center w-full font-sans text-[15.5px] gap-2">
                  <span>✔</span> <p>150+ local and international exhibitors</p>
                </li>
                <li className="flex items-center font-sans text-[15.5px] gap-2">
                  <span>✔</span> Technical Seminar
                </li>
                <li className="flex items-center font-sans text-[15.5px] gap-2">
                  <span>✔</span> Entrepreneurs forum
                </li>
              </ul>
            </div>
            <button className="bg-[#FFFFFF] text-[#009379] font-medium py-3 mt-6 rounded-md hover:bg-green-600 hover:text-white transition">
              Get Started →
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#FFFFFF] text-gray-900 rounded-lg shadow-lg p-8 flex flex-col justify-between w-full md:w-[370px] md:h-[520px] lg:w-[390px] lg:h-[470px] mx-auto">
            <div className="w[100%]">
              <h2 className="mb-4 text-xl font-bold md:text-2xl">Enterprise</h2>
              <p className="mb-4 text-4xl font-extrabold md:text-5xl">$500</p>
              <p className="mb-6 text-base md:text-lg">
                Ultimate for Enterprise Solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center font-sans text-[15.5px] gap-2">
                  <span className=" text-green-600">✔</span> All benefits of visitor pass access
                </li>
                <li className="flex items-center font-sans text-[15.5px] gap-1">
                  <span>✔ </span>  Keynote addresses and roundtable sessions
                </li>
                <li className="flex items-center font-sans text-15.5px] gap-2">
                  <span>✔</span> Interactive deep-dive sessions
                </li>
                <li className="flex items-center font-sans text-[15.5px] gap-2">
                  <span>✔</span> Power lunches and breaks
                </li>
                <li className="flex items-center font-sans text-[15.5px] gap-2">
                  <span>✔</span> Technical and social seminars
                </li>
              </ul>
            </div>
            <button className="bg-[#E5F4F2] text-[#005911] font-medium py-3 mt-6 rounded-md hover:bg-green-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
