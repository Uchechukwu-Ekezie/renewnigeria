import React from "react";
import brochureImage from "../../Assets/Image/sponsoracrobat.png"; // Adjust path based on your setup

const SponsorshipBrochure = () => {
  return (
    <div className="bg-[#066C16] text-white py-12 px-4 md:px-16 lg:px-32">
      <div className=" lg:w-[95%]  container   mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/4 mb-8 lg:-mb-72  relative flex justify-center">
          <img
            src={brochureImage} 
            alt="Sponsorship Brochure"
          />
        </div>

        {/* Right Section - Content */}
        <div className="lg:w-[85%] w-[100%] -top-[3rem] relative text-center lg:text-left">
          <h2 className="lg:text-[40px]  text-[20px] font-sanss  font-bold mb-6">
            Download The Sponsorship Brochure
          </h2>
          <div className="w-12 h-1 bg-[#000000] mx-auto mb-6"></div>
          <div className="lg:w-[65%] w-[100%]">
          <p className="mb-6 text-sm md:text-base leading-relaxed">
            Access the Nigeria Energy Sales brochure for detailed information on
            exhibition stands, floor plans, sponsorship opportunities, and more
            insights.
          </p>
            <h3 className="">Why  Sponsor ?</h3>
            <br/>
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
