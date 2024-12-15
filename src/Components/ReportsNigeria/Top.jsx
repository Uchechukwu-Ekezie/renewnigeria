import React from "react";

function Top() {
  return (
    <div className="w-full">
      <div className="lg:w-[1440px] mx-auto text-center py-[30px]">
        {/* Title */}
        <h2 className="lg:text-[50px] text-[30px] font-sanss font-bold text-gray-800 md:text-4xl">
          Industry Reports
        </h2>

        {/* Centered Line */}
        <div className="flex justify-center mt-[15px]">
          <div className="w-[50px] h-[2px] bg-[#066c18]"></div>
        </div>

        {/* Description */}
        <p className="mt-4 text-[#313131] lg:w-[1173px] mx-auto text-center lg:h-[56px] text-[18px] font-[400] font-sanss leading-[28px]">
          Stay up-to-date with the latest trends, insights, challenges, and
          solutions in Nigeria's energy industry with our comprehensive
          industry reports. Our reports cover key developments providing you
          with the knowledge you need to stay ahead of the game.
        </p>
      </div>
    </div>
  );
}

export default Top;
