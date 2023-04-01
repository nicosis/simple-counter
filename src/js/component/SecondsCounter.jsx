import React from "react";

const SecondsCounter = ({ seconds }) => {
  let secString = seconds.toString().padStart(6, "0");

  return (
    <div className="contenedor">
      <div className="panel shadow">
        <i className="fa-solid fa-ellipsis fli-1" />
        <i className="fa-solid fa-ellipsis fli-2" />
        <i className="fa-solid fa-ellipsis fli-3" />
        <i className="fa-solid fa-ellipsis fli-4" />
        <i className="fa-solid fa-ellipsis fli-5" />
      </div>
      <div className="digito shadow">{secString}</div>
      <div className="panel shadow">
        <a id="startBtn">
          <i className="fa-regular fa-circle-play panel-btn"></i>
        </a>
        <a id="stopBtn">
          <i className="fa-regular fa-circle-stop panel-btn"></i>
        </a>
        <a id="resetBtn">
          <i className="fa-solid fa-ban panel-btn"></i>
        </a>
      </div>
    </div>
  );
};

export default SecondsCounter;
