import styles from "./style.module.css";
import { IoLanguage } from "react-icons/io5";

function LanguageButton() {
  return (
    <>
      <div className={styles.languageContainer}>
        <IoLanguage size={30} />
        <div className={styles.select}>
          <select>
            <option>עברית</option>
            <option>English</option>
          </select>
          <div className={styles.select_arrow}></div>
        </div>
      </div>
    </>
  );
}

export default LanguageButton;
