import React from "react";

// Importing partner logos
import renewpic from "../../Assets/Image/features/titi.png";
import lagos1 from "../../Assets/Image/lagospa.png";
import swat1 from "../../Assets/Image/swatpa.png";
import renew1 from "../../Assets/Image/renewpa.png";
import house1 from "../../Assets/Image/housepa.png";
import house2 from "../../Assets/Image/housepa.png";
import renew2 from "../../Assets/Image/renewpa.png";
import swat2 from "../../Assets/Image/swatpa.png";
import greenclean1 from "../../Assets/Image/greencleanpa.png";
import greenclean2 from "../../Assets/Image/greencleanpa.png";
import swat3 from "../../Assets/Image/swatpa.png";
import renew3 from "../../Assets/Image/renewpa.png";
import lagos2 from "../../Assets/Image/lagospa.png";

// Array of partner logos
const partnerLogos = [
  { name: "Lagos", logo: lagos1 },
  { name: "Swat", logo: swat1 },
  { name: "Renew Nigeria", logo: renew1 },
  { name: "House of Rep", logo: house1 },
  { name: "House of Rep", logo: house2 },
  { name: "Renew Nigeria", logo: renew2 },
  { name: "Swat", logo: swat2 },
  { name: "Green Clean Nigeria", logo: greenclean1 },
  { name: "Green Clean Nigeria", logo: greenclean2 },
  { name: "Swat", logo: swat3 },
  { name: "Renew Nigeria", logo: renew3 },
  { name: "Lagos", logo: lagos2 },
];

const Partners = () => {
  return (
    <div className="bg-[#F5F5F5] w-full  h-full top-16 flex flex-col items-center">
      {/* Banner Section */}
      <div className=" flex flex-col  sm:flex-col md:flex-col lg:flex-row w-[100%] max-w-[1280px]   h-[70%] items-center lg:px-10 py-8 relative  mx-auto">
        {/* Banner Image */}
        <div className="flex justify-center md:w-full lg:ml-[-70px]">
          <img
            src={renewpic}
            alt="Renew Nigeria"
            className=" w-[200px] lg:w-[450px] h-[80%]  md:w-[60%] "
          />
        </div>

        <div className="w-[70%]  md:w-[100%] lg:w-[120%] lg:ml-[-60px] ">
          <div className="font-medium text-center mt-7 font-sanss lg:text-left">
            <p className="lg:text-[14.5px] text-[12px] md:text-[13px] font-[500]">
              TO NAME A FEW OF OUR 185,000+ CUSTOMERS
            </p>
            <h2 className="lg:text-[41.5px] text-[31px] lg:text-start mt-7">
              PARTNERS
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4  lg:gap-2 w-[90%] lg:w-[100%] mt-8 mb-4 justify-items-center">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className={`flex items-center justify-center  ${
                  partner.name === "Renew Nigeria" ||
                  partner.name === "Green Clean Nigeria"
                    ? "lg:w-[180px] h-[100px] w-[140px]" // Larger size for specific logos
                    : "lg:w-[130px] h-[80px] w-[100px]" // Default size for others
                }`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`object-contain ${
                    partner.name === "Renew Nigeria" ||
                    partner.name === "Green Clean Nigeria"
                      ? "w-[100%] h-[100%]" // Larger size for specific logos
                      : "w-[130px] h-[60px]" // Default size for others
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Button */}
      <button className="hidden px-4 py-2 mt-0 text-lg text-white bg-black top-64 ">
        Read More Case Studies
      </button>
    </div>
  );
};

export default Partners;