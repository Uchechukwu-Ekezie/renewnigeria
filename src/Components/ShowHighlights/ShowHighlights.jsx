import React from "react";
import img from "../../Assets/Image/ShowHighlight.png"
const ShowHighlights = () => {
  return (
    <section className="bg-gray-50 pb-16  pt-16 px-6 lg:px-24">
        <h2 className="text-2xl text-center font-bold text-gray-900 mb-4">
            2025 Show Highlights
          </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        {/* Left Section */}
        
        <div className="text-center lg:text-center">
          
          {/* <div className="w-12 h-1 bg-green-600 mx-auto lg:mx-0 my-4"></div> */}
          <p className="uppercase text-sm font-medium tracking-wide text-gray-500 mt-6">
            First Impressions Matter
          </p>
          <h3 className="text-3xl font-semibold text-gray-900 my-4">
            Redefining Networking Excellence
          </h3>
          <p className="text-gray-600 text-lg">
            Forge unforgettable connections with a simple tap of your BYTE card,
            instantly sharing your digital business card with their phone.
            Easily customize your BYTE profile to fit any scenario.
          </p>
          <div className="flex justify-center lg:justify-center gap-8 my-6">
            <div>
              <p className="font-bold text-gray-900">Professional</p>
              <div className="w-16 h-1 bg-gray-200 mt-2"></div>
            </div>
            <div>
              <p className="font-bold text-gray-900">Convenient</p>
              <div className="w-16 h-1 bg-gray-200 mt-2"></div>
            </div>
            <div>
              <p className="font-bold text-gray-900">Sustainable</p>
              <div className="w-16 h-1 bg-gray-200 mt-2"></div>
            </div>
          </div>
          <button className="bg-green-600 text-white text-lg font-medium py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition">
            Register for Event
          </button>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src={img} // Replace with your logo's actual path
            alt="Federal Republic of Nigeria Logo"
            className="mx-auto mb-6"
          />
          {/* <h4 className="text-center text-gray-900 font-bold text-lg mb-6">
            Federal Republic of Nigeria <br /> Committee on Renewable Energy
          </h4>
          <div className="flex justify-center">
            <img
              src="/path/to/event-poster.png" // Replace with your event poster's actual path
              alt="Renew Nigeria Poster"
              className="rounded-lg"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ShowHighlights;
