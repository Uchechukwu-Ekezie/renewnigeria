import React from "react";
import image1 from "../../Assets/Image/participate/ExhibitingAtRenewNigeria.png";
const ExhibitingAtRenewNigeria = () => {
  return (
    <section className="w-full py-10 bg-white lg:py-16">
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Container */}
        <h2 className="text-2xl md:text-3xl lg:text-[50px] text-center font-bold text-gray-900 mb-6">
          Exhibiting at Renew Nigeria?
        </h2>
        <div className="w-[50px] h-[2px] bg-[#066C16] mx-auto mt-4 mb-5"></div>
        <div className="max-w-[1280px] px-5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}

          <div>
            <ul className="font-sanss list-inside list-disc font-normal text-[#313131] text-sm lg:text-lg space-y-2 leading-relaxed">
              <li>
                Demonstrate your ability to provide solutions in an energy
                ecosystem primed for change
              </li>
              <li>
                Meet the leading distributors, investors, financial
                institutions, policymakers, dealers, and small & medium traders
                within Africa’s power sector
              </li>
              <li>Establish your position in West Africa’s energy market</li>
              <li>
                Guarantee your place in the tender process for some of the West
                African region’s leading energy projects at the live show
              </li>
              <li>
                Showcase your latest products and services set to transform
                Africa’s energy industry
              </li>
            </ul>

            {/* Button */}
            <div className="mt-6">
              <button className="bg-[#066C16] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#055213] transition duration-300">
                Download exhibiting brochure
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src={image1}
              alt="Exhibiting at Renew Nigeria"
              className="w-full h-auto shadow-md lg:w-"
            />
            <p className="text-[#313131] font-sanss font-normal italic text-lg mt-2 text-center">
              The House of Representatives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitingAtRenewNigeria;
