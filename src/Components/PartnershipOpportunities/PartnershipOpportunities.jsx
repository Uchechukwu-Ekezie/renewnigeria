import React from "react";
import image1 from "../../Assets/Image/participate/partnershipOpportunities/image1.png"
const PartnershipOpportunities = () => {
  return (
    <section className="bg-gray-50  w-full py-12">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1013.19px] px-5 mx-auto gap-8">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src={image1} // Replace with your image URL
            alt="Sales Brochure"
            className="w-48 h-auto md:w-56 lg:w-64"
          />
        </div>

        {/* Right: Content */}
        <div className="font-sanss flex-1 text-center lg:text-left ">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] lg:leading-[50px] font-bold text-[#066C16] mb-4">
            Conference Partnership Opportunities
          </h2>
          <div className="w-[50px] h-[2px] bg-[#066C16] text- mx-auto mb-8"></div>
          <p className="text-black lg:w-[490px] text-sm md:text-base lg:text-[20px] lg:leading-[30px] leading-relaxed mb-6">
            Access the Renew Nigeria Sales brochure for detailed information on
            exhibition stands, floor plans, sponsorship opportunities, and more
            insights.
          </p>

          {/* Download Button */}
          <div>
            <button className="bg-[#066C16] lg:text-left text-white py-4 px-3 rounded-md font-medium shadow-lg hover:bg-[#055a12] transition">
              Download the sales brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipOpportunities;
