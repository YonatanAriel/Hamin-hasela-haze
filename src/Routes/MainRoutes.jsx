import { Route, Routes } from "react-router-dom";
import Home from "../features/pages/Home";
import Gallery from "../features/pages/Gallery";
import InTheArea from "../features/pages/InTheArea";
import ContactUs from "../features/pages/ContactUs";

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="inTheArea" element={<InTheArea />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
