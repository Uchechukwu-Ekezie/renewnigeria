import React from "react";
import img from "../../Assets/Image/ShowHighlight.png"
const ShowHighlights = () => {
  return (
    <section className="bg-[#EBEBEB] pb-16  pt-16 px-6 lg:px-24">
      
        <h2 className="text-[40px] font-sans text-center font-bold text-[#313131] mb-4">
            2025 Show Highlights
          </h2>
          <div className="w-12 h-1 bg-[#FFCB05] mx-auto lg:mx-auto my-4"></div> 
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        {/* Left Section */}
        
        <div className="text-center lg:text-center">
          
          {/* <div className="w-12 h-1 bg-green-600 mx-auto lg:mx-0 my-4"></div> */}
          <p className="uppercase text-[11.52px] font-inter font-medium tracking-wide text-[#0D0D0D] mt-6">
            First Impressions Matter
          </p>
          <h3 className="uppercase text-[35px] font-inter font-light text-[#0D0D0D] my-4">
            Redefining Networking Excellence
          </h3>
          <p className="text-[#2E2E2E] font-normal text-[13px] font-inter">
            Forge unforgettable connections with a simple tap of your BYTE card,
            instantly sharing your digital business card with their phone.
            Easily customize your BYTE profile to fit any scenario.
          </p>
          <div className="flex justify-center lg:justify-center gap-8 my-6">
  <div className="text-center">
    <p className="font-medium text-[10.58px] font-inter text-[#0D0D0D]   relative before:content-[''] before:absolute before:w-16 before:h-[2px] before:bg-[#2E2E2E26] before:-top-4 before:left-1/2 before:-translate-x-1/2">
      Professional
    </p>
  </div>
  <div className="text-center">
    <p className="font-medium text-[10.58px] font-inter text-[#0D0D0D] relative before:content-[''] before:absolute before:w-16 before:h-[2px] before:bg-[#2E2E2E26] before:-top-4 before:left-1/2 before:-translate-x-1/2">
      Convenient
    </p>
  </div>
  <div className="text-center">
    <p className="font-medium text-[10.58px] font-inter text-[#0D0D0D]  relative before:content-[''] before:absolute before:w-16 before:h-[2px] before:bg-[#2E2E2E26] before:-top-4 before:left-1/2 before:-translate-x-1/2">
      Sustainable
    </p>
  </div>
</div>

          <button className="bg-[#066C16] text-white text-[20px] font-bold font-nunito py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition">
            Register for Event
          </button>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src={img} // Replace with your logo's actual path
            alt="Federal Republic of Nigeria Logo"
            className="mx-auto mb-6"
          />
          {/* <h4 className="text-center text-gray-900 font-bold text-lg mb-6">
            Federal Republic of Nigeria <br /> Committee on Renewable Energy
          </h4>
          <div className="flex justify-center">
            <img
              src="/path/to/event-poster.png" // Replace with your event poster's actual path
              alt="Renew Nigeria Poster"
              className="rounded-lg"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ShowHighlights;
