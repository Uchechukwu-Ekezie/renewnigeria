import React from "react";

// Import your images
import policyImage from "../../Assets/Image/policyImage.png";
import solarImage from "../../Assets/Image/solarImage.png";
import financingImage from "../../Assets/Image/financingImage.jfif";
import jobCreationImage from "../../Assets/Image/jobCreationImage.png";

const KeyThemes = () => {
  const themes = [
    {
      title: "Renewable Energy Policy and Regulation",
      description:
        "Demonstrate your ability to provide solutions in an energy ecosystem primed for change.",
      imgSrc: policyImage,
    },
    {
      title: "Solar Energy: Opportunities and Challenges",
      description:
        "Meet the leading distributors, investors, financial institutions, dealers and traders within Africa’s power sector.",
      imgSrc: solarImage,
    },
    {
      title: "Financing Renewable Energy Projects",
      description:
        "Establish your position in West Africa’s energy market by showcasing your latest products and services.",
      imgSrc: financingImage,
    },
    {
      title: "Renewable Energy and Job Creation",
      description:
        "Guarantee your place in the tender process for some of the West African region’s leading energy projects at the live show.",
      imgSrc: jobCreationImage,
    },
  ];

  return (
    <div className="bg-[#E3E3E3]  w-full">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-5 py-12 ">
      <h2 className="text-center text-[32px] font-bold text-gray-800 mb-2">
        Key Themes For The Summit
      </h2>
      <div className="w-16 h-[2px] bg-yellow-400 mx-auto mb-10"></div>

      {/* Themes Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="p-4 text-center bg-transparent"
          >
            {/* Image */}
            <img
              src={theme.imgSrc}
              alt={theme.title}
              className="object-cover w-full h-40 mb-4 rounded-md"
            />
            {/* Title */}
            <h3 className="mb-2 text-[20px] font-bold leading-[30px] text-[#313131]">
              {theme.title}
            </h3>
            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-600">
              {theme.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default KeyThemes;
// bg-[#066C16]