function Card({ padding0, h1, p, imgSrc, index }) {
  return (
    <>
      {index % 2 === 0 ? (
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
      {!(index % 2 === 0) ? (
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

{
  /* <section className={`${styles[`section${i + 1}`]} container d-flex`}>
  {!(i % 2 === 0) ? (
    <img src={img} alt="img" className="column" style={{ padding: 0 }} />
  ) : (
    ""
  )}
  <div className="column text">
    <h1>{h1[i]}</h1>
    <p>{p}</p>
  </div>
  {i % 2 === 0 ? (
    <img src={img} alt="" className="column" style={{ padding: 0 }} />
  ) : (
    ""
  )}
</section>; */
}

/* <section className={`${styles.section1} container d-flex`}>
<img
  src="public/assets/photos/35473270_1812671648829864_6670125652827439104_n.jpg"
  alt=""
  className="column"
/>
<div className="column text">
  <h1>באוצר נערכים להגעת כלכלני מוד'יס על</h1>
  <p>
    החשש אמיתי הפעם": אחרי דוח פיץ', באוצר נערכים להגעת כלכלני מוד'יס על
    רקע ההסבר כי הדוח האופטימי יחסית של חברת הדירוג פיץ' נבע מהערכה
    שהחקיקה לא באמת תתממש, גורמים בכירים באוצר טוענים כי הדוח הבא של
    חברת מודי'ס שיתפרסם באוקטובר "יכול להביא עמו החלטה קשה למשק". כלכלני
    החברה, שכבר הורידה את תחזית הדירוג של ישראל באפריל האחרון, יגיעו
    לישראל בקרוב
  </p>
</div>
</section> */
