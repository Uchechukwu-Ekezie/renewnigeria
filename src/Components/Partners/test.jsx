import React from "react";

// Importing partner logos
import renewpic from "../../Assets/Image/renewpic.jpg";
import windmill from "../../Assets/Image/windmill.png";
import paramount from "../../Assets/Image/paramount.png";
import spotify from "../../Assets/Image/spotify.png";
import fitbit from "../../Assets/Image/fitbit.png";
// import f1 from "../../Assets/Image/f1.png";
import bacardi from "../../Assets/Image/bacardi.png";
import dillards from "../../Assets/Image/dillards.png";
import fifa from "../../Assets/Image/fifa.png";
import canon from "../../Assets/Image/canon.png";
import lexus from "../../Assets/Image/lexus.png";
import heineken from "../../Assets/Image/heineken.png";
import marriott from "../../Assets/Image/marriott.png";
import google from "../../Assets/Image/google.png";
import microsoft from "../../Assets/Image/microsoft.png";
// import spacex from "../../Assets/Image/spacex.png";
import hsbc from "../../Assets/Image/hsbc.png";
import jumeirah from "../../Assets/Image/jumeirah.png";
import cartier from "../../Assets/Image/cartier.png";
// import cocacola from "../../Assets/Image/cocacola.png";
import porsche from "../../Assets/Image/porsche.png";
import fitbit2 from "../../Assets/Image/fitbit2.png";

// Array of partner logos
const partnerLogos = [
  { name: "Paramount", logo: paramount },
  { name: "Spotify", logo: spotify },
  { name: "Fitbit", logo: fitbit },
  { name: "Heineken", logo: heineken },
  // { name: "F1", logo: f1 },
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
  // { name: "SpaceX", logo: spacex },
  { name: "Cartier", logo: cartier },
  { name: "HSBC", logo: hsbc },
  { name: "Jumeirah", logo: jumeirah },
  { name: "Cartier", logo: cartier },
  // { name: "Coca Cola", logo: cocacola },
  { name: "Porsche", logo: porsche },
  { name: "Fitbit2", logo: fitbit2 },
];

const Partners = () => {
  return (
    <div className="bg-[#F5F5F5] w-full  h-fit top-16 flex flex-col items-center">
      {/* Banner Section */}
      <div className="flex  w-full items-center px-10 py-8 relative mt-16" >
        
        {/* Banner Image */}
          <div className="w-[460px] bg-gray-800 h-[500px]  ml-20 -top-14 relative"  >
            
          <img
            src={renewpic}
            alt="Renew Nigeria"
            className="w-[460px] h-[500px] "
          />
          </div>
          <div className="  font-medium font-sans  absolute ml-[550px]  -top-3 ">
        <p className="text-[11.48px] "> TO NAME A FEW OF OUR 185,000+ CUSTOMERS</p>
      <h2 className="text-[41.5px]  ">PARTNERS</h2>
      </div>
          <div className="w-[70%]  relative -mr-96">
        
         
        
        {/* Windmill Image */}
        <div className="absolute -top-72 right-12 transform -translate-y-12">
          <img
            src={windmill}
            alt="Windmill"
            className="h-[630px] w-[251px]"
          />
        </div>
    

      {/* Partners Section */}

     

      <div className="grid grid-cols-4 gap-4 w-10/12 mt-8 mb-4 justify-items-center">
        {partnerLogos.map((partner, index) => (
          <img
            key={index}
            src={partner.logo}
            alt={partner.name}
            className="w-[141.38px] h-[47.36px] object-contain"
          />
        ))}
        </div>
        </div>
      
      </div>

      {/* Case Studies Button */}
      <button className="mt-0 px-4 py-2 bg-black text-white text-lg ">
        Read More Case Studies
      </button>
    </div>

  );
};

export default Partners;
