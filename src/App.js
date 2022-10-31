import "./App.css";
import { useState } from "react";
import MainPage from "./components/MainPage/MainPage";
import EnglishSpanish from "./components/English_Spanish_Button/EnglishSpanish";
import DayAndNightButton from "./components/DayAndNightButton/DayAndNaightButton";

function App() {
  const [dayOrNight, setDayOrNight] = useState(true);
  const [language, setLanguage] = useState(false);

  return (
    <>
      <MainPage dayOrNight={dayOrNight} language={language} />
      <EnglishSpanish
        dayOrNight={dayOrNight}
        language={language}
        setLanguage={setLanguage}
      />
      <DayAndNightButton
        setDayOrNight={setDayOrNight}
        dayOrNight={dayOrNight}
      />
    </>
  );
}

export default App;
