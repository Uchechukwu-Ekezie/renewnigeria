import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/Image/main logo.png";

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto w-[90%] sm:px-6">
        <div className="flex items-center justify-between h-16 py-4 sm:py-14">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-[50px] sm:h-[50px] md:h-[100px] w-auto object-contain hidden lg:block"
              />
            </Link>
          </div>

          {/* Desktop and Tablet Navigation Links */}
          <div className="hidden lg:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-10 text-l">
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
                    <ul className="absolute left-0 z-10 w-48 mt-2 bg-white border border-gray-200 rounded shadow-md group-hover:block">
                      <li>
                        <NavLink
                          to="/about-us"
                          className="block px-4 py-2 text-gray-700 transition hover:bg-gray-100 hover:text-[#005911]"
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/sustainability"
                          className="block px-4 py-2 text-gray-700 transition hover:bg-gray-100 hover:text-[#005911]"
                        >
                          Sustainability
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Other Links */}
                {["Exhibit", "Visit", "Conference", "Media", "Travel"].map(
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
          <div className="items-center hidden gap-4 lg:flex">
            <a
              href="#"
              className="px-5 py-2 font-medium text-[#FAA61A] transition border-2 border-[#FAA61A] rounded-md text-l hover:bg-[#005911] hover:text-white"
            >
              Enquire to Exhibit
            </a>
            <a
              href="#"
              className="px-5 py-2 font-medium text-white transition bg-[#FAA61A] rounded-md shadow text-l hover:bg-green-800"
            >
              Download Sales Brochure
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-between w-full lg:hidden">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-[60px] sm:h-[100px] w-auto object-contain"
              />
            </Link>
            <button
              className="p-2 text-gray-600 bg-gray-100 rounded hover:text-gray-700"
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
            <ul className="space-y-4 text-xl font-semibold text-center">
              {/* About Links */}
              <li>
                <NavLink
                  to="/about-us"
                  className="block py-2 text-gray-700 transition hover:text-[#005911]"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sustainability"
                  className="block py-2 text-gray-700 transition hover:text-[#005911]"
                >
                  Sustainability
                </NavLink>
              </li>

              {/* Other Links */}
              {["Exhibit", "Visit", "Conference", "Media", "Travel"].map(
                (link) => (
                  <li key={link}>
                    <NavLink
                      to={`/${link.toLowerCase()}`}
                      className="block py-2 text-gray-700 transition hover:text-[#005911]"
                    >
                      {link}
                    </NavLink>
                  </li>
                )
              )}

              {/* Mobile Buttons */}
              <li>
                <a
                  href="#"
                  className="block py-2 font-medium text-[#FAA61A] border-t border-gray-200 hover:bg-gray-50"
                >
                  Enquire to Exhibit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-white transition bg-[#FAA61A] rounded hover:bg-green-800"
                >
                  Download Sales Brochure
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navigation;
