import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdDateRange, MdLocationOn } from "react-icons/md";

const FooterInfo = () => {
  return (
    <div className="bg-[#066C16] text-white  w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-center px-6 py-4">
        {/* Left Section: Date and Location */}
        <div className="flex items-center gap-8 text-sm">
          {/* Date */}
          <div className="flex items-center gap-2">
            <MdDateRange size={20} />
            <span>15 - 17 October 2024</span>
          </div>

       
        </div>
           {/* Location */}
           <div className="flex items-center gap-2">
            <MdLocationOn size={20} />
            <span>Eko Hotel, Lagos State, Nigeria</span>
          </div>

        {/* center Section: Social Icons */}
        <div className="flex items-center gap-4 mt-4 lg:mt-0">
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 text-green-600 bg-white rounded-full hover:bg-gray-100"
            aria-label="Facebook"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 text-green-600 bg-white rounded-full hover:bg-gray-100"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 text-green-600 bg-white rounded-full hover:bg-gray-100"
            aria-label="Instagram"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 text-green-600 bg-white rounded-full hover:bg-gray-100"
            aria-label="YouTube"
          >
            <FaYoutube size={16} />
          </a>

          {/*right section WhatsApp Icon with Link */}
          <a
            href="https://wa.me/qr/VZXHSUXBGS5IP1" // Replace this with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 text-green-600 bg-white rounded-full hover:bg-gray-100"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
