import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import HeroOne from "./HeroOne";

function Slider() {
  const [currentHero, setCurrentHero] = useState(0);
  const slides = ["hero", "heroOne"];
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
    setCurrentHero((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentHero((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div
      onMouseEnter={() => setHoverPause(true)}
      onMouseLeave={() => setHoverPause(false)}
      className="relative"
    >
      {slides[currentHero] === "hero" ? <Hero /> : <HeroOne />}

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={handlePrev}
          className="z-50 p-3 text-black bg-white rounded-full shadow-lg hover:bg-gray-200"
          style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)" }}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="z-50 p-3 text-black bg-white rounded-full shadow-lg hover:bg-gray-200"
          style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;
