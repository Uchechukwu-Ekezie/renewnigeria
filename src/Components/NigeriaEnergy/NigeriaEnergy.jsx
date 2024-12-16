import React from "react";
import slide1 from "../../Assets/Image/visit/NigeriaEnergy/Slide-1.png";
import slide2 from "../../Assets/Image/visit/NigeriaEnergy/Slide-2.png";
const NigeriaEnergy = () => {
  return (
    <section className="bg-gray-100 py-10 px-10">
      <h2 className="text-center text-green-600 text-2xl md:text-3xl font-bold mb-8">
        At Nigeria Energy
      </h2>
      <div className="max-w-[1175px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Leadership Summit */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-[640px] mx-auto px-[50px] pt-[27px] pb-[37px]">
          {/* Title */}
          <h2 className="text-center text-green-600 text-2xl font-bold mb-4">
            LEADERSHIP SUMMIT
          </h2>

          {/* Image */}
          <img
            src={slide1} // Replace with actual image path
            alt="Leadership Summit"
            className="w-full h-auto object-cover mb-6"
          />

          {/* List */}
          <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <li>
              <strong>Identify Challenges and Opportunities:</strong> Assess the
              current state of renewable energy in Nigeria, identifying key
              challenges and opportunities for growth and development.
            </li>
            <li>
              <strong>Formulate actionable policies and strategies</strong> that
              will support the scaling up of renewable energy projects, ensuring
              alignment with national and international sustainability goals.
            </li>
            <li>
              <strong>Foster collaboration</strong> between public and private
              sectors to mobilize resources, expertise, and investments
              necessary for the successful implementation of renewable energy
              initiatives.
            </li>
          </ul>
        </div>

        {/* Technical Seminar */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-[640px]y mx-auto px-[50px] pt-[27px] pb-[37px]">
          {/* Title */}
          <h2 className="text-center text-green-600 text-2xl font-bold mb-4">
            Technical Seminar
          </h2>

          {/* Image */}
          <img
            src={slide2} // Replace with actual image path
            alt="Technical Seminar"
            className="w-full h-auto object-cover mb-6"
          />

          {/* List */}

          <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <li>
              <strong>Capacity Building:</strong> Enhance the skills and
              knowledge of stakeholders through training and knowledge-sharing
              sessions, empowering them to effectively contribute to the
              renewable energy sector.
            </li>
            <li>
              <strong>Innovation and Technology:</strong> Encourage adopting
              innovative technologies and practices to accelerate sustainable
              energy transitions.
            </li>
            <li>
              <strong>Awareness and Advocacy:</strong> Raise awareness about the
              benefits of renewable energy and advocate for policies that
              support its growth.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NigeriaEnergy;
