import React, { useEffect, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import jasolar from "../../Assets/img/jasolar.webp";
import nnpc from "../../Assets/img/npp.webp";
import ats from "../../Assets/img/ats.webp";
import meksan from "../../Assets/img/meksan.png";
import bestcom from "../../Assets/img/bestcom.webp";

const exhibitors = [
  { name: "JA SOLAR", logo: jasolar },
  { name: "NPP", logo: nnpc },
  { name: "ATS trafo", logo: ats },
  { name: "Meksan Transformer", logo: meksan },
  { name: "Bestcom Tech", logo: bestcom },
];

const ExhibitorsCarousel = () => {
  const containerRef = useRef(null);

  const scrollNext = () => {
    const container = containerRef.current;
    container.style.transition = "transform 0.5s ease-in-out";
    container.style.transform = `translateX(-100%)`;

    setTimeout(() => {
      container.style.transition = "none";
      container.appendChild(container.firstElementChild);
      container.style.transform = "translateX(0)";
    }, 500);
  };

  const scrollPrev = () => {
    const container = containerRef.current;
    container.style.transition = "none";
    container.insertBefore(
      container.lastElementChild,
      container.firstElementChild
    );
    container.style.transform = `translateX(-100%)`;

    setTimeout(() => {
      container.style.transition = "transform 0.5s ease-in-out";
      container.style.transform = "translateX(0)";
    }, 0);
  };

  useEffect(() => {
    const container = containerRef.current;

    const clonedNodes = [...container.children].map((child) =>
      child.cloneNode(true)
    );
    clonedNodes.forEach((node) => container.appendChild(node));

    let autoScroll = setInterval(scrollNext, 5000);

    return () => {
      clearInterval(autoScroll);
    };
  }, []);

  return (
    <div className="relative h-[25vh]  md:h-[15vh] lg:h-[25vh]">
      <div className="relative max-w-5xl px-4 mx-auto mt-6 overflow-hidden">
        <h2 className="mb-4 text-lg font-bold text-center text-red-500 md:text-xl">
          FEATURED EXHIBITORS 2024
        </h2>

        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="absolute z-10 text-black transform -translate-y-1/2 left-2 md:left-4 top-24  "
        >
          <FaChevronLeft className="text-5xl md:text-6xl lg:text-7xl" />
        </button>

        {/* Carousel Container */}
        <div
          className="flex items-center"
          ref={containerRef}
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            transition: "transform 0.5s ease",
            willChange: "transform",
          }}
        >
          {exhibitors.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0 mb-40"
              style={{
                minWidth: "100%", // Take full width for one item per view
              }}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="object-contain h-16 mx-auto md:h-20 lg:h-24"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          className="absolute z-10 text-black transform -translate-y-1/2 right-2 md:right-4 top-24"
        >
          <FaChevronRight className="text-5xl md:text-6xl lg:text-7xl" />
        </button>
      </div>
    </div>
  );
};

export default ExhibitorsCarousel;
