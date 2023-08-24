import MainRoutes from "../../../Routes/MainRoutes";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeScreenWidth } from "../../generalDataSlice";
import Header from "../Header";
import LanguageButton from "../LanguageButton";
import styles from "./style.module.css";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const backgroundImgs = useSelector((state) =>
    location === "/"
      ? state.generalData.imgs.homeBackgroundImgs
      : location === "/inTheArea"
      ? state.generalData.imgs.inTheAreaBackgroundImgs
      : []
  );
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
  // const imgs = [
  //   "public/assets/photos/35651012_1822120771218285_4799163986597642240_n.jpg",
  //   "public/assets/photos/1667117763.9590.jpg",
  //   "public/assets/photos/1685511210.5261.jpg",
  //   "public/assets/photos/WhatsApp-Image-2022-01-23-at-4.55.49-PM-1-e1643193600313.jpeg",
  // ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImgs?.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          right: 0,
          left: 0,
          // minWidth: "100dvw",
        }}
      >
        <Header />
        <LanguageButton />
      </div>
      {["/inTheArea", "/"].includes(location) && (
        <img
          className={` ${styles.img}
          `}
          style={{
            animation: "fadeInUp 0.7s linear ",
          }}
          src={backgroundImgs[currentImageIndex]}
        ></img>
      )}

      <MainRoutes />
    </>
  );
}

export default Layout;
