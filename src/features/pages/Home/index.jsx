import Card from "../../components/Card";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
function Home() {
  const imgs = useSelector((state) => state?.generalData?.imgs?.homeImgs);
  const sectionsData = useSelector(
    (state) => state?.language?.language?.home?.sections
  );
  return (
    <div className="pageContainer">
      <h1
        style={{
          margin: "8dvh auto",
          fontSize: "4rem",
          color: "white",
          maxWidth: "38%",
          textAlign: "center",
          textShadow: "black 1px 1px",
          animation: "growAndFadeIn .7s linear ",
        }}
      >
        כל מה שתצטרכו לדעת עלינו
      </h1>
      {imgs?.map((img, i) => (
        <section
          key={img + 1}
          className={`${styles[`section${i + 1}`]} container d-flex`}
          style={{ borderRadius: "3px" }}
        >
          <Card
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

export default Home;
