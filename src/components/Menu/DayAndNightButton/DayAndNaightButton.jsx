import "./DayAndNightButton.scss";

const DayAndNightButton = ({ setDayOrNight, dayOrNight }) => {
  const HandleClick = (value) => {
    const first_circle = document.querySelector(".first_circle");
    // const body = document.querySelector("body");
    const titles = document.querySelectorAll(".titles");

    if (value === true) {
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
      titles.forEach((title) =>
        title.style.setProperty("--button-color", "rgb(238, 233, 233)")
      );
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
      titles.forEach((title) =>
        title.style.setProperty("--button-color", "rgb(238, 233, 233)")
      );
    }
    setDayOrNight(value);
  };

  // function handlerColorChage(value) {
  //   if (value === "value1") {
  //     document.documentElement.style.setProperty(
  //       "--first-gradient-color",
  //       "#00d2ff"
  //     );
  //     document.documentElement.style.setProperty(
  //       "--second-gradient-color",
  //       "#928DAB"
  //     );
  //   } else if (value === "value2") {
  //     document.documentElement.style.setProperty(
  //       "--first-gradient-color",
  //       "#fe8c00"
  //     );
  //     document.documentElement.style.setProperty(
  //       "--second-gradient-color",
  //       "#f83600"
  //     );
  //   }
  // }

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

export default DayAndNightButton;
