import React from "react";
import image1 from "../../Assets/Image/visit/findSuppliers/image-1.svg";

const FindSuppliers = () => {
  return (
    <section className="relative w-full bg-white">
      {/* Top Text */}
      <div className="text-center mx-auto lg:max-w-[1042.5px] py-2 bg-[#066c16] text-white">
        <p className="font-sans text-[20px] md:text-[25px] leading-7 md:leading-9 font-medium">
          Find Suppliers For Every Product Sector
        </p>
      </div>

      {/* Background Image with Overlay */}
      <div className="relative w-full">
        <div className="mx-auto lg:max-w-[1042.5px] relative">
          {/* Background Image */}
          <img
            src={image1}
            alt="Suppliers"
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
          />
          {/* Bottom Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 mx-auto bg-white bg-opacity-80 px-4 lg:py-6 py-2 text-center md:px-6 lg:px-8">
            <p className="font-sans text-[#313131] text-[9px] md:text-[16px] lg:text-[18px] lg:leading-[24px] md:leading-[28px] max-w-[95%] lg:max-w-[975px] mx-auto">
              Automation & Control Systems | Cable Installation | Switch Cables
              & Cable Management Systems | Communication Equipment | Energy
              Management Systems | Energy Storage Devices | Electrical
              Distribution Equipment | Insulating Materials | Lighting - Lamps,
              Luminaires, LED | New & Renewable Energy | Nuclear Energy | Power
              Distribution Systems | Electronics | Electric / Power Generators |
              Power Transmission | Transformers | Utilities & Service Providers
            </p>
            <button className="mt-2 bg-[#066c16] text-white font-sans font-bold text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded-sm hover:bg-green-800 transition duration-300">
              View 2025 Exhibitor List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindSuppliers;
