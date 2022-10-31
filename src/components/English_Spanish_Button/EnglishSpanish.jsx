import "./EnglishSpanish.scss";
import { IoLanguageOutline } from "react-icons/io5";
import { useState } from "react";

const EnglishSpanish = ({ dayOrNight, setLanguage, language }) => {
  const [LanguageSelected, setLanguageSelected] = useState(false);

  const HandleClick = (value) => {
    setLanguage(value);
    setLanguageSelected(value);
  };

  return (
    <>
      <IoLanguageOutline
        tabIndex={0}
        className={
          dayOrNight ? "languages_icon" : "languages_icon languages_icon_night"
        }
      />
      <button onClick={() => HandleClick(false)} className="languages spanish">
        <div className={!LanguageSelected ? "language_text" : ""}>
          {!language ? "Español" : "Spanish"}
        </div>
      </button>
      <button onClick={() => HandleClick(true)} className="languages">
        <div className={LanguageSelected ? "language_text" : ""}>
          {!language ? "Ingles" : "English"}
        </div>
      </button>
    </>
  );
};

export default EnglishSpanish;
