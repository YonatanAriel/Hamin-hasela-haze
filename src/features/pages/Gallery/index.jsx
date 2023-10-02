import { useSelector } from "react-redux";
import styles from "./style.module.css";
import { useState } from "react";

function Gallery() {
  const imgs = useSelector((state) => state?.generalData?.imgs?.galleryImgs);
  const [showFullImg, setShowFullImg] = useState({ show: false, imgSrc: "" });
  return (
    <>
      <img className={styles.backgroundImg} src={imgs[0]} />
      <ul className={` ${styles.galleryContainer} `}>
        {/* pageContainer */}
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
            <img src={imgSrc} alt="an image" />
          </li>
        ))}
        {/* <li className={` d-flex`}>
        <img
          className="column"
          src="/assets/photos/unnamed.jpg"
          alt="a guest house"
        />
        <img
          className="column"
          src="/assets/photos/WhatsApp Image 2018-06-13 at 09.02.12.jpeg"
          alt=""
        />
      </li> */}
      </ul>
    </>
  );
}

export default Gallery;
