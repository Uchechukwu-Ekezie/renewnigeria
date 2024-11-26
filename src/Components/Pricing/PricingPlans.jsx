const PricingPlans = () => {
    return (
      <section className="py-16 px-6 bg-gradient-to-r from-transparent to-green-900 via-green-600">
        <div className="container mx-auto text-center">
          {/* Heading Section */}
          <p className="text-green-200 uppercase font-medium mb-4">Join Us</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-12">
            At The 2025 Renew Nigeria
          </h1>
  
          {/* Pricing Plans */}
          <div className="lg:w-3/5 w-full  grid grid-cols-2    gap-8">
            {/* Free Plan */}
            <div className="bg-[#005911] text-white rounded-lg shadow-lg p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">Free</h2>
                <p className="text-5xl font-extrabold mb-4">$0</p>
                <p className="text-lg mb-6">Best for Small Teams or Individuals.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-xl">✔</span> 150+ local and international exhibitors
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-xl">✔</span> Technical Seminar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-xl">✔</span> Entrepreneurs forum
                  </li>
                </ul>
              </div>
              <button className="bg-white text-green-700 font-medium py-3 mt-6 rounded-md hover:bg-green-600 hover:text-white transition">
                Get Started →
              </button>
            </div>
  
            {/* Enterprise Plan */}
            <div className="bg-[#FFFFFF] text- rounded-lg shadow-lg p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
                <p className="text-5xl font-extrabold mb-4">$500</p>
                <p className="text-lg mb-6">
                  Ultimate for Enterprise Solutions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">✔</span> All benefits of visitor pass access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">✔</span> Keynote addresses and roundtable sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">✔</span> Interactive deep-dive sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">✔</span> Power lunches and breaks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">✔</span> Technical and social seminars
                  </li>
                </ul>
              </div>
              <button className="bg-green-600 text-white font-medium py-3 mt-6 rounded-md hover:bg-green-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PricingPlans;
  