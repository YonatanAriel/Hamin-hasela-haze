import { useSelector } from "react-redux";
import styles from "./style.module.css";

function Gallery() {
  const imgs = useSelector((state) => state?.generalData?.imgs?.galleryImgs);
  return (
    <ul className={` ${styles.galleryContainer} pageContainer`}>
      {imgs?.map((imgSrc) => (
        <li key={imgSrc}>
          <img src={imgSrc} alt="a guest house" />
        </li>
      ))}
      {/* <li className={` d-flex`}>
        <img
          className="column"
          src="public/assets/photos/unnamed.jpg"
          alt="a guest house"
        />
        <img
          className="column"
          src="public/assets/photos/WhatsApp Image 2018-06-13 at 09.02.12.jpeg"
          alt=""
        />
      </li> */}
    </ul>
  );
}

export default Gallery;
