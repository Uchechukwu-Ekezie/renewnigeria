import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import HeroOne from "./HeroOne";
; // Assuming HeroOne is your second component

function Slider() {
  const [currentHero, setCurrentHero] = useState("hero"); // State to track which hero to show

  useEffect(() => {
    const timer = setInterval(() => {
      // Toggle between "hero" and "heroOne"
      setCurrentHero((prevHero) => (prevHero === "hero" ? "heroOne" : "hero"));
    }, 10000); // Change every 10 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {currentHero === "hero" ? <Hero /> : <HeroOne />} {/* Conditionally render based on state */}
    </div>
  );
}

export default Slider;
