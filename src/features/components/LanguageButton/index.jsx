import styles from "./style.module.css";
import { IoLanguage } from "react-icons/io5";
import { setLanguage } from "../../languages/languagesSlice";
import { useDispatch } from "react-redux";

function LanguageButton() {
  const dispatch = useDispatch();
  const changeLanguage = async (e) => {
    const userLanguageChosen = e.target.value;
    const newLanguage = await import(
      `../../../data/languages/${userLanguageChosen}`
    ).then((module) => module.default);
    newLanguage && console.log(newLanguage);
    newLanguage && dispatch(setLanguage(newLanguage));
  };
  return (
    <>
      <div className={styles.languageContainer}>
        <IoLanguage size={30} />
        <div className={styles.select}>
          <select onChange={changeLanguage}>
            <option value={"English"} name={"English"}>
              English
            </option>
            <option value={"Hebrew"} name={"Hebrew"}>
              עברית
            </option>
          </select>
          <div className={styles.select_arrow}></div>
        </div>
      </div>
    </>
  );
}

export default LanguageButton;
