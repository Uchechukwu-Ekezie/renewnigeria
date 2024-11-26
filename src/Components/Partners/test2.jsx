import React from "react";

// Importing partner logos
import renewpic from "../../Assets/Image/renewpic.jpg";
import windmill from "../../Assets/Image/windmill.png";
import paramount from "../../Assets/Image/paramount.png";
import spotify from "../../Assets/Image/spotify.png";
import fitbit from "../../Assets/Image/fitbit.png";
import bacardi from "../../Assets/Image/bacardi.png";
import dillards from "../../Assets/Image/dillards.png";
import fifa from "../../Assets/Image/fifa.png";
import canon from "../../Assets/Image/canon.png";
import lexus from "../../Assets/Image/lexus.png";
import heineken from "../../Assets/Image/heineken.png";
import marriott from "../../Assets/Image/marriott.png";
import google from "../../Assets/Image/google.png";
import microsoft from "../../Assets/Image/microsoft.png";
import hsbc from "../../Assets/Image/hsbc.png";
import jumeirah from "../../Assets/Image/jumeirah.png";
import cartier from "../../Assets/Image/cartier.png";
import porsche from "../../Assets/Image/porsche.png";
import fitbit2 from "../../Assets/Image/fitbit2.png";

// Array of partner logos
const partnerLogos = [
  { name: "Paramount", logo: paramount },
  { name: "Spotify", logo: spotify },
  { name: "Fitbit", logo: fitbit },
  { name: "Heineken", logo: heineken },
  { name: "Bacardi", logo: bacardi },
  { name: "Dillards", logo: dillards },
  { name: "FIFA", logo: fifa },
  { name: "Canon", logo: canon },
  { name: "Marriott", logo: marriott },
  { name: "Lexus", logo: lexus },
  { name: "Heineken", logo: heineken },
  { name: "Marriott", logo: marriott },
  { name: "Google", logo: google },
  { name: "Microsoft", logo: microsoft },
  { name: "Cartier", logo: cartier },
  { name: "HSBC", logo: hsbc },
  { name: "Jumeirah", logo: jumeirah },
  { name: "Cartier", logo: cartier },
  { name: "Porsche", logo: porsche },
  { name: "Fitbit2", logo: fitbit2 },
];

const Partners = () => {
  return (
    <div className="bg-[#F5F5F5] w-full h-fit top-16 flex flex-col items-center">
      {/* Banner Section */}
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row w-full items-center px-10 py-8 relative mt-16">
        {/* Banner Image */}
        <div className="w-full sm:w-full md:w-full lg:w-[460px] bg-gray-800 h-[500px] sm:h-[400px] relative mb-4 lg:mr-8">
          <img
            src={renewpic}
            alt="Renew Nigeria"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Windmill Image - Only for Large Screens */}
        <div className="hidden lg:block absolute -top-72 right-12 transform -translate-y-12">
          <img
            src={windmill}
            alt="Windmill"
            className="h-[630px] w-[251px]"
          />
        </div>

        <div className="font-medium font-sans mt-4 text-center lg:text-left lg:mt-0">
          <p className="text-[11.48px]">TO NAME A FEW OF OUR 185,000+ CUSTOMERS</p>
          <h2 className="text-[41.5px]">PARTNERS</h2>
        </div>
      </div>

      {/* Partners Section */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-10/12 mt-8 mb-4 justify-items-center">
        {partnerLogos.map((partner, index) => (
          <img
            key={index}
            src={partner.logo}
            alt={partner.name}
            className="w-[141.38px] h-[47.36px] object-contain"
          />
        ))}
      </div>

      {/* Case Studies Button */}
      <button className="mt-0 px-4 py-2 bg-black text-white text-lg">
        Read More Case Studies
      </button>
    </div>
  );
};

export default Partners;
