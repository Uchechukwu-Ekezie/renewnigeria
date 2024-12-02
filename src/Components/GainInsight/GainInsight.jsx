import React from "react";
import acro from "../../Assets/acrobat.png";
import report from "../../Assets/Image/report.pdf"
import { IoMdDownload } from "react-icons/io";

const reports = [
  {
    title: "Powering the Future: Your Guide to Solar Energy Solutions",
    image: acro,
    buttonText: "Download the report",
    fileUrl: report, // Replace with actual file path
  },
  {
    title: "The rise of solar home system in Nigeria",
    image: acro,
    buttonText: "Download the report",
    fileUrl: report, // Replace with actual file path
  },
  {
    title: "The Renewable Energy Roadmap Report",
    image: acro,
    buttonText:  "Download the report",
    fileUrl:report, // Replace with actual file path
  },
  {
    title: "Nigeria Energy Outlook Report",
    image: acro,
    buttonText: "Download the report",
    fileUrl: report, // Replace with actual file path
  },
];

const GainInsight = () => {
  return (
    <section className="bg-[#F5F5F5] py-12 w-full">
      <div className="max-w-screen-xl px-4 mx-auto mb-10 text-center">
        {/* Section Header */}
        <h2 className="uppercase font-sans mb-6 text-[40px] font-semibold sm:text-[40px] md:text-[40px]">
         Gain Insight Into The Nigeria Renewable Energy Sector
        </h2>
        <div className="w-12 h-[1px] bg-[#FFCB05] mx-auto my-4"></div>
        <p className="mb-8 font-sans text-[#005911] text-[20px] sm:text-xl">
          Nigerians Renewable Energy Report
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
                className="object-cover w-full mb-4 rounded-md max-h-[200px]"
              />
              {/* Report Title */}
              <h3 className="font-sans mb-4 text-[20px] text-[#0D0D0D] font-extralight text-center">
                {report.title}
                
              </h3>
              {/* Download Button */}
              <IoMdDownload />

              <a
              
                href={report.fileUrl}
                download
                className="font-sans mt-auto px-6 py-2 text-[16px] w-[219px] h-[50px] font-bold text-white transition bg-[#005911] rounded-md text-center"
              >
                {report.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GainInsight;
