import styles from "./style.module.css";
import { useSelector } from "react-redux";

function ContactUs() {
  const data = useSelector(
    (state) => state.language.languages[0].content.contactUs
  );

  return (
    <div className={`${styles.contactUsContainer}`}>
      <div className="container d-flex">
        <div
          className={`${styles.contactDetails} column  text d-flex 
        `}
        >
          <h1></h1>
        </div>
        <img
          className="column"
          src="public/assets/photos/24131129_1566127380150960_1819579110054555952_n.jpg"
        />
      </div>
    </div>
  );
}

export default ContactUs;
