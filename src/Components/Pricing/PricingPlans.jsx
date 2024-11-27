const PricingPlans = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-transparent to-green-900 via-green-600">
      <div className="container max-w-screen-lg mx-auto text-center">
        {/* Heading Section */}
        <p className="text-green-200 uppercase font-medium mb-4">Join Us</p>
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-12 mx-auto">
          At The 2025 Renew Nigeria
        </h1>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 lg:w-[80%] mx-auto">
  {/* Free Plan */}
  <div className="bg-[#005911] text-white rounded-lg shadow-lg p-8 flex flex-col justify-between w-full md:w-[370px] md:h-[520px] lg:w-[390px] lg:h-[470px] mx-auto">
    <div className="w-[100%]" >
      <h2 className="text-xl md:text-2xl font-normal font-sans mb-4">Free</h2>
      <p className="text-4xl md:text-5xl font-bold font-poppins mb-4">$0</p>
      <p className="text-base md:text-lg font-sans text-[16px] mb-6">
        Best for Small Teams or Individuals.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center w-full font-sans text-[16px] gap-2">
          <span>✔</span> <p>150+ local and international exhibitors</p>
        </li>
        <li className="flex items-center  font-sans text-[16px] gap-2">
          <span>✔</span> Technical Seminar
        </li>
        <li className="flex items-center font-sans text-[16px] gap-2">
          <span>✔</span> Entrepreneurs forum
        </li>
      </ul>
    </div>
    <button className="bg-[#FFFFFF] text-[#009379] font-medium py-3 mt-6 rounded-md hover:bg-green-600 hover:text-white transition">
      Get Started →
    </button>
  </div>

  {/* Enterprise Plan */}
  <div className="bg-[#FFFFFF] text-gray-900 rounded-lg shadow-lg p-8 flex flex-col justify-between w-full md:w-[370px] md:h-[520px] lg:w-[390px] lg:h-[470px] mx-auto">
    <div className="w[100%]">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Enterprise</h2>
      <p className="text-4xl md:text-5xl font-extrabold mb-4">$500</p>
      <p className="text-base md:text-lg mb-6">
        Ultimate for Enterprise Solutions.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center font-sans text-[16px] gap-2">
          <span className="text-green-600 text-xl">✔</span> All benefits of visitor pass access
        </li>
        <li className="flex items-center font-sans text-[16px] gap-2">
          <span>✔</span> Keynote addresses and roundtable sessions
        </li>
        <li className="flex items-center font-sans text-[16px] gap-2">
          <span>✔</span> Interactive deep-dive sessions
        </li>
        <li className="flex items-center font-sans text-[16px] gap-2">
          <span>✔</span> Power lunches and breaks
        </li>
        <li className="flex items-center font-sans text-[16px] gap-2">
          <span>✔</span> Technical and social seminars
        </li>
      </ul>
    </div>
    <button className="bg-[#E5F4F2] text-[#005911] font-medium py-3 mt-6 rounded-md hover:bg-green-700 transition">
      Get Started
    </button>
  </div>
</div>

      </div>
    </section>
  );
};

export default PricingPlans;
