import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Header/Navigation";
import Main from "../Components/Footer/Main";
import Partners from "../Components/Partners/Partners";
import {  FaWhatsapp } from "react-icons/fa";

function RootLayout() {
  return (
    <div>
  
      <a
          href="https://wa.me/qr/VZXHSUXBGS5IP1" // Replace this with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg text-2xl flex items-center justify-center hover:scale-110 hover:shadow-xl transition transform duration-300 z-50"
          aria-label="WhatsApp"
        >
          <FaWhatsapp  />
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
