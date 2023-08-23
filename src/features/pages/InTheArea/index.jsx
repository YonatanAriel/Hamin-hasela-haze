import { useSelector } from "react-redux";
import Card from "../../components/Card";
import styles from "./style.module.css";

function InTheArea() {
  const imgs = useSelector((state) => state?.generalData?.imgs?.inTheAreaImgs);
  const sectionsData = useSelector(
    (state) => state?.language?.language?.inTheArea?.sections
  );

  return (
    <div className={` ${styles.inTheAreaContainer} pageContainer`}>
      {imgs?.map((img, i) => (
        <section
          key={img}
          className={`${styles[`section${i + 1}`]} container d-flex`}
        >
          <Card
            padding0={true}
            h1={sectionsData[`section${i + 1}`]?.h1}
            p={sectionsData[`section${i + 1}`]?.p}
            imgSrc={img}
            index={i}
          />
        </section>
      ))}
    </div>
  );
}

export default InTheArea;
