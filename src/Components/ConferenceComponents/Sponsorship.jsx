import React from "react";
import conferenceImage from "../../Assets/Image/sponsorship.png";

const ConferenceSponsorship = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center py-12">
      {/* Header */}
      <h2 className="text-[#066C16] font-bold text-[32px] mb-4 text-center">
        Conference Sponsorship Enquiry
      </h2>
      <div className="w-16 h-[2px] bg-[#066C16] mb-6"></div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 w-full lg:w-[90%] mx-auto px-6 lg:px-0">
        {/* Image Section */}
        <div className="flex-1 relative">
          <img
            src={conferenceImage}
            alt="Conference Sponsorship"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 bg-[#066C16] text-white p-6 rounded-md shadow-lg">
          <h3 className="text-[24px] font-bold mb-4">Become a Partner & Sponsor</h3>
          <p className="text-sm leading-relaxed mb-4">
            Position your brand alongside the leaders of industry and policy at
            the 1st Annual Legislative Summit and Expo on Renewable Energy
            (RENEW NIGERIA), where public and private decision makers come
            together to push progress forward on energy security in Nigeria.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Global Visibility</li>
            <li>Networking</li>
            <li>Global Brand Alignment</li>
            <li>Community Impact</li>
          </ul>
        </div>
      </div>

      {/* Button */}
      <button className="bg-[#066C16] text-white font-semibold text-[14px] py-2 px-6 mt-6 rounded-md hover:bg-green-700 transition">
        Sponsorship Enquiry
      </button>
    </div>
  );
};

export default ConferenceSponsorship;
