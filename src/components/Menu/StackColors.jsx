import React from "react";

export default function StackColors() {
  function ChangeProjectStyle(color_one, color_two, data_tribute) {
    document.documentElement.style.setProperty(
      "--first-gradient-color",
      color_one
    );
    document.documentElement.style.setProperty(
      "--second-gradient-color",
      color_two
    );

    const colorActive = document.querySelector(".color_active");
    colorActive.classList.remove("color_active");
    console.log(colorActive);

    const currentColor = document.querySelector(
      `[data-name="${data_tribute}"]`
    );

    currentColor.classList.add("color_active");
  }

  return (
    <div tabIndex={0} className="container_colors">
      <div
        data-name="color-one"
        onClick={() =>
          ChangeProjectStyle(
            "hsl(191, 100%, 50%)",
            "hsl(250, 15%, 61%)",
            "color-one"
          )
        }
        className="single_color color_active"
      ></div>
      <div
        data-name="color-two"
        onClick={() =>
          ChangeProjectStyle(
            "hsl(120, 58%, 31%)",
            "hsl(86, 81%, 35%)",
            "color-two"
          )
        }
        className="single_color"
      ></div>
      <div
        data-name="color-three"
        onClick={() =>
          ChangeProjectStyle(
            "hsl(327, 100%, 41%)",
            "rgb(109, 44, 106)",
            "color-three"
          )
        }
        className="single_color"
      ></div>
      <div
        data-name="color-four"
        onClick={() =>
          ChangeProjectStyle(
            "hsl(267, 100%, 70%)",
            "hsl(210, 89%, 71%)",
            "color-four"
          )
        }
        className="single_color"
      ></div>
      <div
        data-name="color-five"
        onClick={() =>
          ChangeProjectStyle(
            "hsl(301, 100%, 34%)",
            "hsl(212, 72%, 21%)",
            "color-five"
          )
        }
        className="single_color"
      ></div>
      <div
        data-name="color-six"
        onClick={() =>
          ChangeProjectStyle(
            "hsl(33, 100%, 50%)",
            "hsl(13, 100%, 49%)",
            "color-six"
          )
        }
        className="single_color"
      ></div>
      <div
        data-name="color-seven"
        onClick={() =>
          ChangeProjectStyle(
            "hsl(262, 97%, 54%)",
            "hsl(282, 68%, 38%)",
            "color-seven"
          )
        }
        className="single_color"
      ></div>
      <div
        data-name="color-eight"
        onClick={() =>
          ChangeProjectStyle(
            "hsl(321, 73%, 26%)",
            "hsl(0, 0%, 11%)",
            "color-eight"
          )
        }
        className="single_color"
      ></div>
      <div
        data-name="color-nine"
        onClick={() =>
          ChangeProjectStyle(
            "hsl(201, 9%, 31%)",
            "hsl(0, 0%, 73%)",
            "color-nine"
          )
        }
        className="single_color"
      ></div>
    </div>
  );
}
