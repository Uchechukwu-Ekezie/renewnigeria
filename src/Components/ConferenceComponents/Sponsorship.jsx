import React from "react";
import sponsorshipImage from "../../Assets/Image/sponsorship.png"; // Update with your image path

const SponsorshipEnquiry = () => {
  return (
    <section className="w-full py-12 md:py-20 px-5 bg-white">
      {/* Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div>
          <img
            src={sponsorshipImage}
            alt="Conference Sponsorship"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="bg-green-600 text-white p-8 rounded-lg shadow-lg">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Become a Partner & Sponsor
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base leading-relaxed mb-6">
            Position your brand alongside the leaders of industry and policy at
            the 1st Annual Legislative Summit and Expo on Renewable Energy
            (RENEW NIGERIA), where public and private decision makers come
            together to push progress forward on energy security in Nigeria.
          </p>

          {/* Bullet Points */}
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>Global Visibility</li>
            <li>Networking</li>
            <li>Global Brand Alignment</li>
            <li>Community Impact</li>
          </ul>

          {/* Button */}
          
        </div>
      </div>
      <div className="mt-6">
            <button className="bg-white text-green-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition">
              Sponsorship Enquiry
            </button>
          </div>
    </section>
  );
};

export default SponsorshipEnquiry;
