import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../Assets/Image/logowe.png";
import report from "../../Assets/report.pdf";

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow">
      <div className="w-full px-6 sm:px-6 lg:px-[60px]">
        <div className="flex items-center justify-between h-[75px]">
          {/* Logo Section */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-[40px] object-contain" />
            <h1 className="font-sanss font-[600] text-[3.2px] leading-[4.17px] text-center mt-1">
              FIRST NATIONAL LEGISLATIVE SUMMIT & EXPO ON RENEWABLE ENERGY
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10 text-[18px] font-medium text-[#504F53]">
              <li
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <NavLink to="/#" className="transition hover:text-[#005911]">
                  About
                </NavLink>
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
            <a
              href={report}
              className="px-6 py-3 font-bold text-white rounded bg-primary-light hover:bg-white hover:text-primary-light"
              download
            >
              Download Brochure
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="absolute left-0 right-0 z-20 pb-3 bg-white lg:hidden">
            <ul className="space-y-4 text-center text-[16px] font-semibold">
              <li>
                <NavLink
                  to="/about-us"
                  className="block text-gray-700 hover:text-[#005911]"
                >
                  About Us
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
                <a
                  href={report}
                  className="px-6 py-3 font-bold text-white rounded bg-primary-light hover:bg-white hover:text-primary-light"
                  download
                >
                  Download Brochure
                </a>
              </div>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navigation;
