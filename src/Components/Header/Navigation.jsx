import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/Image/main logo.png";

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow">
      <div className="w-full mx-auto sm:px-6">
        <div className="flex items-center justify-between py-4 lg:px-[60px] pt-0 px-[20px]">
          {/* Logo Section */}
          <div className="flex-col items-center hidden lg:flex-row lg:items-center lg:block">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-[41px] sm:h-[50px] md:h-[100px] w-auto object-contain"
              />
              <p className="font-sans font-[600] text-primary-light leading-[1.5] text-center text-[8px] lg:mt-[-20px]">
                FIRST NATIONAL LEGISLATIVE SUMMIT & <br />
                EXPO ON RENEWABLE ENERGY
              </p>
            </Link>
          </div>

          {/* Desktop and Tablet Navigation Links */}
          <div className="hidden lg:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-10 text-[18px] font-sans font-[500] text-[#504F53]">
                {/* Dropdown for About */}
                <li
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <NavLink
                    to="#"
                    className="text-gray-700 transition hover:text-[#005911]"
                  >
                    About
                  </NavLink>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 z-10 w-48 bg-white border border-gray-200 rounded shadow-md group-hover:block">
                      <li>
                        <NavLink
                          to="/about-us"
                          className="block text-gray-700 transition hover:bg-gray-100 hover:text-[#005911]"
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/sustainability"
                          className="block text-gray-700 transition hover:bg-gray-100 hover:text-[#005911]"
                        >
                          Sustainability
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Other Links */}
                {["Participate", "Sponsor", "Visit", "Conference", "Media"].map(
                  (link) => (
                    <li key={link}>
                      <NavLink
                        to={`/${link.toLowerCase()}`}
                        className="text-gray-700 transition hover:text-[#005911]"
                      >
                        {link}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>

          {/* Buttons */}
          <div className="items-center hidden gap-4 font-sanss md:hidden lg:flex ml-9 ">
            <Link
              to="#"
              className="font-bold text-primary-light transition border-2 border-primary-light rounded-md hover:bg-[#005911] hover:text-white py-[14.6px] px-[16px] text-[16px]"
            >
              Enquire to Participate
            </Link>
            <Link
              to="#"
              className="font-bold text-white transition rounded-md shadow bg-primary-light text-l hover:bg-white py-[14.6px] px-[16px] hover:text-primary-light text-[16px]"
            >
              Download Brochure
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-[80px] sm:h-[50px] md:h-[100px] w-auto object-contain ml-[-20px] mb-[-20px]"
              />
            </Link>
            <button
              className="text-gray-600 bg-gray-100 rounded hover:text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden">
            <ul className="space-y-4 font-semibold text-center text-[16px] pb-3">
              {/* About Links */}
              <li>
                <NavLink
                  to="/about-us"
                  className="block text-gray-700 transition hover:text-[#005911]"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sustainability"
                  className="block text-gray-700 transition hover:text-[#005911]"
                >
                  Sustainability
                </NavLink>
              </li>

              {/* Other Links */}
              {["Participate", "Sponsor", "Visit", "Conference", "Media"].map(
                (link) => (
                  <li key={link}>
                    <NavLink
                      to={`/${link.toLowerCase()}`}
                      className="block text-gray-700 transition hover:text-[#005911]"
                    >
                      {link}
                    </NavLink>
                  </li>
                )
              )}

              {/* Mobile Buttons */}
              <div className="flex flex-col items-center gap-4">
                <Link
                  to="#"
                  className="block font-bold text-primary-light transition border-2 border-primary-light rounded-md hover:bg-[#005911] hover:text-white py-[14.6px] px-[16px] text-[16px]"
                >
                  Enquire to Participate
                </Link>
                <Link
                  to="#"
                  className="block font-bold text-white transition rounded-md shadow bg-primary-light text-l hover:bg-white py-[14.6px] px-[16px] hover:text-primary-light text-[16px]"
                >
                  Download Brochure
                </Link>
              </div>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navigation;
