import React from "react";
import slide1 from "../../Assets/Image/visit/productsector/Slide-1.png";
import slide2 from "../../Assets/Image/visit/productsector/Slide-2.svg";
import slide3 from "../../Assets/Image/visit/productsector/Slide-3.svg";
import slide4 from "../../Assets/Image/visit/productsector/Slide-4.svg";
import slide5 from "../../Assets/Image/visit/productsector/Slide-5.svg";
const ProductSector = () => {
  const products = [
    { img: slide1, name: "Renewables & Clean Energy" },
    { img: slide2, name: "Back-up Generators & Critical Power" },
    { img: slide3, name: "Energy Consumption & Management" },
    { img: slide4, name: "Transmission & Distribution" },
    { img: slide5, name: "Smart Solutions" },
  ];

  return (
    <section className="px-4 py-8 sm:px-8 lg:px-16 bg-white">
      <h2 className="font-sanss text-center text-[#066c16] text-[40px] leading-[50px] font-bold mb-2">
        Product Sector
      </h2>
      <hr className="border-b mx-auto border-[#066C16] w-[50px] mb-5" />
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center space-y-2"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-[204px] h-[213.56px] object-contain"
            />
            {/* <p className="text-gray-700 font-semibold text-sm">{product.name}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSector;
