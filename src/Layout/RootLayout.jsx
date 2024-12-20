import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../Components/Header/Navigation";
import Main from "../Components/Footer/Main";
import Partners from "../Components/Partners/Partners";
import { FaWhatsapp } from "react-icons/fa";

function RootLayout() {
  const { pathname } = useLocation(); // Tracks the current route

  useEffect(() => {
    // Scroll to the top whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {/* WhatsApp Floating Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=%2B2348034474677&text&type=phone_number&app_absent=0&wame_ctl=1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 flex items-center justify-center p-4 text-2xl text-white transition duration-300 transform bg-green-500 rounded-full shadow-lg bottom-6 right-6 hover:scale-110 hover:shadow-xl"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer>
        <Partners />
        <Main />
      </footer>
    </div>
  );
}

export default RootLayout;
