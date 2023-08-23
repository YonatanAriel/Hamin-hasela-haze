import MainRoutes from "../../../Routes/MainRoutes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeScreenWidth } from "../../generalDataSlice";
import Header from "../Header";
import LanguageButton from "../LanguageButton";
import styles from "./style.module.css";
import { useLocation } from "react-router-dom";

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(changeScreenWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imgs = [
    "public/assets/photos/35651012_1822120771218285_4799163986597642240_n.jpg",
    "public/assets/photos/1667117763.9590.jpg",
    "public/assets/photos/1685511210.5261.jpg",
    "public/assets/photos/WhatsApp-Image-2022-01-23-at-4.55.49-PM-1-e1643193600313.jpeg",
  ];
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const location = useLocation();

  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <Header />
        <LanguageButton />
      </div>
      {["/inTheArea", "/"].includes(location.pathname) && (
        <img
          className={` ${styles.img} 
          `}
          style={
            {
              // ${
              //   // currentImageIndex !== 0 ? styles.fadeOut : ""
              // }
            }
          }
          src={imgs[currentImageIndex]}
        />
      )}

      <MainRoutes />
    </>
  );
}

export default Layout;
