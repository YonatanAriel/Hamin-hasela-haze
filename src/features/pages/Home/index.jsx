import Card from "../../components/Card";
import styles from "./style.module.css";
function Home() {
  const h1 = [
    "מעיasfasfaין הגבורה",
    "תל adfasdfשילה",
    "עfadfין עז",
    "הקfadfרון",
  ];
  const p = `           החשש אמיתי הפעם": אחרי דוח פיץ', באוצר נערכים להגעת כלכלני מוד'יס על
  רקע ההסבר כי הדוח האופטימי יחסית של חברת הדירוג פיץ' נבע מהערכה
  שהחקיקה לא באמת תתממש, גורמים בכירים באוצר טוענים כי הדוח הבא של
  חברת מודי'ס שיתפרסם באוקטובר "יכול להביא עמו החלטה קשה למשק". כלכלני
  החברה, שכבר הורידה את תחזית הדירוג של ישראל באפריל האחרון, יגיעו
  לישראל בקרוב
`;
  const imgs = [
    "public/assets/photos/35473270_1812671648829864_6670125652827439104_n.jpg",
    "public/assets/photos/35644350_1814005412029821_9138680564587429888_n.jpg",
    "public/assets/photos/35644350_1814005412029821_9138680564587429888_n.jpg",
    "public/assets/photos/WhatsApp Image 2018-06-13 at 09.02.13 (1).jpeg",
  ];

  return (
    <div className="pageContainer">
      {imgs.map((img, i) => (
        <section className={`${styles[`section${i + 1}`]} container d-flex`}>
          <Card h1={h1[i]} p={p} imgSrc={img} index={i} />
        </section>
      ))}
    </div>
  );
}

export default Home;
