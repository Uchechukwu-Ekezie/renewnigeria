import React from "react";

const ExhibitorFeedback = () => {
  const feedback = [
    "Rated the quality and number of visitors as excellent",
    "Rated Nigeria Energy as an important platform for their business",
    "Were satisfied with Renew Nigeria overall",
    "Will most likely exhibit again in Nigeria Energy 2024",
  ];

  return (
    <section className="w-full bg-[#066C16] ">
      <div className="max-w-[1140px] px-5 mx-auto pb-[82.6px] pt-[63.2px]">
        <h2 className="font-sanss text-center text-2xl md:text-3xl lg:text-[40px] lg:leading-[50px] font-bold text-white  pb-[17.2px] ">
          Exhibitor Feedback
        </h2>
        <div className="w-12 mx-auto mb-[40px] bg-white border-t"></div>
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 lg:grid-cols-4">
           {feedback.map((item, index) => (
            <p
              key={index}
              className="font-sanss  text-white lg:text-[25px] leading-[35px] font-medium"
            >
              {item}
            </p>
          ))}
         
        </div>
      </div>
    </section>
  );
};

export default ExhibitorFeedback;
