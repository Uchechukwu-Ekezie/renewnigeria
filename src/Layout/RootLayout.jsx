import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Header/Navigation";
import Main from "../Components/Footer/Main";
import Partners from "../Components/Partners/Partners";
import { FaWhatsapp } from "react-icons/fa";

function RootLayout() {
  return (
    <div>
      <a
        href="https://wa.me/qr/VZXHSUXBGS5IP1" // Replace this with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 flex items-center justify-center p-4 text-2xl text-white transition duration-300 transform bg-green-500 rounded-full shadow-lg bottom-6 right-6 hover:scale-110 hover:shadow-xl"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <Navigation />
      <main>
        <Outlet />
      </main>

      <footer>
        <Partners />
        <Main />
      </footer>
    </div>
  );
}

export default RootLayout;
