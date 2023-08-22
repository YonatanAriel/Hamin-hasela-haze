import { useSelector } from "react-redux";

function Card({ padding0, h1, p, imgSrc, index }) {
  const screenWidth = useSelector((state) => state.generalData.screenWidth);

  return (
    <>
      {index % 2 === 0 && screenWidth > 1300 ? (
        <img
          src={imgSrc}
          alt="img"
          className="column"
          style={{ padding: padding0 && 0 }}
        />
      ) : (
        ""
      )}
      <div className="column text">
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
      {!(index % 2 === 0) || screenWidth <= 1300 ? (
        <img
          src={imgSrc}
          alt=""
          className="column"
          style={{ padding: padding0 && 0 }}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Card;
