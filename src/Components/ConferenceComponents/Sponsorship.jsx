import React from "react";
import conferenceImage from "../../Assets/Image/sponsorship.png";

const ConferenceSponsorship = () => {
  return (
    <div className="flex flex-col items-center w-full h-full py-12 bg-white">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-5">
        <h2 className="text-[#066C16] font-bold text-[32px] mb-4 text-center">
          Conference Sponsorship Enquiry
        </h2>
        <div className="mx-auto w-16 h-[2px] bg-[#066C16] mb-6"></div>

        {/* Main Content */}
        <div className="flex flex-col gap-8 mx-auto lg:flex-row lg:px-0">
          {/* Image Section */}
          <div className="relative flex-1 max-w-[661.2px]">
            <img
              src={conferenceImage}
              alt="Conference Sponsorship"
              className="object-cover w-full h-auto rounded-md shadow-lg"
            />
          </div>

          {/* Content Section */}

          <div className=" max-w-[542.8px] lg:h-[468px] h-full lg:top-11 relative lg:right-20  bg-[#066C16]">
            <div className="  w-full h-[full]  flex-1  text-white lg:pl-[48px] pt-[60px] px-5">
              <h3 className="text-[25px] font-nunito font-semibold leading-[35px] pt-[10px] ">
                Become a Partner & Sponsor
              </h3>
              <div className="pt-[25px] max-w-[474px] lg:h-[300px] pr-[21px] pb-[38px] ">
              <p className="text-[16px]  font-medium font-nunito leading-[30px] mb-6">
                Position your brand alongside the leaders of industry and policy
                at the 1st Annual Legislative Summit and Expo on Renewable
                Energy (RENEW NIGERIA), where public and private decision makers
                come together to push progress forward on energy security in
                Nigeria.
              </p>
              <ul className="pl-5 space-y-2 text-[16px] list-disc font-nunito">
                <li>Global Visibility</li>
                <li>Networking</li>
                <li>Global Brand Alignment</li>
                <li>Community Impact</li>
              </ul>
            </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex items-center justify-center">
        <button className="bg-[#066C16] text-white font-bold text-[16px] py-[17.3px] px-[19px] mt-6 rounded-sm hover:bg-green-700 transition font-sanss ">
          Sponsorship Enquiry
        </button>
        </div>
      </div>
    </div>
  );
};

export default ConferenceSponsorship;
