import React from "react";
import brochureImage from "../../Assets/Image/sponsoracrobat.png"; // Adjust path based on your setup

const SponsorshipBrochure = () => {
  return (
    <div className="bg-[#066C16] text-white w-full py-12 lg:py-16">
      <div className="mx-auto lg:max-w-[1280px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Left Section - Image */}
          <div className="relative flex justify-center w-full mb-8 lg:mb-0 lg:w-1/3">
            <img
              src={brochureImage}
              alt="Sponsorship Brochure"
              className="h-auto max-w-full"
            />
          </div>

          {/* Right Section - Content */}
          <div className="w-full text-left lg:w-2/3 lg:text-left">
            <h2 className="text-[24px] lg:text-[40px] font-sanss font-bold mb-6">
              Download The Sponsorship Brochure
            </h2>
            <div className="w-12 h-1 mx-auto mb-6 bg-white"></div>
            <div className="lg:w-[80%] w-full mx-auto lg:mx-0 ">
              <p className="font-sanss font-[400] text-[20px] leading-[30px]">
                Access the Nigeria Energy Sales brochure for detailed information on
                exhibition stands, floor plans, sponsorship opportunities, and more
                insights.
              </p>
              <h3 className="font-sanss font-[500] text-[20px] leading-[30px] py-[17px]">Why Sponsor?</h3>
              <div className="mb-6 space-y-3 lg:pl-5 ">
                <p className="flex items-start text-[18px] font-sanss leading-[28px] font-[400] ">
                  <span className="mr-2 font-bold">•</span>
                  <span>
                    Enhance{" "}
                    <span className="font-semibold">
                      brand visibility and recognition
                    </span>{" "}
                    within the West African energy sector.
                  </span>
                </p>
                <p className="flex items-start text-[18px] font-sanss leading-[28px] font-[400]">
                  <span className="mr-2 font-bold">•</span>
                  <span>
                    Access exclusive{" "}
                    <span className="font-semibold">
                      networking opportunities
                    </span>{" "}
                    with industry leaders and decision-makers.
                  </span>
                </p>
                <p className="flex items-start text-[18px] font-sanss leading-[28px] font-[400]">
                  <span className="mr-2 font-bold">•</span>
                  <span>
                    <span className="font-semibold">
                      Forge strategic partnerships
                    </span>{" "}
                    to drive business growth and innovation.
                  </span>
                </p>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-center lg:justify-start pt-[40px]">
              <button className="px-[18.74px] py-[16px] font-bold text-[16px] leading-[16px] text-[#066C18] font-nunito transition duration-300 bg-white rounded hover:bg-green-600 hover:text-white">
                Download the sales brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipBrochure;
