import styles from "./style.module.css";
import { IoLanguage } from "react-icons/io5";
import {
  setLanguage,
  setCurrentLanguage,
} from "../../languages/languagesSlice";
import { useDispatch } from "react-redux";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";

function LanguageButton() {
  const [LsLanguage, setLSLanguage] = useState(
    localStorage.getItem("language")
  );
  const userPreferredLanguage = useMemo(
    () => navigator.language.split("-")[0],
    []
  );
  const dispatch = useDispatch();
  const condition =
    LsLanguage === "English" ||
    (userPreferredLanguage === "en" && LsLanguage !== "Hebrew");

  const ChangeLanguage = useCallback(async (languageName, storeInLS) => {
    const newLanguage = await import(
      /* webpackInclude: /(English|Hebrew)\.js$/ */
      `../../../data/languages/${languageName}.js`
    ).then((module) => module.default);

    if (newLanguage) {
      dispatch(setLanguage(newLanguage));
      dispatch(setCurrentLanguage(languageName));
      storeInLS && localStorage.setItem("language", languageName);
    }
  }, []);

  const fetchPreviousLanguage = useCallback(() => {
    if (localStorage.getItem("language")) {
      const storedLanguage = localStorage.getItem("language");
      ChangeLanguage(storedLanguage);

      return;
    }
    if (!(userPreferredLanguage === "he")) ChangeLanguage("English", true);
  }, []);

  useLayoutEffect(() => {
    fetchPreviousLanguage();
  }, []);

  const switchLanguage = useCallback((e) => {
    const languageChosen = e.target.value;
    ChangeLanguage(languageChosen, true);
  }, []);

  return (
    <>
      <div className={styles.languageContainer}>
        <IoLanguage size={30} />
        <div className={styles.select}>
          <select onChange={switchLanguage}>
            {condition ? (
              <>
                <option value={"English"} name={"English"}>
                  {"English"}
                </option>
                <option value={"Hebrew"} name={"Hebrew"}>
                  {"עברית"}
                </option>
              </>
            ) : (
              <>
                <option value={"Hebrew"} name={"Hebrew"}>
                  {"עברית"}
                </option>
                <option value={"English"} name={"English"}>
                  {"English"}
                </option>
              </>
            )}
          </select>
          <div className={styles.select_arrow}></div>
        </div>
      </div>
    </>
  );
}

export default LanguageButton;
