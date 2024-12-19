import React from "react";

// Import your images here
import leadershipSummit from "../../Assets/Image/leadershipSummit.jfif";
import technicalSeminar from "../../Assets/Image/technicalSeminar.jfif";

const ConferenceHighlights = () => {
  const highlights = [
    {
      title: "LEADERSHIP SUMMIT",
      imgSrc: leadershipSummit,
      description: [
        "Identify Challenges and Opportunities: Assess the current state of renewable energy in Nigeria, identifying key challenges and opportunities for growth and development.",
        "Formulate actionable policies and strategies that will support the scaling up of renewable energy projects, ensuring alignment with national and international sustainability goals.",
        "Foster collaboration between public and private sectors to mobilize resources, expertise, and investments necessary for the successful implementation of renewable energy initiatives.",
      ],
    },
    {
      title: "TECHNICAL SEMINAR",
      imgSrc: technicalSeminar,
      description: [
        "Capacity Building: Enhance the skills and knowledge of stakeholders through training and knowledge-sharing sessions, empowering them to effectively contribute to the renewable energy sector.",
        "Innovation and Technology: Encourage the adoption of innovative technologies and practices that can accelerate the transition to a sustainable energy future.",
        "Awareness and Advocacy: Raise awareness about the benefits of renewable energy and advocate for supportive policies and regulations that will facilitate its growth.",
      ],
    },
  ];

  return (
    <div className="w-full py-12 bg-gray-50 md:px-10">
      
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-5">
      <h2 className="text-center text-[32px] font-bold text-[#066C16] mb-2">
        What You Can Expect From The 2025 Conferences
      </h2>
      <div className="w-16 h-[2px] bg-[#066C16] mx-auto mb-10"></div>

      {/* Highlights Section */}
      <div className="lg:w-[80%] w-full md:w-[80%]  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {highlights.map((item, index) => (
          
          <div
            key={index}
            className="bg-[#EBEBEB] shadow-md rounded-md overflow-hidden"
          >
            <h3 className="text-[20px] font-bold text-[#066C16] mb-4 text-center">
                {item.title}
              </h3>
            {/* Image */}
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-[220px] object-cover"
            />

            {/* Content */}
            <div className="p-6">
              
              <ul className="pl-5 space-y-3 leading-relaxed text-gray-600 list-disc list-outside">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ConferenceHighlights;
