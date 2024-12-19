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
    <section className="w-full bg-[#E3E3E3] py-12 md:py-16 ">
      <div className="max-w-[1280px] px-5 mx-auto">
        {/* Heading */}
        <div className="text-center mb-9">
          <h2 className="font-sanss text-2xl md:text-3xl lg:text-[40px] lg:leading-[50px] font-bold text-[#000000] ">
            Hear From Our Delegates
          </h2>
          <div className="w-[50px] h-[2px] bg-gray-800 mx-auto mt-4"></div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* First Card */}
          <div className="  overflow-hidden">
            <div className="relative w-full h-[250px] sm:h-[300px]">
              <img
                src={videoThumbnail1}
                alt="Exhibitor Testimonial 1"
                className="w-full h-full object-cover"
              />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-red-600 text-white rounded-lg w-[64px] h-[48px] flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-[18px] h-[20px] ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3l14 9-14 9V3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 bg-white border-l-2 border-l-[#066C16] mt-10 mb-4 ">
              <p className="font-sanss font-normal text-[#555555] text-sm lg:text-base">
                "Nigeria Energy 2023 is a vibrant show that we are proud to be a
                part of. Our expectations were over fulfilled with the number of
                people interested in our products."
              </p>
            </div>
            <p className="font-sanss text-[#066C16] font-bold text-sm lg:text-lg">
              Thomas Sasserath, Project Manager, A.H.T. Syngas Tech N.V.
            </p>
          </div>

          {/* Second Card */}
          <div className=" overflow-hidden">
            <div className="relative w-full h-[250px] sm:h-[300px]">
              <img
                src={videoThumbnail2}
                alt="Exhibitor Testimonial 2"
                className="w-full h-full object-cover"
              />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-red-600 text-white rounded-lg w-[64px] h-[48px] flex items-center justify-center shadow-lg">
                  <svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-[18px] h-[20px] ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3l14 9-14 9V3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 bg-white border-l-2 border-l-[#066C16] mt-10 mb-4 ">
              <p className="font-sanss font-normal text-[#555555] text-sm lg:text-base">
                "Nigeria is a fast-growing economy, and Nigeria Energy is the
                best media to showcase your company/products not only for the
                Nigerian market but also for the West Africa region."
              </p>
            </div>
            <p className="font-sanss text-[#066C16] font-bold text-sm lg:text-lg">
              Imequadri Duestelle s.p.a
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DelegateTestimonials;
