import React, { useEffect, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import image from "../../Assets/Image/participate/feature/image.png";
import image2 from "../../Assets/Image/participate/feature/image2.png";
import image3 from "../../Assets/Image/participate/feature/image3.png";
import image4 from "../../Assets/Image/participate/feature/image4.png";
import image5 from "../../Assets/Image/participate/feature/image5.png";
const exhibitors = [
  { name: "JA SOLAR", logo: image },
  { name: "NPP", logo: image2 },
  { name: "ATS trafo", logo: image3 },
  { name: "Meksan Transformer", logo: image4 },
  { name: "Bestcom Tech", logo: image5 },
];

const Exhibi= () => {
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
      <div className="relative max-w-[1280px] px-5 mx-auto mt-6 overflow-hidden">
        <h2 className="mb-4 text-[40px] font-bold text-center text-[#066C16] md:text-xl font-sanss leading-[50px]">
          Featured Exhibitors 2025
        </h2>
        <div className="w-16 h-[2px] bg-[#066C16] mx-auto mb-10"></div>

        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="absolute z-10 text-black transform -translate-y-1/2 left-2 md:left-4 top-24 "
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

export default Exhibi;
