import React from "react";
import video1 from "../../Assets/Image/whypart.png";
import video2 from "../../Assets/Image/whyexhi.png";
import video3 from "../../Assets/Image/whyspon.png";
import report from "../../Assets/Image/report.pdf"

const VideoGallery = () => {
  // Array of video images
  const videos = [
    { src: video1, alt: "Why Participate?" },
    { src: video2, alt: "Why Exhibit?" },
    { src: video3, alt: "Why Sponsor?" },
  ];

  return (
    <section className="bg-[#066C16] py-12 px-6 lg:px-24">
      {/* Video Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map(({ src, alt }, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-black rounded-lg shadow-lg"
          >
            <img
              src={src}
              alt={alt}
              className="object-cover w-full h-full opacity-70"
            />
          </div>
        ))}
      </div>

      {/* Download Button */}
      <div className="mt-12 text-center">
        <a
          href={report} // Replace with the actual path to the brochure
          className="inline-flex items-center bg-[#005911] text-white text-lg font-medium py-3 px-8 rounded-lg shadow-md hover:bg-green-500 transition"
          download
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.25 0.219727H9.75C10.1562 0.219727 10.5 0.563477 10.5 0.969727V6.21973H13.2188C13.7812 6.21973 14.0625 6.90723 13.6562 7.31348L8.90625 12.0635C8.6875 12.2822 8.28125 12.2822 8.0625 12.0635L3.3125 7.31348C2.90625 6.90723 3.1875 6.21973 3.75 6.21973H6.5V0.969727C6.5 0.563477 6.8125 0.219727 7.25 0.219727ZM16.5 11.9697V15.4697C16.5 15.9072 16.1562 16.2197 15.75 16.2197H1.25C0.8125 16.2197 0.5 15.9072 0.5 15.4697V11.9697C0.5 11.5635 0.8125 11.2197 1.25 11.2197H5.8125L7.34375 12.751C7.96875 13.4072 9 13.4072 9.625 12.751L11.1562 11.2197H15.75C16.1562 11.2197 16.5 11.5635 16.5 11.9697ZM12.625 14.7197C12.625 14.376 12.3438 14.0947 12 14.0947C11.6562 14.0947 11.375 14.376 11.375 14.7197C11.375 15.0635 11.6562 15.3447 12 15.3447C12.3438 15.3447 12.625 15.0635 12.625 14.7197ZM14.625 14.7197C14.625 14.376 14.3438 14.0947 14 14.0947C13.6562 14.0947 13.375 14.376 13.375 14.7197C13.375 15.0635 13.6562 15.3447 14 15.3447C14.3438 15.3447 14.625 15.0635 14.625 14.7197Z"
              fill="white"
            />
          </svg>

          <span className="ml-3">Download the 2024 Post Share Brochure</span>
        </a>
      </div>
    </section>
  );
};

export default VideoGallery;
