import "./EnglishSpanish.scss";
import { useState } from "react";

const EnglishSpanish = ({ setLanguage }) => {
  const [LanguageSelected, setLanguageSelected] = useState(false);

  const SelectLanguage = () => {
    const containerLanguage = document.querySelector(".container_language");
    // const slider =
    //   getComputedStyle(containerLanguage).getPropertyValue("--language");
    // console.log(slider);
    if (LanguageSelected === false) {
      containerLanguage.style.setProperty("--language", "-100%");
      setLanguage(true);
      setLanguageSelected(true);
    } else {
      containerLanguage.style.setProperty("--language", "0%");
      setLanguage(false);
      setLanguageSelected(false);
    }
  };

  return (
    <div onClick={() => SelectLanguage()} className="container_language">
      <div className="spanish"></div>
      <div className="english">
        <div className="rows_one"></div>
        <div className="rows_two"></div>
        <div className="rows_three"></div>
        <div className="rows_four"></div>
      </div>
    </div>
  );
};

export default EnglishSpanish;
