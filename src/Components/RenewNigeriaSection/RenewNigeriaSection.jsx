import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const RenewNigeriaSection = () => {
  return (
    <section className="bg-white px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      {/* Text Content */}
      <div className="max-w-[1175px] font-nunito mx-auto text-start mb-8 sm:mb-12">
        <h2 className="text-center text-[50px] font-sanss font-bold text-[#313131]  mb-4">
          Why Renew Nigeria?
        </h2>
        <hr className="border-b mx-auto border-[#066C16] w-[50px] mb-10" />
        <p className="text-gray-600 leading-relaxed">
          In line with the legislative agenda of the 10th House of
          Representatives, the Renewable Energy Committee led by its inaugural
          Chairman, Hon. Victor Afam Ogene and the Committee Consultants,
          Messrs Green Clean Innovation Hub Limited, initiated this
          groundbreaking 1st Annual Legislative Summit & Expo on Renewable
          Energy with the theme{" "}
          <strong className="text-[#313131] font-extrabold text-lg">
            “RENEW NIGERIA: Unlocking Nigeria’s Energy Future”.
          </strong>
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          The summit seeks to bring together key stakeholders from government,
          private sector, academia, communities, and civil society to
          collaboratively develop and refine policies that will drive the
          adoption and expansion of renewable energy in Nigeria. By bringing
          together thought leaders, investors, policymakers, and business
          executives, the event will create a dynamic platform for dialogue and
          collaboration.
        </p>
       
        <p className=" mt-4 text-[#313131] font-sanss font-normal text-lg leading-relaxed">
        <strong className=" font-bold  ">
          Experts, policymakers, investors, and other players in the energy
          sector {" "}
        </strong>
          will have the opportunity to ventilate their policy concerns, ideas,
          and recommendations. They will also have the opportunity to explore a
          wide array of investment prospects, exchange valuable insights, and
          develop mutually beneficial relationships that can lead to long-term
          economic prosperity.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative max-w-[1175px] mx-auto">
        <div className="flex items-center justify-between">
          {/* Left Arrow */}
          <button className="mr-3 hover:text-gray-700 focus:outline-none ">
            <span ><FaAngleLeft className="text-[#313131] w-[30.38px] h-[48.8px]"/></span>
          </button>

          {/* Image Carousel */}
          <div className="flex overflow-x-auto gap-4 justify-center w-full">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 1"
              className="w-[242px] sm:w-64 h-[161.18px] rounded-lg object-cover"
            />
            <img
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 2"
              className="w-[242px] sm:w-64 h-[161.18px] rounded-lg object-cover"
            />
            <img
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 3"
              className="w-[242px] sm:w-64 h-[161.18px] rounded-lg object-cover"
            />
            <img
              src="https://via.placeholder.com/300x200"
              alt="Placeholder 4"
              className="w-[242px] sm:w-64 h-[161.18px] rounded-lg object-cover"
            />
          </div>

          {/* Right Arrow */}
          <button className=" ml-3 text-gray-500 hover:text-gray-700 focus:outline-none">
            <span ><FaAngleRight className="text-[#313131] w-[30.38px] h-[48.8px]" /></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RenewNigeriaSection;
