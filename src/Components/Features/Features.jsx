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
    <section className="w-full h-auto py-10 bg-gray-300">
      
      <div className="container px-4 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center">
          2025 Show Features
        </h2>
        
        <div className="w-12 h-1 bg-[#FFCB05] mx-auto lg:mx-auto my-4"></div> 
        <div className="grid w-[80%] gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-4 text-center "
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="object-cover w-64 h-64 mx-auto rounded-md"
              />
                <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-yellow-600">
                    {feature.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-600">{feature.description}</p>
                </div>
                <div className="mt-auto">
                  {/* Empty space, pushing the content to the top */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-6 mt-8 sm:flex-row">
          <button className="w-full px-6 py-3 text-white transition bg-[#066C16] rounded hover:bg-red-600 sm:w-auto">
            Visitor registration
          </button>
          <button className="w-full px-6 py-3 text-white transition bg-[#066C16] rounded hover:bg-red-600 sm:w-auto">
            Delegate registration
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowFeature;
