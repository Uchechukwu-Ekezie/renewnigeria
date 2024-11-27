import React from "react";
import why from "../../Assets/Image/whypart.jpg";
import why2 from "../../Assets/Image/whyexhi.jpg";
import why3 from "../../Assets/Image/whyspon.jpg";

import vector from "../../Assets/Vector.png";
import heading from "../../Assets/Heading.png";
import headingtwo from "../../Assets/Heading2.png";
const WhyExhibit = () => {
  const sections = [

    {
      title: "Why PARTIPATE?",
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
      buttonText: "Partipate Enquiry",
    },


    {
      title: "WHY EXHIBIT?",
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
      buttonText: "Choose Us",
    },
    {
      title: "Why SPONSOR?",
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
        <div className=" mx-auto lg:w-[86%] mb-[14px] flex gap-4">
              <img src={vector} alt="" srcset="" />
              <img src={heading} alt="" srcset="" />
            </div>
            <div className=" mx-auto lg:w-[86%] mb-[54px]  " >
            <img className="" src={headingtwo} alt="" srcset="" />
            </div>
           
      <div className="grid grid-cols-1 gap-6 px-4 mx-auto sm:px-6 lg:w-[90%] lg:grid-cols-3">
        
        {sections.map((section, index) => (
          <div>
          
             <div
            key={index}
            className="flex flex-col items-center px-2 py-2 overflow-hidden bg-[#EBEBEB] rounded-md shadow-lg"
          >
            {/* Section Title */}
            <h3 className="mb-4 text-lg font-bold text-center text-[#005911] sm:text-xl lg:text-2xl">
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
            <button className="px-6 py-2 text-white transition bg-[#005911] hover:bg-green-200">
              {section.buttonText}
            </button>
          </div>
          </div>
         
        ))}
      </div>
    </section>
  );
};

export default WhyExhibit;
