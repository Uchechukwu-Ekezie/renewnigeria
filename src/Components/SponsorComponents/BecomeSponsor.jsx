import React from "react";

const BecomeSponsor = () => {
  return (
    <div className="bg-[#EEEEEE] py-12 px-4 md:px-16 lg:px-32 text-center w-full">
      <div className="max-w-[1280px] mx-auto">
      {/* Title */}
      <h2 className="text-[40px] md:text-4xl  font-sanss font-bold text-gray-900 mb-4">
        Want To Become A Sponsor?
      </h2>

      {/* Divider */}
      <div className="w-12 h-1 bg-[#000000] mx-auto mb-6"></div>

      {/* Description */}
      <p className="max-w-2xl mx-auto mb-8 text-sm leading-relaxed text-gray-600 md:text-base">
        Go beyond just branding your stand. Renew Nigeria provides the perfect
        opportunity to highlight your company's profile, increase brand
        awareness and generate new leads.
      </p>

      {/* Button */}
      <button className="bg-[#066C16] hover:bg-green-950 text-white text-[16px]  font-sanss font-bold py-2 px-6 rounded transition duration-300">
        Sponsorship Enquiry
      </button>
    </div>
    </div>
  );
};

export default BecomeSponsor;
