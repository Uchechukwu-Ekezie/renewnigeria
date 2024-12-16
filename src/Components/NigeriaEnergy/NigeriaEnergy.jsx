import React from "react";
import slide1 from "../../Assets/Image/visit/NigeriaEnergy/Slide-1.png";
import slide2 from "../../Assets/Image/visit/NigeriaEnergy/Slide-2.png";
const NigeriaEnergy = () => {
  return (
    <section className="bg-gray-100 py-10 px-10">
      <h2 className=" font-sanss text-center text-[#066c16] text-2xl lg:text-[40px] lg:leading-[50px] md:text-3xl font-bold mb-3">
        At Nigeria Energy
      </h2>
      <hr className="border-b mx-auto border-[#066C16] w-[50px] mb-14" />
      <div className="max-w-[1175px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Leadership Summit */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-[640px] mx-auto px-[50px] pt-[27px] pb-[37px]">
          {/* Title */}
          <h2 className="font-sanss text-center text-[#066c16] text-2xl font-semibold mb-4">
            LEADERSHIP SUMMIT
          </h2>

          {/* Image */}
          <img
            src={slide1} // Replace with actual image path
            alt="Leadership Summit"
            className="w-full h-auto object-cover mb-6"
          />

          {/* List */}
          <ul className="font-sanss lg:pl-4 list-disc space-y-9 text-[#555555] text-base leading-7">
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
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-[640px]y mx-auto px-[50px] pt-[27px] pb-[37px]">
          {/* Title */}
          <h2 className="font-sanss text-center text-[#066c16] text-2xl font-semibold mb-4">
            TECHNICAL SEMINAR
          </h2>

          {/* Image */}
          <img
            src={slide2} // Replace with actual image path
            alt="Technical Seminar"
            className="w-full h-auto object-cover mb-6"
          />

          {/* List */}

          <ul className="font-sanss lg:pl-4 list-disc space-y-9 text-[#555555] text-base leading-7">
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
