import React from "react";
import why from "../../Assets/Image/whyp.jpg";
import why2 from "../../Assets/Image/whyspon.jpg";
import why3 from "../../Assets/Image/whs.jpg";

import vector from "../../Assets/Vector.png";

const WhyExhibit = () => {
  const sections = [
    {
      title: "WHY PARTICIPATE?",
      image: why,
      points: [
        {
          normal:
            "Spark new deals: Engage with 93% of businesses who recognize Nigeria Energy as an important platform for their business.",
        },
        {
          normal:
            "Connect and collaborate: Network face-to-face with key decision-makers and potential partners to unlock business opportunities.",
        },
      ],
      buttonText: "Participate Enquiry",
    },
    {
      title: "WHY EXHIBIT?",
      image: why2,
      points: [
        {
          normal:
            "Spark new deals: Engage with 93% of businesses who recognize Nigeria Energy as an important platform for their business.",
        },
        {
          normal:
            "Connect and collaborate: Network face-to-face with key decision-makers and potential partners to unlock business opportunities.",
        },
      ],
      buttonText: "Choose Us",
    },
    {
      title: "WHY SPONSOR?",
      image: why3,
      points: [
        {
          normal:
            "Spark new deals: Get premium brand exposure positioning you as a thought leader.",
        },
        {
          normal:
            "Connect and collaborate: Maximize your brand's impact with pre-show promotions, eye-catching outdoor branding, and exclusive venue and conference sponsorships.",
        },
      ],
      buttonText: "Sponsorship Enquiry",
    },
  ];

  return (
    <section className="w-full py-8 bg-white">
      <div className="mx-auto max-w-[1440px] px-5">
        {/* Header Section */}
        <div className="ml-7 md:mx-auto lg:mx-auto w-[50%] md:w-[93%] lg:w-[1250px] mb-[14px] flex gap-4">
          <img src={vector} alt="Vector" />
          <h1 className="font-sanss text-[16px] font-[600] text-[#005911]">
            RENEW NIGERIA
          </h1>
        </div>
        <div className="ml-7 md:mx-auto lg:mx-auto w-[50%] md:w-[93%] lg:w-[1250px] mb-[24px] md:mb-[54px] lg:mb-[54px]">
          <h1 className="font-sanss font-[700] text-[55px]">Why Us</h1>
        </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-6 px-4 mx-auto sm:px-6 lg:w-[1250px] md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full items-center px-4 py-4 bg-[#EBEBEB] rounded-md shadow-lg"
            >
              {/* Section Title */}
              <h3 className="mb-4 text-lg font-semibold text-center text-[#005911] md:text-xl lg:text-2xl">
                {section.title}
              </h3>
              {/* Image */}
              <img
                src={section.image}
                alt={section.title}
                className="object-cover w-full h-48 mx-auto mb-4 rounded-lg sm:h-56 md:h-64"
              />
              {/* Points */}
              <ul className="flex-grow mb-6 space-y-4 text-sm font-normal text-[#555555] sm:text-base lg:text-[16px]">
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-[16px] font-normal text-black">
                      •
                    </span>
                    <span className="font-sans text-[16px] font-normal">
                      {point.normal}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Button */}
              <button className="px-6 py-2 w-[80%] text-white bg-[#005911] transition hover:bg-green-200">
                {section.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyExhibit;
