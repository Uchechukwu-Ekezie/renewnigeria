import React from "react";
import { FaDownload } from "react-icons/fa";
import image from "../../Assets/Image/features/image 19.png";
import reportPDF from "../../Assets/report.pdf";

const ReportSection = () => {
  // Data Array for Reports
  const reports = [
    {
      id: 1,
      title: "Why Nigeria?",
      description:
        "Discover the opportunities and challenges in Nigeria's energy sector with a focus on investment potential and government initiatives in this report.",
      repo: "This report covers:",
      points: [
        "Nigeria's ranking in ease of doing business",
        "Taxation policies for companies in Nigeria",
        "Government initiatives to improve energy access and sustainability",
      ],
      image: image,
    },
    {
      id: 2,
      title: "Why Nigeria?",
      description:
        "Discover the opportunities and challenges in Nigeria's energy sector with a focus on investment potential and government initiatives in this report.",
      repo: "This report covers:",
      points: [
        "Nigeria's ranking in ease of doing business",
        "Taxation policies for companies in Nigeria",
        "Government initiatives to improve energy access and sustainability",
      ],
      image: image,
    },
    {
      id: 3,
      title: "Why Nigeria?",
      description:
        "Discover the opportunities and challenges in Nigeria's energy sector with a focus on investment potential and government initiatives in this report.",
      repo: "This report covers:",
      points: [
        "Nigeria's ranking in ease of doing business",
        "Taxation policies for companies in Nigeria",
        "Government initiatives to improve energy access and sustainability",
      ],
      image: image,
    },
    {
      id: 4,
      title: "Why Nigeria?",
      description:
        "Discover the opportunities and challenges in Nigeria's energy sector with a focus on investment potential and government initiatives in this report.",
      repo: "This report covers:",
      points: [
        "Nigeria's ranking in ease of doing business",
        "Taxation policies for companies in Nigeria",
        "Government initiatives to improve energy access and sustainability",
      ],
      image: image,
    },
    {
      id: 5,
      title: "Why Nigeria?",
      description:
        "Discover the opportunities and challenges in Nigeria's energy sector with a focus on investment potential and government initiatives in this report.",
      repo: "This report covers:",
      points: [
        "Nigeria's ranking in ease of doing business",
        "Taxation policies for companies in Nigeria",
        "Government initiatives to improve energy access and sustainability",
      ],
      image: image,
    },
    {
      id: 6,
      title: "Why Nigeria?",
      description:
        "Discover the opportunities and challenges in Nigeria's energy sector with a focus on investment potential and government initiatives in this report.",
      repo: "This report covers:",
      points: [
        "Nigeria's ranking in ease of doing business",
        "Taxation policies for companies in Nigeria",
        "Government initiatives to improve energy access and sustainability",
      ],
      image: image,
    },
  ];

  // Download Function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = reportPDF; // Path to the PDF
    link.download = "report.pdf"; // The file name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full">
      {/* Main Container */}
      {reports.map((report, index) => (
        <section
          key={report.id}
          className={`py-14 ${
            index % 2 === 0 ? "bg-white" : "bg-[#E2E2E8]"
          }`}
        >
          {/* Wrapper with max-width and centered */}
          <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
            <div className="flex flex-col items-center gap-8 mx-auto lg:flex-row">
              {/* Report Image */}
              <div className="lg:w-[359.99px] lg-[331.86px]">
                <img
                  src={report.image}
                  alt="Report Cover"
                  className="object-cover w-full lg:w-[318.72px] h-[350px]"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 leading-[28px]">
                <h2 className="mb-[23.4px] text-[25px] font-bold text-[#066C16]">
                  {report.title}
                </h2>
                <p className="text-[18px] text-[#313131] lg:w-[674.68px]">
                  {report.description}
                </p>

                {/* List of Points */}
                <div className="font-sans font-[400] text-[18px] text-[#313131] mt-4 mb-[32px]">
                  <span className="mb-[16px]">{report.repo}</span>
                  <ul className="text-[#313131] list-disc list-inside leading-[28px] pl-5 text-[18px] mt-3 space-y-2">
                    {report.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Download Button */}
                <button
                  className="flex items-center px-[20px] py-[17px] mt-5 space-x-2 text-white bg-[#066C16] rounded-md hover:bg-green-700 text-[16px] font-[700] font-sanss"
                  onClick={handleDownload}
                >
                  <FaDownload />
                  <span>Download Your Free Copy</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ReportSection;
