import React from "react";
import slide1 from "../../Assets/Image/visit/WhoWillYouMeet/Slide-1.png";
import slide2 from "../../Assets/Image/visit/WhoWillYouMeet/Slide-2.png";
import slide3 from "../../Assets/Image/visit/WhoWillYouMeet/Slide-3.png";
import slide4 from "../../Assets/Image/visit/WhoWillYouMeet/Slide-4.png";
import slide5 from "../../Assets/Image/visit/WhoWillYouMeet/Slide-5.png";
import slide6 from "../../Assets/Image/visit/WhoWillYouMeet/Slide-6.png";
const WhoWillMeet = () => {
  const participants = [
    { img: slide1, name: "Ministers of Energy, Renewables & Power" },
    { img: slide2, name: "CEOs of National Utilities and Regulations" },
    { img: slide3, name: "Directors from Distribution and Generation Companies" },
    { img: slide4, name: "Leaders of Environment and Climate Change Institutions" },
    { img: slide5, name: "Leaders from Global Corporate Finance" },
    { img: slide6, name: "Other Future Pioneers" },
  ];

  return (
    <section className="bg-[#EEEAEA] px-4 py-8 sm:px-8 lg:px-16">
      <h2 className="font-sanss text-center text-[#313131] text-[40px] leading-[50px] font-bold mb-4">
        Who will you meet?
      </h2>
      <hr className="border-b mx-auto border-[#066C16] w-[50px] mb-7" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {participants.map((participant, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={participant.img}
              alt={participant.name}
              className="w-full h-full lg:w-[359.99px] lg:h-[211.75px]  object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* <div className="absolute inset-0 pb-[14.75px] bg-black bg-opacity-50 flex items-end justify-center">
              <h3 className="font-sanss font-semibold text-white  text-center text-xl">
                {participant.name}
              </h3>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWillMeet;
