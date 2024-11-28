import React from "react";
import boom from "../../Assets/Image/lithum boom.webp";
import solar from "../../Assets/Image/the-rise-of-solar-home-systems.webp";
import renew from "../../Assets/Image/renewable.webp";
import out from "../../Assets/Image/outlook.webp";

const reports = [
  {
    title: "Nigeria's lithium boom: Powering the battery industry",
    image: boom,
    buttonText: "Download the report",
  },
  {
    title: "The rise of solar home system in West Africa",
    image: solar,
    buttonText: "Download the report",
  },
  {
    title: "The Renewable Energy roadmap report",
    image: renew,
    buttonText: "Download the report",
  },
  {
    title: "West Africa's energy outlook report",
    image: out,
    buttonText: "Download the report",
  },
];

const GainInsight = () => {
  return (
    <section className="bg-[#F5F5F5] py-12 w-full">
      <div className="max-w-screen-xl px-4 mx-auto text-center">
        {/* Section Header */}
        <h2 className="font-sans mb-6 text-[40px] font-semibold sm:text-[40px] md:text-[40px]">
          Gain insights into the Nigeria Renewable Energy Sector
        </h2>
        <div className="w-12 h-[1px] bg-[#FFCB05] mx-auto lg:mx-auto my-4"></div> 
        <p className="mb-8 font-sans text-[#005911] text-[20px] sm:text-xl">
          Regional industry reports brought to you by the editorial team behind Energy & Utilities
        </p>
        {/* Reports Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {reports.map((report, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#FFFFFF] w-full max-w-[290px] h-[415px] mx-auto items-center p-4 text-white transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              {/* Report Image */}
              <img
                src={report.image}
                alt={report.title}
                className="object-cover w-full mb-4 rounded-md max-h-[200px] sm:max-h-[250px] md:max-h-[300px]"
              />
              {/* Report Title */}
              <h3 className="font-sans mb-4 text-[20px] text-[#0D0D0D] font-extralight text-center sm:text-[20px]">
                {report.title}
              </h3>
              {/* Download Button */}
              <button className="font-sans px-6 py-2 text-[16px] w-[219px] h-[50px] sm:text-[16px] font-bold text-white transition bg-[#005911] rounded-md">
                {report.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GainInsight;
