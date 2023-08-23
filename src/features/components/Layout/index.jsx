import React from "react";
import MainRoutes from "../../../Routes/MainRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeScreenWidth } from "../../generalDataSlice";
import Header from "../Header";
import LanguageButton from "../LanguageButton";

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

  return (
    <>
      <div style={{ position: "sticky", top: 0 }}>
        <Header />
        <LanguageButton />
      </div>
      <MainRoutes />
    </>
  );
}

export default Layout;
