import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/Image/main logo.png";

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-6 lg:px-[60px]">
        <div className="flex items-center justify-between h-[75px]">
          {/* Logo Section */}
          <Link to="/" className="flex flex-col items-center">
            <img src={logo} alt="Logo" className="h-[50px] object-contain" />
            <p className="font-sans font-[600] text-primary-light leading-[5.21px] text-center text-[4px] lg:mt-[-8px]">
              FIRST NATIONAL LEGISLATIVE SUMMIT & <br />
              EXPO ON RENEWABLE ENERGY
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10 text-[18px] font-medium text-[#504F53]">
              <li
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <NavLink to="#" className="transition hover:text-[#005911]">
                  About
                </NavLink>
                {isDropdownOpen && (
                  <ul className="absolute left-0 z-10 w-48 bg-white border rounded shadow-md">
                    <li>
                      <NavLink
                        to="/about-us"
                        className="block px-4 py-2 text-[#504F53] hover:bg-gray-100 hover:text-[#005911]"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/sustainability"
                        className="block px-4 py-2 text-[#504F53] hover:bg-gray-100 hover:text-[#005911]"
                      >
                        Sustainability
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              {["Participate", "Sponsor", "Visit", "Conference", "Media"].map(
                (link) => (
                  <li key={link}>
                    <NavLink
                      to={`/${link.toLowerCase()}`}
                      className="transition hover:text-[#005911]"
                    >
                      {link}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden gap-4 lg:flex">
            <Link
              to="#"
              className="px-6 py-3 font-bold text-primary-light border-2 border-primary-light rounded hover:bg-[#005911] hover:text-white"
            >
              Enquire to Participate
            </Link>
            <Link
              to="#"
              className="px-6 py-3 font-bold text-white rounded bg-primary-light hover:bg-white hover:text-primary-light"
            >
              Download Brochure
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden">
            <ul className="space-y-4 text-center text-[16px] font-semibold">
              <li>
                <NavLink
                  to="/about-us"
                  className="block text-gray-700 hover:text-[#005911]"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sustainability"
                  className="block text-gray-700 hover:text-[#005911]"
                >
                  Sustainability
                </NavLink>
              </li>
              {["Participate", "Sponsor", "Visit", "Conference", "Media"].map(
                (link) => (
                  <li key={link}>
                    <NavLink
                      to={`/${link.toLowerCase()}`}
                      className="block text-gray-700 hover:text-[#005911]"
                    >
                      {link}
                    </NavLink>
                  </li>
                )
              )}
              <div className="flex flex-col items-center gap-4">
                <Link
                  to="#"
                  className="px-6 py-3 font-bold text-primary-light border-2 border-primary-light rounded hover:bg-[#005911] hover:text-white"
                >
                  Enquire to Participate
                </Link>
                <Link
                  to="#"
                  className="px-6 py-3 font-bold text-white rounded bg-primary-light hover:bg-white hover:text-primary-light"
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
