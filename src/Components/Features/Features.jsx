import React from "react";
import why from "../../Assets/Image/features/one.jpg";
import why2 from "../../Assets/Image/features/two.jpg";
import why3 from "../../Assets/Image/features/three.jpg";
import why4 from "../../Assets/Image/features/four.jpg";

const ShowFeature = () => {
  const features = [
    {
      title: "Conferences",
      description:
        "Gain valuable insights from industry leaders, experts, and pioneers at dynamic sessions designed to inspire and inform.",
      image: why,
    },
    {
      title: "Targeted Exhibition",
      description:
        "Explore an expansive showcase of cutting-edge innovations and solutions from leading solar and energy brands, all under one roof.",
      image: why2,
    },
    {
      title: "Product Shows",
      description:
        "Discover a diverse range of specialized solar technologies, tools, and services tailored to your specific needs.",
      image: why3,
    },
    {
      title: "Private Sessions",
      description:
        "Unlock exclusive access to networking events, private lounges, and premium benefits designed for industry decision-makers.",
      image: why4,
    },
  ];

  return (
    <section className="w-full h-auto py-16 bg-gray-300 font-sans">
      <div className="container px-4 mx-auto">
        <h2 className="mb-6 font-bold text-center text-[40px]">
          2025 Show Features
        </h2>

        <div className="w-12 h-[1px] bg-[#FFCB05] mx-auto my-4"></div>
        <div className="grid w-[90%] gap-4 mx-auto md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-4 text-center"
            >
              <div className="w-[250px] h-[250px] mx-auto">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="mt-3 mb-3 text-[20px] font-bold text-[#066C16]">
                    {feature.title}
                  </h3>
                  <p className="text-[18px] text-center font-[400] text-[#555555] leading-7">
                    {feature.description}
                  </p>
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
