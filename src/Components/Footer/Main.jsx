import React from "react";
import Down from "./Down";
import Footer from "./Footer";

function Main() {
  return (
    <section
      className="relative w-full min-h-auto bg-center bg-[#202020] bg-no-repeat bg-cover">
      {/* Overlay (Optional for Better Readability) */}
    

      {/* Content Wrapper */}
      <div className="max-w-[1170px] mx-auto">
      <div className="relative pt-16 mx-auto sm:pt-20 ">
        <Down />
      </div>

      {/* Footer */}
      <Footer />
      </div>
    </section>
  );
}

export default Main;
