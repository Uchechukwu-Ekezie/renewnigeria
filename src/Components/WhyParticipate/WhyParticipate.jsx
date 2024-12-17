import React from "react";

const WhyParticipate = () => {
  const content = [
    {
      imgSrc: "https://via.placeholder.com/300x200", // Replace with your actual image URL
      title: "Exhibit your energy solutions",
      description:
        "Demonstrate your ability to provide solutions in an energy ecosystem primed for change.",
    },
    {
      imgSrc: "https://via.placeholder.com/300x200", // Replace with your actual image URL
      title: "Nurture long-term partnerships",
      description:
        "Meet the leading distributors, investors, financial institutions, dealers and traders within Africa’s power sector.",
    },
    {
      imgSrc: "https://via.placeholder.com/300x200", // Replace with your actual image URL
      title: "Win business",
      description:
        "Establish your position in West Africa’s energy market by showcasing your latest products and services.",
    },
    {
      imgSrc: "https://via.placeholder.com/300x200", // Replace with your actual image URL
      title: "Grow your brand",
      description:
        "Guarantee your place in the tender process for some of the West African region’s leading energy projects at the live show.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why Participate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;
