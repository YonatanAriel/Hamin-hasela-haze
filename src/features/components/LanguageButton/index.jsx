import styles from "./style.module.css";
import { IoLanguage } from "react-icons/io5";
import {
  setLanguage,
  setCurrentLanguage,
} from "../../languages/languagesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

function LanguageButton() {
  const dispatch = useDispatch();
  const [LsLanguage, setLSLanguage] = useState(
    localStorage.getItem("language")
  );

  const conditions = {
    option1: {
      condition: LsLanguage === "English" ? "English" : "עברית",
    },
    option2: {
      condition1: LsLanguage === "English" ? "Hebrew" : "English",
      condition2: LsLanguage === "English" ? "עברית" : "English",
    },
  };

  const fetchPreviousLanguage = useCallback(async () => {
    if (!localStorage.getItem("language")) return;
    const storedLanguage = localStorage.getItem("language");
    const languageData = await import(
      `../../../data/languages/${storedLanguage}`
    ).then((module) => module.default);
    if (languageData) {
      dispatch(setLanguage(languageData));
      dispatch(setCurrentLanguage(storedLanguage));
    }
  }, []);

  useLayoutEffect(() => {
    fetchPreviousLanguage();
  }, []);

  const changeLanguage = useCallback(async (e) => {
    const languageChosen = e.target.value;
    const newLanguage = await import(
      `../../../data/languages/${languageChosen}`
    ).then((module) => module.default);
    if (newLanguage) {
      dispatch(setLanguage(newLanguage));
      dispatch(setCurrentLanguage(languageChosen));
      localStorage.setItem("language", languageChosen);
    }
  }, []);

  return (
    <>
      <div className={styles.languageContainer}>
        <IoLanguage size={30} />
        <div className={styles.select}>
          <select onChange={changeLanguage}>
            <option value={LsLanguage} name={LsLanguage}>
              {conditions.option1.condition}
            </option>
            <option
              value={conditions.option2.condition1}
              name={conditions.option2.condition1}
            >
              {conditions.option2.condition2}
            </option>
          </select>
          <div className={styles.select_arrow}></div>
        </div>
      </div>
    </>
  );
}

export default LanguageButton;
