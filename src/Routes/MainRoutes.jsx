import { Route, Routes } from "react-router-dom";
import Home from "../features/pages/Home";
import Gallery from "../features/pages/Gallery";
import InTheArea from "../features/pages/InTheArea";
import ContactUs from "../features/pages/ContactUs";
import Header from "../features/components/Header";

function MainRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="inTheArea" element={<InTheArea />} />
        <Route path="contactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
