import React from "react";

const ExhibitorFeedback = () => {
  const feedback = [
    "Rated the quality and number of visitors as excellent",
    "Rated Nigeria Energy as an important platform for their business",
    "Were satisfied with Renew Nigeria overall",
    "Will most likely exhibit again in Nigeria Energy 2024",
  ];

  return (
    <section className="w-full bg-[#066C16] py-12">
      <div className="max-w-[1280px] px-5 mx-auto ">
        <h2 className="font-sanss text-center text-2xl md:text-3xl lg:text-[40px] lg:leading-[50px] font-bold text-white ">
          Exhibitor Feedback
        </h2>
        <div className="border-t bg-white mb-10 w-12 mx-auto"></div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 text-center">
           {feedback.map((item, index) => (
            <p
              key={index}
              className="font-sanss  text-white text-[25px] leading-[35px] font-medium"
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
