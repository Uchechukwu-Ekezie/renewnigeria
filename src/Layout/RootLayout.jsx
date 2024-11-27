import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Header/Navigation";
import Main from "../Components/Footer/Main";




function RootLayout() {
  return (
    <div>
    <Navigation/>
      <main>
        <Outlet />
      </main>
      <footer>
        <Main/>
      </footer>
    </div>
  );
}

export default RootLayout;