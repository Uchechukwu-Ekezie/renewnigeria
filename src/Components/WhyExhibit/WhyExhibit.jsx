import React from "react";
import why from "../../Assets/Image/whypart.jpg";
import why2 from "../../Assets/Image/whyexhi.jpg";
import why3 from "../../Assets/Image/whyspon.jpg";

const WhyExhibit = () => {
  const sections = [

    {
      title: "Why exhibit?",
      image: why,
      points: [
        {
          bold: "Spark new deals:",
          normal:
            " Engage with 93% of businesses who recognize Nigeria Energy as an important platform for their business.",
        },
        {
          bold: "Connect and collaborate:",
          normal:
            " Network face-to-face with key decision-makers and potential partners to unlock business opportunities.",
        },
      ],
      buttonText: "Stand Enquiry",
    },


    {
      title: "Why exhibit?",
      image: why2,
      points: [
        {
          
          normal:
            " Engage with 93% of businesses who recognize Nigeria Energy as an important platform for their business.",
        },
        {
         
          normal:
            " Network face-to-face with key decision-makers and potential partners to unlock business opportunities.",
        },
      ],
      buttonText: "Stand Enquiry",
    },
    {
      title: "Why sponsor?",
      image: why3,
      points: [
        {
          
          normal:
            " Get premium brand exposure positioning you as a thought leader.",
        },
        {
          
          normal:
            " Maximize your brand's impact with pre-show promotions, eye-catching outdoor branding, and exclusive venue and conference sponsorships.",
        },
      ],
      buttonText: "Sponsorship Enquiry",
    },
  ];

  return (
    <section className="w-full py-8 bg-white sm:py-12">
      <div className="grid grid-cols-1 gap-6 px-4 mx-auto sm:px-6 lg:w-[90%] lg:grid-cols-3">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center px-2 py-2 overflow-hidden bg-[#EBEBEB] rounded-md shadow-lg"
          >
            {/* Section Title */}
            <h3 className="mb-4 text-lg font-bold text-center text-yellow-600 sm:text-xl lg:text-2xl">
              {section.title}
            </h3>
            {/* Image */}
            <img
              src={section.image}
              alt={section.title}
              className="object-cover w-full h-48 mb-4 rounded-lg sm:h-56 md:h-64"
            />
            {/* Points */}
            <ul className="mb-6 space-y-4 text-sm font-semibold text-gray-700 sm:text-base lg:text-lg">
              {section.points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-[16px] font-normal text-black">•</span>
                  <span className="font-sans text-[16px] font-normal">
                    <b>{point.bold}</b>
                    {point.normal}
                  </span>
                </li>
              ))}
            </ul>
            {/* Button */}
            <button className="px-6 py-2 text-white transition bg-red-500 rounded-lg hover:bg-red-600">
              {section.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyExhibit;
