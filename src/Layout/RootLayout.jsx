import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Header/Navigation";
import Main from "../Components/Footer/Main";
import Partners from "../Components/Partners/Partners";





function RootLayout() {
  return (
    <div>
    <Navigation/>
      <main>
        <Outlet />
      </main>
      
      <footer>
      <Partners/>
        <Main/>
      </footer>
    </div>
  );
}

export default RootLayout;