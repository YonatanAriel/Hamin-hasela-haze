import React from "react";
import MainRoutes from "../../../Routes/MainRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeScreenWidth } from "../../generalDataSlice";

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

  return <MainRoutes />;
}

export default Layout;
