import Card from "../../components/Card";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
function Home() {
  const imgs = useSelector((state) => state.generalData.imgs.homeImgs);
  const sectionsData = useSelector(
    (state) => state.language.languages[0].content.home.sections
  );

  return (
    <div className="pageContainer">
      {imgs.map((img, i) => (
        <section className={`${styles[`section${i + 1}`]} container d-flex`}>
          <Card
            key={img}
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

export default Home;
