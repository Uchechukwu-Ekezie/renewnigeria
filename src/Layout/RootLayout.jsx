import React from "react";
import { Outlet } from "react-router-dom";



function RootLayout() {
  return (
    <div>
     
      <main>
        <Outlet />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default RootLayout;