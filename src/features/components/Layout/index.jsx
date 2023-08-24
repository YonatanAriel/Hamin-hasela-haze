import MainRoutes from "../../../Routes/MainRoutes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeScreenWidth } from "../../generalDataSlice";
import Header from "../Header";
import LanguageButton from "../LanguageButton";
import styles from "./style.module.css";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (["/", "/inTheArea"].includes(location)) {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImgs?.length
        );
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImgs.length]);

  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          right: 0,
          left: 0,
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
