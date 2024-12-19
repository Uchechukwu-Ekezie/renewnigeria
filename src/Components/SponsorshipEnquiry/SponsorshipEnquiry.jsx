import React from "react";

import image1 from "../../Assets/Image/participate/sponsorship-opportunities.png";

const SponsorshipEnquiry = () => {
  return (
    <section className="bg-white w-full py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#066C16] mb-2">
            Conference Sponsorship Enquiry
          </h2>
          <div className="w-[50px] h-[2px] bg-gray-400 mx-auto mt-2"></div>
        </div>

        {/* Content Section */}
        <div className="relative max-w-[1140px] mx-auto">
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
            {/* Image */}
            <img
              src={image1}
              alt="Conference Sponsorship"
              className="w-full max-w-[661px] h-auto rounded-lg shadow-lg mb-8 lg:mb-0 lg:mr-8"
            />
            {/* Green Info Card */}
            <div className="bg-[#066C16] p-6 md:p-8 text-white rounded-lg shadow-lg lg:static lg:w-auto lg:h-auto">
              <h3 className="text-lg md:text-xl font-bold mb-4">
                Become a Partner & Sponsor
              </h3>
              <p className="text-sm md:text-base font-medium mb-6">
                Position your brand alongside the leaders of industry and policy
                at the 1st Annual Legislative Summit and Expo on Renewable
                Energy (RENEW NIGERIA), where public and private decision-makers
                come together to push progress forward on energy security in
                Nigeria.
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Global Visibility</li>
                <li>Networking</li>
                <li>Global Brand Alignment</li>
                <li>Community Impact</li>
              </ul>
            </div>
          </div>
          {/* Button */}
          <div className="text-center mt-8">
            <button className="bg-[#066C16] text-white py-3 px-6 rounded-md font-medium shadow-lg hover:bg-[#055a12] transition">
              Sponsorship Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipEnquiry;
