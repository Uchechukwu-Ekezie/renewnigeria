import React from "react";
import why from "../../Assets/Image/whypart.jpg";
import why2 from "../../Assets/Image/whyexhi.jpg";
import why3 from "../../Assets/Image/whyspon.jpg";

const ShowFeature = () => {
  const features = [
    {
      title: "Exhibition",
      description:
        "Our international exhibition has 150+ exhibitors offering a unique opportunity for attendees to network, trade, and discover new opportunities.",
      image: why,
    },
    {
      title: "Conferences",
      description:
        "The leadership summit, technical seminar, and newly launched Energy-X Contest are premier events for industry professionals seeking the latest challenges and innovations in West Africa's energy sector.",
      image: why2,
    },
    {
      title: "Product sectors",
      description:
        "Our exhibition showcases 5 diverse product sectors and the latest energy equipment solutions all in one convenient location.",
      image: why3,
    },
    {
      title: "VIP programme",
      description:
        "Our exclusive VIP initiative connects decision-makers and energy experts, providing attendees with high-level opportunities to network with key players.",
      image: why,
    },
  ];

  return (
    <div className="py-12 text-center bg-gray-100">
      <h2 className="text-[40px] font-bold text-[#313131] font-sans mb-8">
        2025 Show Features
      </h2>
      <div className="w-[50px] h-[1px] bg-yellow-400 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 gap-16 px-4 sm:grid-cols-2 lg:grid-cols-4 md:px-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white w-[300px] h-[500px] shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className="object-cover w-full h-40 rounded-t-lg"
            />
            <h3 className="text-[20px] font-bold font-sans text-[#066C16] mt-4">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 space-x-4">
        <button className="bg-[#066C16] w[200px] text-[#FFFFFF] text-[16px] font-sans py-2 px-4 rounded-lg hover:bg-green-700 transition">
          Visitor Registration
        </button>
        <button className="bg-[#066C16] w-[200px] text-[#FFFFFF] text-[16px] font-sans py-2 px-4 rounded-lg hover:bg-green-700 transition">
          Delegate Registration
        </button>
      </div>
    </div>
  );
};

export default ShowFeature;
