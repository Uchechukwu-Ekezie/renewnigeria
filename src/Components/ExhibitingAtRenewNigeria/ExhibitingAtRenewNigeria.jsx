import React from "react";

const ExhibitingAtRenewNigeria = () => {
  return (
    <section className="w-full py-10 lg:py-16 bg-white">
      {/* Container */}
      <div className="max-w-[1280px] px-5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Exhibiting at Renew Nigeria?
          </h2>

          <ul className="text-gray-700 text-sm sm:text-base space-y-4 leading-relaxed">
            <li>
              Demonstrate your ability to provide solutions in an energy
              ecosystem primed for change
            </li>
            <li>
              Meet the leading distributors, investors, financial institutions,
              policymakers, dealers, and small & medium traders within Africa’s
              power sector
            </li>
            <li>
              Establish your position in West Africa’s energy market
            </li>
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
            src="https://via.placeholder.com/600x400"
            alt="Exhibiting at Renew Nigeria"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <p className="text-gray-500 italic text-sm mt-2 text-right">
            The House of Representatives
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExhibitingAtRenewNigeria;
