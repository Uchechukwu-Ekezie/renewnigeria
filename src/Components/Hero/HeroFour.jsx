import React from "react";
import image1 from "../../Assets/Image/image1.png";
import image2 from "../../Assets/Image/image2.png";
import image3 from "../../Assets/Image/image3.png";
import image4 from "../../Assets/Image/image4.png";
import image5 from "../../Assets/Image/image5.png";

function HeroTwo() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="grid grid-cols-1 gap-4 px-16 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-24 bg-slate-200">
      {images.map((image, index) => (
        <div
          key={index}
          className="overflow-hidden "
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}

export default HeroTwo;
