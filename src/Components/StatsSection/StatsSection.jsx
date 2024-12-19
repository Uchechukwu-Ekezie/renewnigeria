import React from "react";

const StatsSection = () => {
  const stats = [
    { label: "Exhibitors", value: "150+" },
    { label: "Attendees", value: "6574" },
    { label: "Key investors", value: "250+" },
    { label: "B2B meetings", value: "657+" },
    { label: "Sqm of products", value: "4413" },
  ];

  return (
    <div className="w-full bg-[#066c16]  py-14">
      <div className="max-w-[1280px] px-5 mx-auto   ">
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center text-white">

        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="font-sanss text-lg lg:text-2xl font-medium mb-5">{stat.label}</h3>
            <p className="font-sanss text-3xl lg:text-5xl font-medium">{stat.value}</p>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default StatsSection;
