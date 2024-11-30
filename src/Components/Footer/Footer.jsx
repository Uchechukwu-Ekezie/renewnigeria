import logo from "../../Assets/Image/Footer.png";
import logo1 from "../../Assets/Image/Footer2.png";

function Footer() {
  return (
    <div className="py-10 text-white bg-[#202020]">
      <div className="px-6 mx-auto mt-16 w-[95%] lg:w-[90%]">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:gap-6 lg:grid-cols-4 lg:text-left">
          {/* Left Section */}
          <div className="w-full">
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <img
                src={logo}
                alt="Green Clean Logo"
                className="h-[47px] w-[137px]"
              />
              <img
                src={logo1}
                alt="Green Clean Logo"
                className="h-[5px] w-[150px]"
              />
            </div>
            <p className="mt-5 text-center lg:text-left text-[14px] leading-6 font-albert font-[400] text-white md:text-[16px]">
              Driving Nigeria's <br /> Green Revolution
            </p>
          </div>

          {/* Services Section */}
          <div className="w-full">
            <h3 className="mb-4 text-[20px] font-albert font-[600] md:text-[24px] md:text-left">
              Our <span className="text-[#005911]">Services</span>
            </h3>
            <ul className="flex flex-col items-center md:items-start justify-center space-y-4 text-[14px] leading-6 font-albert font-[400] md:text-[16px]">
              {["Wind Turbines", "Solar Panels", "Hydropower Plants", "Fossil Resources", "Battery Materials"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center space-x-2 hover:text-green-500"
                    >
                      <span className="font-extrabold">›</span>
                      <span>{item}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="w-full">
            <h3 className="mb-4 text-[20px] font-albert font-[600] md:text-[24px] md:text-left">
              Useful <span className="text-[#005911]">Links</span>
            </h3>
            <ul className="flex flex-col items-center md:items-start justify-center space-y-4 text-[14px] leading-6 font-albert font-[400] md:text-[16px]">
              {["About Us", "Leadership Team", "News & Blog", "Our Projects", "Contacts"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center space-x-2 hover:text-green-500"
                    >
                      <span className="font-extrabold">›</span>
                      <span>{link}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right Section */}
          <div className="w-full">
            <h3 className="mb-5 text-[20px] font-albert font-[600] md:text-[24px]">
              Get <span className="text-[#005911]">Notified</span>
            </h3>
            <p className="mb-5 text-[14px] text-[#FFFFFF] font-albert font-[400] md:text-[16px]">
              Stay updated with our latest news! Enter your email here
            </p>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mb-4 text-gray-800 rounded-md md:w-[306px] md:h-[60px] bg-white border-[1px] border-[#868681] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-[#49AF45] rounded-md md:w-[306px] md:h-[60px] hover:bg-[#30862d]"
              >
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-16 text-center border-t text-[#74787C] border-gray-600 text-[14px] font-albert font-[400] md:text-[16px]">
          © Copyright 2024 Renew Nigeria.
        </div>
      </div>
    </div>
  );
}

export default Footer;
