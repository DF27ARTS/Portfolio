import "./DayAndNightButton.scss";

const DayAndNightButton = ({ setDayOrNight, dayOrNight }) => {
  const HandleClick = (value) => {
    const first_circle = document.querySelector(".first_circle");
    const body = document.querySelector("body");
    const titles = document.querySelectorAll(".titles");

    if (value === true) {
      first_circle.style.setProperty("--translate", "0%");
      first_circle.style.setProperty("--color", "yellow");
      first_circle.style.setProperty("--center-color", "yellow");
      body.style.setProperty("--main-background", "#000");
      body.style.setProperty("--body-background", "#fff");
      titles[0].style.setProperty("--button-color", "rgb(238, 233, 233)");
      titles[1].style.setProperty("--button-color", "rgb(238, 233, 233)");
    } else {
      first_circle.style.setProperty("--translate", "-50%");
      first_circle.style.setProperty("--color", "#ccc");
      first_circle.style.setProperty("--center-color", "#ccc");
      body.style.setProperty("--main-background", "#ccc");
      body.style.setProperty("--body-background", "#000");
      titles[0].style.setProperty("--button-color", "rgb(34, 34, 34)");
      titles[1].style.setProperty("--button-color", "rgb(34, 34, 34)");
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

export default DayAndNightButton;
