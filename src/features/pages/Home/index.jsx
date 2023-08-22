import styles from "./style.module.css";
function Home() {
  return (
    <div className="pageContainer">
      <section className={`${styles.section1} container d-flex`}>
        <img
          src="public/assets/photos/35473270_1812671648829864_6670125652827439104_n.jpg"
          alt=""
          className="column"
        />
        <div className="column text">
          <h1>Lorem ipsum dolor, sit. </h1>
          <p>
            amet consectetur adipisicing elit. Blanditiis, dolorum libero?
            Obcaecati, laborum reiciendis dolorem voluptatum distinctio sed
            tempore pariatur similique. At suscipit nesciunt autem praesentium
            aspernatur, facilis earum fugiat ducimus nostrum dolore soluta nam
            neque ratione, saepe ea tempora placeat iure? Non commodi
            dignissimos et ad excepturi voluptatibus hic, optio tempore?
            Laborum, dicta suscipit est culpa odio rerum doloribus?
          </p>
        </div>
      </section>
      <section className={`${styles.section2} container d-flex`}>
        <div className="column text">
          <h1>Lorem ipsum dolor, sit. </h1>
          <p>
            amet consectetur adipisicing elit. Blanditiis, dolorum libero?
            Obcaecati, laborum reiciendis dolorem voluptatum distinctio sed
            tempore pariatur similique. At suscipit nesciunt autem praesentium
            aspernatur, facilis earum fugiat ducimus nostrum dolore soluta nam
            neque ratione, saepe ea tempora placeat iure? Non commodi
            dignissimos et ad excepturi voluptatibus hic, optio tempore?
            Laborum, dicta suscipit est culpa odio rerum doloribus?
          </p>
        </div>
        <img
          src="public/assets/photos/35644350_1814005412029821_9138680564587429888_n.jpg"
          alt=""
          className="column"
        />
      </section>
      <section className={`${styles.section3} container d-flex`}>
        <img
          src="public/assets/photos/unnamed (1).jpg"
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
      </section>
      <section className={`${styles.section4} container d-flex`}>
        <div className="column text">
          <h1>באוצר נערכים להגעת כלכלני מוד'יס על </h1>
          <p>
            החשש אמיתי הפעם": אחרי דוח פיץ', באוצר נערכים להגעת כלכלני מוד'יס על
            רקע ההסבר כי הדוח האופטימי יחסית של חברת הדירוג פיץ' נבע מהערכה
            שהחקיקה לא באמת תתממש, גורמים בכירים באוצר טוענים כי הדוח הבא של
            חברת מודי'ס שיתפרסם באוקטובר "יכול להביא עמו החלטה קשה למשק". כלכלני
            החברה, שכבר הורידה את תחזית הדירוג של ישראל באפריל האחרון, יגיעו
            לישראל בקרוב
          </p>
        </div>
        <img
          src="public/assets/photos/WhatsApp Image 2018-06-13 at 09.02.13 (1).jpeg"
          alt=""
          className="column"
        />
      </section>
    </div>
  );
}

export default Home;
