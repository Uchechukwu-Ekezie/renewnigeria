import React from "react";

const ProductSector = () => {
  const products = [
    { img: "https://via.placeholder.com/100", name: "Renewables & Clean Energy" },
    { img: "https://via.placeholder.com/100", name: "Back-up Generators & Critical Power" },
    { img: "https://via.placeholder.com/100", name: "Energy Consumption & Management" },
    { img: "https://via.placeholder.com/100", name: "Transmission & Distribution" },
    { img: "https://via.placeholder.com/100", name: "Smart Solutions" },
  ];

  return (
    <section className="px-4 py-8 sm:px-8 lg:px-16 bg-gray-50">
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
              className="w-24 h-24 object-contain"
            />
            <p className="text-gray-700 font-semibold text-sm">{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSector;
