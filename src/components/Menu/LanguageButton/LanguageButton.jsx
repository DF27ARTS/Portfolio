import "./LanguageButton.scss";

const LanguageButton = ({ setLanguage }) => {
  const SelectLanguage = () => {
    const containerLanguage = document.querySelector(".container_language");
    const currentLanguage =
      getComputedStyle(containerLanguage).getPropertyValue("--language");

    if (currentLanguage !== "-100%") {
      containerLanguage.style.setProperty("--language", "-100%");
      setLanguage(true);
      localStorage.setItem("language", "English");
    } else {
      containerLanguage.style.setProperty("--language", "0%");
      setLanguage(false);
      localStorage.setItem("language", "Spanish");
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

export default LanguageButton;
