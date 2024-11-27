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
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row w-full items-center lg:px-10 py-8 relative mt-16" >
        
        {/* Banner Image */}
          <div className="lg:w-[460px] bg-gray-800 h-[500px]  lg:ml-20 lg:-top-14 lg:relative"  >
            
          <img
            src={renewpic}
            alt="Renew Nigeria"
            className="w-[460px] h-[500px] "
          />
          </div>
          <div className="  font-medium font-sans  lg:absolute  lg:ml-[550px]  lg:-top-3  md:text-pink-400 sm:text-red-400 lg:text-black ">
        <p className="text-[11.48px] "> TO NAME A FEW OF OUR 185,000+ CUSTOMERS</p>
      <h2 className="text-[41.5px]  ">PARTNERS</h2>
      </div>
          <div className="w-[50%]  relative  lg:-mr-96">
        
         
        
        {/* Windmill Image */}
        <div className="absolute -top-[310px] -right-7 transform -translate-y-12 hidden lg:block">
          <img
            src={windmill}
            alt="Windmill"
            className="h-[630px] w-[251px]"
          />
        </div>
    

      {/* Partners Section */}

     

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-10/12 justify-items-center">
        {partnerLogos.map((partner, index) => (
          <img
            key={index}
            src={partner.logo}
            alt={partner.name}
            className="w-[141.38px] h-[47.36px] "
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