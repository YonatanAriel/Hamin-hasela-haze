import { useSelector } from "react-redux";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import MobileOption from "../mobileOption";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSolidImageAlt } from "react-icons/bi";
import { PiMountainsFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  const headerData = useSelector(
    (state) => state.language.languages[0].content.header
  );
  const [showLinks, setShowLinks] = useState(false);
  const screenWidth = useSelector((state) => state.generalData.screenWidth);

  return (
    <>
      <div
        className={`${styles.headerContainer} `}
        style={{
          flexDirection: showLinks && screenWidth < 900 && "column-reverse",
        }}
      >
        <ul
          className={`${styles.linksContainer}`}
          style={{
            display: showLinks && "flex",
          }}
        >
          <li>
            <NavLink
              to={"/contactUs"}
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? styles.navLinkActive : ""
              }
              onClick={() => setShowLinks((prev) => !prev)}
            >
              {headerData.ContactUsLink}
              <FaPhoneAlt size={20} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"inTheArea"}
              className={({ isActive }) =>
                isActive ? styles.navLinkActive : undefined
              }
              onClick={() => setShowLinks((prev) => !prev)}
            >
              {headerData.InTheAreaLink}
              <PiMountainsFill size={23} />
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setShowLinks((prev) => !prev)}
              to={"gallery"}
            >
              {headerData.galleryLink} <BiSolidImageAlt size={23} />
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setShowLinks((prev) => !prev)} to={"/"}>
              {headerData.homeLink}
              <AiFillHome size={23} style={{ marginBottom: "4px" }} />
            </NavLink>
          </li>
        </ul>
        <div
          style={{
            width: screenWidth < 900 && "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            className={styles.imgContainer}
            src="public\assets\photos\logo.jpg"
          ></img>
          <div
            onClick={() => setShowLinks((prev) => !prev)}
            className={styles.mobileOption}
          >
            <MobileOption />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
