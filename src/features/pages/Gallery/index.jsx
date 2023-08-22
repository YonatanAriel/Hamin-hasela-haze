import styles from "./style.module.css";

function Gallery() {
  const imgs = [
    "public/assets/photos/24313135_1566128296817535_6124445963853087953_o.jpg",
    "public/assets/photos/36223731_1822101784553517_9173754899614138368_n.jpg",
    "public/assets/photos/36511496_1834823226614706_627389959103315968_n.jpg",
    "public/assets/photos/36851117_1847194788710883_7606274179410690048_n.jpg",
    "public/assets/photos/36946930_1847219648708397_3569031794781061120_n.jpg",
    "public/assets/photos/37778245_1872746329489062_8154907585200259072_n.jpg",
    "public/assets/photos/38212390_1881205438643151_7849967239351500800_n.jpg",
  ];
  return (
    <ul className={` ${styles.galleryContainer} pageContainer`}>
      {/* ${styles.imgsFlex} */}
      <li className={` d-flex`}>
        <img className="column" src="public/assets/photos/unnamed.jpg" alt="" />
        <img
          className="column"
          src="public/assets/photos/WhatsApp Image 2018-06-13 at 09.02.12.jpeg"
          alt=""
        />
      </li>
      {imgs.map((imgSrc) => (
        <li>
          <img src={imgSrc} alt="an img" />
        </li>
      ))}
      {/* <li>
        <img
          src="public/assets/photos/24313135_1566128296817535_6124445963853087953_o.jpg"
          alt=""
        />
      </li>
      <li>
        <img
          src="public/assets/photos/36223731_1822101784553517_9173754899614138368_n.jpg"
          alt=""
        />
      </li>
      <li>
        <img
          src="public/assets/photos/36511496_1834823226614706_627389959103315968_n.jpg"
          alt=""
        />
      </li>
      <li>
        <img
          src="public/assets/photos/36851117_1847194788710883_7606274179410690048_n.jpg"
          alt=""
        />
      </li>
      <li>
        <img
          src="public/assets/photos/36946930_1847219648708397_3569031794781061120_n.jpg"
          alt=""
        />
      </li>
      <li>
        <img
          src="public/assets/photos/37778245_1872746329489062_8154907585200259072_n.jpg"
          alt=""
        />
      </li>
      <li>
        <img
          src="public/assets/photos/38212390_1881205438643151_7849967239351500800_n.jpg"
          alt=""
        />
      </li> */}
    </ul>
  );
}

export default Gallery;
