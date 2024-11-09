// import { useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import styles from "./style.module.css";

// function Card({ padding0, h1, p, imgSrc, index }) {
//   const screenWidth = useSelector((state) => state.generalData.screenWidth);
//   const currentLanguage = useSelector(
//     (state) => state.language.currentLanguage
//   );
//   const location = useLocation().pathname;
//   return (
//     <>
//       {index % 2 === 0 && screenWidth > 1300 ? (
//         <img
//           src={imgSrc}
//           alt="img"
//           className="column"
//           style={{
//             animation: "fadeIn 1s ease-in-out",

//             padding: padding0 && 0,
//             borderRadius: location === "/" && "27px",
//             maxHeight: screenWidth > 900 && "70dvh",
//             objectFit: "cover",
//             objectPosition: "center",
//           }}
//         />
//       ) : (
//         ""
//       )}
//       <div
//         className="column text"
//         style={{
//           textAlign: currentLanguage === "Hebrew" ? "right" : "left",
//         }}
//       >
//         <h1>{h1}</h1>
//         <p>{p}</p>
//       </div>
//       {!(index % 2 === 0) || screenWidth <= 1300 ? (
//         <img
//           src={imgSrc}
//           alt=""
//           className="column"
//           style={{
//             animation: "fadeIn 1s ease-in-out",

//             objectFit: "cover",
//             objectPosition: "center",
//             maxHeight: screenWidth > 900 && "70dvh",
//             padding: padding0 && 0,
//             borderRadius: location === "/" && "27px",
//           }}
//         />
//       ) : (
//         ""
//       )}
//     </>
//   );
// }

// export default Card;

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Card({ padding0, h1, p, imgSrc, index }) {
  const screenWidth = useSelector((state) => state.generalData.screenWidth);
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const location = useLocation().pathname;
  const imgsAlt = location === "/" ? "B&B image" : "Location in the area";
  const [isVisible, setIsVisible] = useState(screenWidth < 1024 ? true : false);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const imgStyle = {
    padding: padding0 && 0,
    borderRadius: location === "/" && "27px",
    maxHeight: screenWidth > 900 && "70dvh",
    objectFit: "cover",
    objectPosition: "center",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1.5s ease-in-out",
  };

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    if (screenWidth > 1024) {
      const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: "0px",
        threshold: 0.1,
      });

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (isVisible && screenWidth > 1024) {
      textRef.current.style.animation = "fadeInUp 1.5s ease-in-out";
      textRef.current.style.opacity = 1;
    }
  }, [isVisible]);

  return (
    <>
      {index % 2 === 0 && screenWidth > 1300 ? (
        <img
          ref={imgRef}
          src={imgSrc}
          alt={imgsAlt}
          className="column"
          style={imgStyle}
        />
      ) : (
        ""
      )}
      <div
        ref={textRef}
        className="column text"
        style={{
          textAlign: currentLanguage === "Hebrew" ? "right" : "left",
          opacity: isVisible || screenWidth > 1024 ? 1 : 0,
        }}
      >
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
      {!(index % 2 === 0) || screenWidth <= 1300 ? (
        <img
          ref={imgRef}
          src={imgSrc}
          alt={imgsAlt}
          className="column"
          style={imgStyle}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Card;
