import React from "react";
import Down from "./Down";
import Footer from "./Footer";

function Main() {
  return (
    <section
      className="relative w-full min-h-auto bg-center bg-[#202020] bg-no-repeat bg-cover">
      {/* Overlay (Optional for Better Readability) */}
    

      {/* Content Wrapper */}
      <div className="max-w-screen-2xl mx-auto">
      <div className="relative w-[90%] mx-auto pt-16 sm:pt-20 ">
        <Down />
      </div>

      {/* Footer */}
      <Footer />
      </div>
    </section>
  );
}

export default Main;
