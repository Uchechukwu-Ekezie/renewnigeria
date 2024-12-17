import React from "react";
import slide1 from "../../Assets/Image/visit/NigeriaEnergy/Slide-1.png";
import slide2 from "../../Assets/Image/visit/NigeriaEnergy/Slide-2.png";

const NigeriaEnergy = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-8 lg:px-16">
      {/* Section Title */}
      <h2 className="font-sanss text-center text-[#066c16] text-2xl sm:text-3xl lg:text-[40px] lg:leading-[50px] font-bold mb-4">
        At Nigeria Energy
      </h2>
      <hr className="border-b mx-auto border-[#066C16] w-[50px] mb-10" />

      {/* Grid Section */}
      <div className="max-w-[1175px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Leadership Summit */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden px-6 py-6 sm:px-8 sm:py-8 lg:px-[50px] lg:pt-[27px] lg:pb-[37px]">
          <h2 className="font-sanss text-center text-[#066c16] text-xl sm:text-2xl font-semibold mb-4">
            LEADERSHIP SUMMIT
          </h2>

          <img
            src={slide1}
            alt="Leadership Summit"
            className="w-full h-auto object-cover mb-6"
          />

          <ul className="pl-3 font-sanss list-disc space-y-6 sm:space-y-7 lg:space-y-9 text-[#555555] text-sm sm:text-base leading-6 sm:leading-7">
            <li>
              Identify Challenges and Opportunities: Assess the current state of
              renewable energy in Nigeria, identifying key challenges and
              opportunities for growth and development.
            </li>
            <li>
              Formulate actionable policies and strategies that will support the
              scaling up of renewable energy projects, ensuring alignment with
              national and international sustainability goals.
            </li>
            <li>
              Foster collaboration between public and private sectors to
              mobilize resources, expertise, and investments necessary for the
              successful implementation of renewable energy initiatives.
            </li>
          </ul>
        </div>

        {/* Technical Seminar */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden px-6 py-6 sm:px-8 sm:py-8 lg:px-[50px] lg:pt-[27px] lg:pb-[37px]">
          <h2 className="font-sanss text-center text-[#066c16] text-xl sm:text-2xl font-semibold mb-4">
            TECHNICAL SEMINAR
          </h2>

          <img
            src={slide2}
            alt="Technical Seminar"
            className="w-full h-auto object-cover mb-6"
          />

          <ul className="pl-3 font-sanss list-disc space-y-6 sm:space-y-7 lg:space-y-9 text-[#555555] text-sm sm:text-base leading-6 sm:leading-7">
            <li>
              Capacity Building: Enhance the skills and knowledge of
              stakeholders through training and knowledge-sharing sessions,
              empowering them to effectively contribute to the renewable energy
              sector.
            </li>
            <li>
              Innovation and Technology: Encourage the adoption of innovative
              technologies and practices that can accelerate the transition to a
              sustainable energy future.
            </li>
            <li>
              Awareness and Advocacy: Raise awareness about the benefits of
              renewable energy and advocate for supportive policies and
              regulations that will facilitate its growth.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NigeriaEnergy;
