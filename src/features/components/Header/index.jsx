import { useSelector } from "react-redux";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import MobileOption from "../mobileOption";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSolidImageAlt } from "react-icons/bi";
import { PiMountainsFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const [isImgSpinning, setIsImgSpinning] = useState(false);
  const headerData = useSelector((state) => state?.language?.language?.header);
  const screenWidth = useSelector((state) => state?.generalData?.screenWidth);
  const currentLanguage = useSelector(
    (state) => state?.language?.currentLanguage
  );

  const handleImgAnimation = () => {
    setIsImgSpinning(true);
    setTimeout(() => setIsImgSpinning(false), 2000);
  };

  return (
    <>
      <div
        className={`${styles.headerContainer} `}
        style={{
          flexDirection:
            showLinks && screenWidth < 900
              ? "column-reverse"
              : currentLanguage === "English" && "row-reverse",
        }}
      >
        <ul
          className={`${styles.linksContainer}`}
          style={{
            display: showLinks && "flex",
            flexDirection:
              currentLanguage === "English" &&
              screenWidth > 900 &&
              "row-reverse",
          }}
        >
          <li>
            <Link
              to={"/contactUs"}
              onClick={() => setShowLinks((prev) => !prev)}
            >
              {currentLanguage === "English" && <FaPhoneAlt size={20} />}
              {headerData?.ContactUsLink}
              {currentLanguage === "Hebrew" && <FaPhoneAlt size={20} />}
            </Link>
          </li>
          <li>
            <Link
              to={"inTheArea"}
              onClick={() => setShowLinks((prev) => !prev)}
            >
              {currentLanguage === "English" && <PiMountainsFill size={23} />}
              {headerData?.InTheAreaLink}
              {currentLanguage === "Hebrew" && <PiMountainsFill size={23} />}
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowLinks((prev) => !prev)} to={"gallery"}>
              {currentLanguage === "English" && <BiSolidImageAlt size={23} />}
              {headerData?.galleryLink}
              {currentLanguage === "Hebrew" && <BiSolidImageAlt size={23} />}
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowLinks((prev) => !prev)} to={"/"}>
              {currentLanguage === "English" && (
                <AiFillHome size={23} style={{ marginBottom: "4px" }} />
              )}
              {headerData?.homeLink}
              {currentLanguage === "Hebrew" && (
                <AiFillHome size={23} style={{ marginBottom: "4px" }} />
              )}
            </Link>
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
            className={`${styles.imgContainer} ${
              isImgSpinning ? styles.spin : ""
            }`}
            src="public\assets\photos\logo.jpg"
            onClick={handleImgAnimation}
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
