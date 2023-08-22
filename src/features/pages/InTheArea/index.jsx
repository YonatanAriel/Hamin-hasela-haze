import { useSelector } from "react-redux";
import Card from "../../components/Card";
import styles from "./style.module.css";

function InTheArea() {
  const imgs = useSelector((state) => state.generalData.imgs.inTheAreaImgs);
  const sectionsData = useSelector(
    (state) => state.language.languages[0].content.inTheArea.sections
  );

  return (
    <div className={` ${styles.inTheAreaContainer} pageContainer`}>
      {imgs.map((img, i) => (
        <section className={`${styles[`section${i + 1}`]} container d-flex`}>
          <Card
            key={img}
            padding0={true}
            h1={sectionsData[`section${i + 1}`].h1}
            p={sectionsData[`section${i + 1}`].p}
            imgSrc={img}
            index={i}
          />
        </section>
      ))}
    </div>
  );
}

export default InTheArea;
