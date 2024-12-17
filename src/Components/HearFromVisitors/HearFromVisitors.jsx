import React from "react";

const HearFromVisitors = () => {
  return (
    <section className="bg-white py-12 px-4">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-[40px] leading-[50px] md:text-3xl font-bold text-[#313131]">
          Hear From Our Visitors
        </h2>
        <div className="w-12 h-0.5 bg-[#066c16] mx-auto mt-2"></div>
      </div>

      {/* Visitor Testimonials */}
      <div className="max-w-[1175px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Testimonial 1 */}
        <div className="flex flex-col h-full rounded-md  bg-white">
          <div className="flex-grow bg-gray-50 flex">
            {/* Left Green Border */}
            <div className="w-1 bg-[#066c16]"></div>
            {/* Text Content */}
            <div className="flex-1">
              {/* <p className="text-[#555555] text-base ">
                “I enjoyed attending Nigeria Energy, a well planned event that
                connected me with experts in the industry in addition to the
                exhibitors.”
              </p> */}
              <p className="font-sanss pl-[34px] pr-[76.9px] py-[17px] text-[#555555] font-normal text-sm lg:text-base">
                “I enjoyed attending Nigeria Energy, a well planned event that
                connected me with experts in the industry in addition to the
                exhibitors.”
              </p>
            </div>
          </div>
          <div className="lg:p-0">
            <p className="font-sanss font-bold text-lg text-[#066c16]">Mr. Vishal Daryanani</p>
           <p className="text-[#066c16] text-lg font-sanss font-bold"><span className="font-normal">CEO,</span> Newlord Nigeria Ltd</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col h-full rounded-md  bg-white">
          <div className="flex-grow bg-gray-50 flex">
            {/* Left Green Border */}
            <div className="w-1 bg-[#066c16]"></div>
            {/* Text Content */}
            <div className="flex-1 ">
            <p className="font-sanss pl-[34px] pr-[76.9px] py-[17px] text-[#555555] font-normal text-sm lg:text-base ">
                “I found the event as a conduit for ideas, networking and
                collaboration to better opportunities. Great job!”
              </p>
            </div>
          </div>
          <div className=" lg:p-0">
            <p className="font-sanss font-bold text-lg text-[#066c16]">Mr. Jide Prat</p>
           <p className="text-[#066c16] text-lg font-sanss font-bold"><span className="font-normal">COO,</span> Aiona Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HearFromVisitors;
