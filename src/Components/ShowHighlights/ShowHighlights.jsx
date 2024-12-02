import React from "react";
import img from "../../Assets/Image/features/fte.jpg";
import rtr from "../../Assets/Image/features/sww.png";
const ShowHighlights = () => {
  return (
    <section className="bg-[#EBEBEB] pb-16  pt-16 px-6 lg:px-24 font-sanss">
      <h2 className="text-[40px] text-center font-bold text-[#313131] mb-4">
        2025 Show Highlights
      </h2>
      <div className="w-12 h-[1px] bg-[#FFCB05] mx-auto lg:mx-auto my-4"></div>
      <div className="grid items-center grid-cols-1 gap-32 mx-auto max-w-7xl lg:grid-cols-2">
        {/* Left Section */}
        <div className="text-center lg:text-center">
          {/* <div className="w-12 h-1 mx-auto my-4 bg-green-600 lg:mx-0"></div> */}
          <p className="uppercase text-[11.78px] font-inter font-medium tracking-wide text-[#0D0D0D] mt-6">
            First Impressions Matter
          </p>
          <h3 className="uppercase text-[19px] md:text-[26px] lg:text-[35px] font-inter font-light text-[#0D0D0D] my-4 leading-[40px]">
            Redefining Networking <br/> Excellence
          </h3>
          <p className="text-[#2E2E2E] font-normal text-[10px] md:text-[13px] lg:text-[13.59px] font-inter leading-[26px]">
            Forge unforgettable connections with a simple tap of your BYTE card, <br/>
            instantly sharing your digital business card with their phone.
            Easily <br/>customize your BYTE profile to fit any scenario.
          </p>
          <div className="flex justify-center gap-8 my-6 uppercase mt-14 lg:justify-center">
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
        <div className=" flex  flex-row bg-white rounded-lg shadow-lg lg:w-[100%]">
          <img
            src={img} // Replace with your logo's actual path
            alt="Federal Republic of Nigeria Logo"
            className="mx-auto mb-6 w-[50%]"
          />
          <img
            src={img} // Replace with your logo's actual path
            alt="Federal Republic of Nigeria Logo"
            className="mx-auto mb-6 w-[50%]"
          />
        </div>
       
      </div>
    </section>
  );
};

export default ShowHighlights;
