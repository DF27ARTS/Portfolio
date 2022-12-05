import "./ThemeButton.scss";

const ThemeButton = ({ setDayOrNight, dayOrNight }) => {
  const HandleClick = (value) => {
    const first_circle = document.querySelector(".first_circle");

    if (value === false) {
      // Icon animation properties day
      first_circle.style.setProperty("--translate", "0%");
      first_circle.style.setProperty("--color", "yellow");
      first_circle.style.setProperty("--center-color", "yellow");

      //Colors changed day
      document.documentElement.style.setProperty(
        "--right-panel",
        "rgb(240, 239, 239)"
      );
      document.documentElement.style.setProperty("--main-background", "#000");
      document.documentElement.style.setProperty("--body-background", "#fff");
      document.documentElement.style.setProperty("--titles", "#333");

      localStorage.setItem("theme", "day");
    } else {
      // Icon animation properties night
      first_circle.style.setProperty("--translate", "-50%");
      first_circle.style.setProperty("--color", "#ccc");
      first_circle.style.setProperty("--center-color", "#ccc");

      //Colors changed night
      document.documentElement.style.setProperty(
        "--right-panel",
        "rgb(32, 32, 32)"
      );
      document.documentElement.style.setProperty("--main-background", "#ccc");
      document.documentElement.style.setProperty("--body-background", "#000");
      document.documentElement.style.setProperty("--titles", "#ccc");

      localStorage.setItem("theme", "night");
    }
    setDayOrNight(value);
  };

  return (
    <>
      <div onClick={() => HandleClick(!dayOrNight)} className="first_circle">
        <div className="point"></div>
        <div className="point"></div>
        <div className="point"></div>
        <div className="point"></div>
        <div className="point"></div>
        <div className="point"></div>
        <label className="center_circle"></label>
      </div>
    </>
  );
};

export default ThemeButton;
