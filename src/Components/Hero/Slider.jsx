import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import HeroOne from "./HeroOne";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Slider() {
  const [currentHero, setCurrentHero] = useState(0);
  const slides = ["hero", "heroOne"]; // Define the slides
  const [hoverPause, setHoverPause] = useState(false);

  useEffect(() => {
    if (!hoverPause) {
      const timer = setInterval(() => {
        setCurrentHero((prevIndex) => (prevIndex + 1) % slides.length);
      }, 10000); // 10-second interval

      return () => clearInterval(timer);
    }
  }, [hoverPause]);

  const handlePrev = () => {
    if (currentHero > 0) {
      setCurrentHero((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentHero < slides.length - 1) {
      setCurrentHero((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div
      onMouseEnter={() => setHoverPause(true)}
      onMouseLeave={() => setHoverPause(false)}
      className="relative"
    >
      {slides[currentHero] === "hero" ? <Hero /> : <HeroOne />}

      {/* Navigation Buttons */}
      <div className="absolute top-[89%] left-[35%] inset-0 flex w-10 h-10 gap-2  px-4 lg:left-[83%]" >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={currentHero === 0} // Disable if on the first slide
          className={`z-50 p-2 sm:p-3 text-white shadow-lg ${
            currentHero === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-700 hover:bg-green-800"
          }`}
          // Positioning for responsive screens
          style={{ top: "50%", transform: "translateY(-50%)", left: "1rem" }}
        >
          <FaAngleLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentHero === slides.length - 1} // Disable if on the last slide
          className={`z-50 p-2 sm:p-3 text-white shadow-lg ${
            currentHero === slides.length - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-700 hover:bg-green-800"
          }`}
          // Positioning for responsive screens
          style={{ top: "50%", transform: "translateY(-50%)", right: "1rem" }}
        >
          <FaAngleRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Slider;
