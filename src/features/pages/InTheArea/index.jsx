import Card from "../../components/Card";
import styles from "./style.module.css";

function InTheArea() {
  const imgs = [
    "public/assets/photos/35651012_1822120771218285_4799163986597642240_n.jpg",
    "public/assets/photos/Tel-shilo10.jpg",
    "public/assets/photos/1667117763.9590.jpg",
    "public/assets/photos/1685511210.5261.jpg",
  ];
  const h1 = ["מעיין הגבורה", "תל שילה", "עין עז", "הקרון"];
  const p = `           החשש אמיתי הפעם": אחרי דוח פיץ', באוצר נערכים להגעת כלכלני מוד'יס על
  רקע ההסבר כי הדוח האופטימי יחסית של חברת הדירוג פיץ' נבע מהערכה
  שהחקיקה לא באמת תתממש, גורמים בכירים באוצר טוענים כי הדוח הבא של
  חברת מודי'ס שיתפרסם באוקטובר "יכול להביא עמו החלטה קשה למשק". כלכלני
  החברה, שכבר הורידה את תחזית הדירוג של ישראל באפריל האחרון, יגיעו
  לישראל בקרוב
`;
  return (
    <div className={` ${styles.inTheAreaContainer} pageContainer`}>
      {imgs.map((img, i) => (
        <section className={`${styles[`section${i + 1}`]} container d-flex`}>
          <Card padding0={true} h1={h1[i]} p={p} imgSrc={img} index={i} />
        </section>
      ))}
    </div>
  );
}

export default InTheArea;
