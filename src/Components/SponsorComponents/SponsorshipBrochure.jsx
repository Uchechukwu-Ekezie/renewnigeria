import React from "react";
import brochureImage from "../../Assets/acrobat.png"; // Adjust path based on your setup

const SponsorshipBrochure = () => {
  return (
    <div className="bg-green-700 text-white py-12 px-4 md:px-16 lg:px-32">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
          <img
            src={brochureImage} 
            alt="Sponsorship Brochure"
            className="rounded-md shadow-lg"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            Download The Sponsorship Brochure
          </h2>
          <p className="mb-6 text-sm md:text-base leading-relaxed">
            Access the Nigeria Energy Sales brochure for detailed information on
            exhibition stands, floor plans, sponsorship opportunities, and more
            insights.
          </p>

          <div className="mb-6 space-y-4">
            <p className="flex items-start text-sm md:text-base">
              <span className="font-bold mr-2">•</span>
              <span>
                Enhance{" "}
                <span className="font-semibold">
                  brand visibility and recognition
                </span>{" "}
                within the West African energy sector.
              </span>
            </p>
            <p className="flex items-start text-sm md:text-base">
              <span className="font-bold mr-2">•</span>
              <span>
                Access exclusive{" "}
                <span className="font-semibold">networking opportunities</span>{" "}
                with industry leaders and decision-makers.
              </span>
            </p>
            <p className="flex items-start text-sm md:text-base">
              <span className="font-bold mr-2">•</span>
              <span>
                <span className="font-semibold">Forge strategic partnerships</span>{" "}
                to drive business growth and innovation.
              </span>
            </p>
          </div>

          {/* Download Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-white text-green-700 font-semibold py-2 px-4 rounded hover:bg-green-600 hover:text-white transition duration-300">
              Download the sales brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipBrochure;
