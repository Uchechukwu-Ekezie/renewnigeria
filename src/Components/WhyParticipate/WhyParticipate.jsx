import React from "react";
import image1 from "../../Assets/Image/participate/whyParticipate/image1.png";
import image2 from "../../Assets/Image/participate/whyParticipate/image2.png";
import image3 from "../../Assets/Image/participate/whyParticipate/image3.png";
import image4 from "../../Assets/Image/participate/whyParticipate/image4.png";

const WhyParticipate = () => {
  const content = [
    {
      imgSrc: image1, // Replace with your actual image URL
      title: "Exhibit your energy solutions",
      description:
        "Demonstrate your ability to provide solutions in an energy ecosystem primed for change.",
    },
    {
      imgSrc: image2, // Replace with your actual image URL
      title: "Nurture long-term partnerships",
      description:
        "Meet the leading distributors, investors, financial institutions, dealers and traders within Africa’s power sector.",
    },
    {
      imgSrc: image3, // Replace with your actual image URL
      title: "Win business",
      description:
        "Establish your position in West Africa’s energy market by showcasing your latest products and services.",
    },
    {
      imgSrc: image4, // Replace with your actual image URL
      title: "Grow your brand",
      description:
        "Guarantee your place in the tender process for some of the West African region’s leading energy projects at the live show.",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="max-w-[1280px] mx-auto px-5">
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
