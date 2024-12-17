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
    <div className="bg-green-700 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center text-white">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-lg md:text-xl font-medium mb-2">{stat.label}</h3>
            <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
