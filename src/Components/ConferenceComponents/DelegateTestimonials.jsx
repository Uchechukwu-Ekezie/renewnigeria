import React from "react";

// Import your thumbnail images
import videoThumbnail1 from "../../Assets/Image/testimonials.jfif";
import videoThumbnail2 from "../../Assets/Image/testimonials2.jfif";

const DelegateTestimonials = () => {
  const testimonials = [
    {
      videoThumbnail: videoThumbnail1,
      quote:
        "Nigeria Energy 2023 is a vibrant show that we are proud to be a part of. Our expectations were over fulfilled with the number of people interested in our products.",
      name: "Thomas Sasserath, Project Manager, A.H.T. Syngas Tech N.V.",
    },
    {
      videoThumbnail: videoThumbnail2,
      quote:
        "Nigeria is a fast-growing economy, and Nigeria Energy is the best media to showcase your company/products not only for the Nigerian market but also for the West Africa region.",
      name: "Engr. Lucas Istifanus, Principal Engineer/Adjunct Lecturer, The University of Jos, Nigeria",
    },
  ];

  return (
    <div className="bg-[#E3E3E3] py-16 px-4 md:px-8">
      {/* Header */}
      <h2 className="text-center text-[32px] font-bold text-[#313131] mb-4">
        Hear From Our Delegates
      </h2>
      <div className="w-16 h-[2px] bg-[#066C16] mx-auto mb-8"></div>

      {/* Testimonials Section */}
      <div className="  w-[80%]  h-full  mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-[full]  h-full rounded-md shadow-lg"
          >
            {/* Video Thumbnail */}
            <div className="relative  sm:h-[250px]">
              <img
                src={item.videoThumbnail}
                alt="Video Thumbnail"
                className="w-full h-full rounded-t-md"
              />
              {/* Play Button */}
              <button className="absolute inset-0 flex justify-center items-center">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Quote Section */}
            <div className="p-6 top-10  w-full lg:h-[100px] h-fit  relative bg-white border-l-4 border-green-900">
              <p className="text-gray-700 italic text-sm leading-relaxed mb-4">
                "{item.quote}"
              </p>
              
            </div>
            <div className="lg:w-[80%]  w-full top-12  relative ">
            <p className="text-[#066C16] font-bold text-sm">
                {item.name}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default DelegateTestimonials;
