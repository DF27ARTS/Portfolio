import { useState } from "react";
import MainPage from "./components/MainPage/MainPage";
import SingleProject from "./components/SingleProject/SingleProject";
import Menu from "./components/Menu/Menu";

function App() {
  const [dayOrNight, setDayOrNight] = useState(true);
  const [language, setLanguage] = useState(false);
  const [currentProjectObject, setCurrentProjectObject] = useState({});

  return (
    <>
      <MainPage
        setDayOrNight={setDayOrNight}
        setLanguage={setLanguage}
        setCurrentProjectObject={setCurrentProjectObject}
        language={language}
      />
      <SingleProject
        App_Object={currentProjectObject}
        setCurrentProjectObject={setCurrentProjectObject}
        language={language}
        dayOrNight={dayOrNight}
      />

      <Menu
        language={language}
        setLanguage={setLanguage}
        dayOrNight={dayOrNight}
        setDayOrNight={setDayOrNight}
      />
    </>
  );
}

export default App;
