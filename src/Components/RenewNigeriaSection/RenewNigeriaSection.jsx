import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import slide1 from "../../Assets/Image/visit/renewnigeria/Slide-1.png";
import slide2 from "../../Assets/Image/visit/renewnigeria/Slide-2.png";
import slide3 from "../../Assets/Image/visit/renewnigeria/Slide-3.png";
import slide4 from "../../Assets/Image/visit/renewnigeria/Slide-4.png";

const RenewNigeriaSection = () => {
  return (
    <section className="bg-white px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      {/* Text Content */}
      <div className="max-w-[1175px] mx-auto text-start mb-8 sm:mb-12">
        <h2 className="text-center text-[30px] sm:text-[40px] lg:text-[50px] font-sanss font-bold text-[#313131] mb-4">
          Why Renew Nigeria?
        </h2>
        <hr className="border-b mx-auto border-[#066C16] w-[50px] mb-6 sm:mb-10" />
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          In line with the legislative agenda of the 10th House of
          Representatives, the Renewable Energy Committee led by its inaugural
          Chairman, Hon. Victor Afam Ogene and the Committee Consultants,
          Messrs Green Clean Innovation Hub Limited, initiated this
          groundbreaking 1st Annual Legislative Summit & Expo on Renewable
          Energy with the theme{" "}
          <strong className="text-[#313131] font-extrabold text-base sm:text-lg">
            “RENEW NIGERIA: Unlocking Nigeria’s Energy Future”.
          </strong>
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
          The summit seeks to bring together key stakeholders from government,
          private sector, academia, communities, and civil society to
          collaboratively develop and refine policies that will drive the
          adoption and expansion of renewable energy in Nigeria. By bringing
          together thought leaders, investors, policymakers, and business
          executives, the event will create a dynamic platform for dialogue and
          collaboration.
        </p>

        <p className="mt-4 text-[#313131] font-sanss font-normal text-base sm:text-lg leading-relaxed">
          <strong className="font-bold">
            Experts, policymakers, investors, and other players in the energy
            sector{" "}
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
          <button className="mr-2 sm:mr-3 hover:text-gray-700 focus:outline-none">
            <FaAngleLeft className="text-[#313131] w-[24px] sm:w-[30px] h-[40px] sm:h-[48px]" />
          </button>

          {/* Image Carousel */}
          <div className="flex overflow-x-auto gap-4 sm:gap-4 justify-center w-full scrollbar-hide">
            <img
              src={slide1}
              alt="Placeholder 1"
              className="w-[200px] sm:w-[242px] h-[120px] sm:h-[161.18px] rounded-lg object-cover flex-shrink-0"
            />
            <img
              src={slide2}
              alt="Placeholder 2"
              className="w-[200px] sm:w-[242px] h-[120px] sm:h-[161.18px] rounded-lg object-cover flex-shrink-0"
            />
            <img
              src={slide3}
              alt="Placeholder 3"
              className="w-[200px] sm:w-[242px] h-[120px] sm:h-[161.18px] rounded-lg object-cover flex-shrink-0"
            />
            <img
              src={slide4}
              alt="Placeholder 4"
              className="w-[200px] sm:w-[242px] h-[120px] sm:h-[161.18px] rounded-lg object-cover flex-shrink-0"
            />
          </div>

          {/* Right Arrow */}
          <button className="ml-2 sm:ml-3 hover:text-gray-700 focus:outline-none">
            <FaAngleRight className="text-[#313131] w-[24px] sm:w-[30px] h-[40px] sm:h-[48px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RenewNigeriaSection;
