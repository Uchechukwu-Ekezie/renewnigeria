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
    <div className="bg-[#E3E3E3] py-12 px-6 md:px-10">
      {/* Header */}
      <h2 className="text-center text-[32px] font-bold text-gray-800 mb-2">
        Key Themes For The Summit
      </h2>
      <div className="w-16 h-[2px] bg-yellow-400 mx-auto mb-10"></div>

      {/* Themes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="text-center bg-transparent  p-4"
          >
            {/* Image */}
            <img
              src={theme.imgSrc}
              alt={theme.title}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {theme.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {theme.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyThemes;
