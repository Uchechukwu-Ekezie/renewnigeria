import React from "react";

import image1 from "../../Assets/Image/participate/sponsorship-opportunities.png"
const SponsorshipEnquiry = () => {
  return (
    <section className="bg-white w-full py-12 md:py-16" >
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
        <div className="relative">
          {/* Image */}
          <img
            src={image1}
            alt="Conference Sponsorship"
            className="w-[661.2px] h-[532.63px]  rounded-lg shadow-lg"
          />
          {/* Green Info Card */}
            <div className="bg-[#066C16] pl-10 pr-4 text-white pt-[70px]  rounded-lg shadow-lg absolute top-[7%] right-7  lg:h-[468px]  lg:m-w-[542.8px]">
            <h3 className="text-lg md:text-xl font-bold mb-[20px]">
              Become a Partner & Sponsor
            </h3>
            <p className=" font-nunito w-[474px] text-sm lg:text-base font-medium lg:leading-[30px] mb-6">
              Position your brand alongside the leaders of industry and policy
              at the 1st Annual Legislative Summit and Expo on Renewable Energy
              (RENEW NIGERIA), where public and private decision makers come
              together to push progress forward on energy security in Nigeria.
            </p>
            <ul className="font-nunito w-[474px] text-sm lg:text-base font-medium lg:leading-5 space-y-2 list-disc list-inside">
              <li>Global Visibility</li>
              <li>Networking:</li>
              <li>Global Brand Alignment:</li>
              <li>Community Impact</li>
            </ul>
          </div>
        </div>
        {/* Button */}
        <div className="text-center mt-12">
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
