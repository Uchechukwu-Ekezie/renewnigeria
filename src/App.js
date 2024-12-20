import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import Media from "./Pages/Media";
import Visit from "./Pages/Visit";
import Participate from "./Pages/Participate";
import Conference from "./Pages/Conference";
import Sponsor from "./Pages/Sponsor";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className=" h-dvh">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="Media" element={<Media/>}/>
            <Route path="Visit" element={<Visit/>}/>
            <Route path="Sponsor" element={<Sponsor/>}/>
            <Route path="Conference" element={<Conference/>}/>
            <Route path="Participate" element={<Participate/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
