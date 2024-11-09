import { useSelector } from "react-redux";
import styles from "./style.module.css";
import { useState } from "react";

function Gallery() {
  const imgs = useSelector((state) => state?.generalData?.imgs?.galleryImgs);
  const [showFullImg, setShowFullImg] = useState({ show: false, imgSrc: "" });
  return (
    <>
      <img
        alt="Gallery background"
        className={styles.backgroundImg}
        src={imgs[0]}
      />
      <ul className={` ${styles.galleryContainer} `}>
        {imgs?.map((imgSrc) => (
          <li
            key={imgSrc}
            style={{
              display:
                showFullImg.show && showFullImg.imgSrc !== imgSrc ? "none" : "",
            }}
            onClick={() =>
              setShowFullImg((prev) => ({ show: !prev.show, imgSrc }))
            }
            className={
              showFullImg.show && showFullImg.imgSrc === imgSrc
                ? styles.bigImg
                : ""
            }
          >
            <img src={imgSrc} alt="B&B gallery image" />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Gallery;
