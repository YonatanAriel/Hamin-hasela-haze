import styles from "./style.module.css";
import { IoLanguage } from "react-icons/io5";
import {
  setLanguage,
  setCurrentLanguage,
} from "../../languages/languagesSlice";
import { useDispatch } from "react-redux";

function LanguageButton() {
  const dispatch = useDispatch();
  const changeLanguage = async (e) => {
    const languageChosen = e.target.value;
    const newLanguage = await import(
      `../../../data/languages/${languageChosen}`
    ).then((module) => module.default);
    if (newLanguage) {
      dispatch(setLanguage(newLanguage));
      dispatch(setCurrentLanguage(languageChosen));
    }
  };
  return (
    <>
      <div className={styles.languageContainer}>
        <IoLanguage size={30} />
        <div className={styles.select}>
          <select onChange={changeLanguage}>
            <option value={"Hebrew"} name={"Hebrew"}>
              עברית
            </option>
            <option value={"English"} name={"English"}>
              English
            </option>
          </select>
          <div className={styles.select_arrow}></div>
        </div>
      </div>
    </>
  );
}

export default LanguageButton;
