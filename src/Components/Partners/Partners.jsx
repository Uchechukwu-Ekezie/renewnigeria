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
      <div className=" flex flex-col  sm:flex-col md:flex-col lg:flex-row w-full items-center lg:px-10 py-8 relative mt-16" >
        
        {/* Banner Image */}
          <div className="w-[25%] bg-gray-800 h-[80%]  md:w[100%] sm:w-[260px] sm:h-[300px] lg:ml-20 lg:-top-5 lg:relative"  >
            
          <img
            src={renewpic}
            alt="Renew Nigeria"
            className="w-[100%] h-[100%] "
          />
          </div>
          <div className="flex flex-col left-96 w-[60%] h-[80%] items-center justify-center py-12 bg-white">
          <h2 className="text-[41.5px] lg:text-start text-center  ">PARTNERS</h2>
      <div className="w-12 h-[1px] bg-yellow-400 my-2"></div>
      <h1 className="text-black  font-sanss font-semibold text-4xl lg:text- md:text-5xl">
        Coming Soon!!
      </h1>
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