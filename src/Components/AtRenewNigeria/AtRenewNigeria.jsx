import React from "react";
import slide1 from "../../Assets/Image/visit/AtRenewNigeria/Slide-1.png";
import slide2 from "../../Assets/Image/visit/AtRenewNigeria/Slide-2.png";
import slide3 from "../../Assets/Image/visit/AtRenewNigeria/Slide-3.png";
import slide4 from "../../Assets/Image/visit/AtRenewNigeria/Slide-4.png";
const AtRenewNigeria = () => {
  const cards = [
    {
      img: slide1,
      title: "Network",
      description:
        "with global energy suppliers, investors, regulatory authorities and over 6,500 attendees to establish new and existing partnerships",
    },
    {
      img: slide2,
      title: "Discover",
      description:
        "cutting-edge products and technologies from leading industry suppliers to stay up-to-date with the latest energy trends",
    },
    {
      img: slide3,
      title: "Gain Insights",
      description:
        "from 70+ energy experts at our high-level conferences and stay informed about the latest developments in energy",
    },
    {
      img: slide4,
      title: "Connect",
      description:
        "with like-minded professionals and explore new business opportunities in the energy industry",
    },
  ];

  return (
    <section className="bg-[#066C16] text-white px-4 py-8 sm:px-8 lg:px-16">
      <h2 className="font-sanss text-center text-[40px] leading-[50px] font-bold mb-[16px]">At Renew Nigeria</h2>
      <hr className="border-b mx-auto border-[#DDDDDD] w-[50px] mb-11" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="text-center">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="font-normal font-sanss text-lg mb-2">
            <strong className="font-bold">{card.title}{" "}</strong>
            {card.description}
            </p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default AtRenewNigeria;