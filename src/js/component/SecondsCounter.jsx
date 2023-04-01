import React from "react";

const SecondsCounter = ({ seconds }) => {
  let secString = seconds.toString();
  let unidades = secString.charAt(secString.length - 1);
  let decenas = "0";
  let centenas = "0";
  let millares = "0";
  let diezmiles = "0";
  let centMillar = "0";
  if (secString.length > 1) {
    decenas = secString.charAt(secString.length - 2);
  } else if (secString.length > 2) {
    centenas = secString.charAt(secString.length - 3);
  } else if (secString.length > 3) {
    millares = secString.charAt(secString.length - 4);
  } else if (secString.length > 4) {
    diezmiles = secString.charAt(secString.length - 5);
  } else if (secString.length > 5) {
    centMillar = secString.charAt(secString.length - 6);
  }
  return (
    <div className="contenedor">
      <div className="panel shadow">
        <i className="fa-solid fa-ellipsis fli-1"/>
        <i className="fa-solid fa-ellipsis fli-2"/>
        <i className="fa-solid fa-ellipsis fli-3"/>
        <i className="fa-solid fa-ellipsis fli-4"/>
        <i className="fa-solid fa-ellipsis fli-5"/>
      </div>
      <div className="digito shadow">{centMillar}</div>
      <div className="digito shadow">{diezmiles}</div>
      <div className="digito shadow">{millares}</div>
      <div className="digito shadow">{centenas}</div>
      <div className="digito shadow">{decenas}</div>
      <div className="digito shadow">{unidades}</div>
      <div className="panel shadow">
        <a id='startBtn'><i className="fa-regular fa-circle-play panel-btn"></i></a>
        <a id='stopBtn'><i className="fa-regular fa-circle-stop panel-btn"></i></a>
        <a id='resetBtn'><i className="fa-solid fa-ban panel-btn"></i></a>
      </div>
    </div>
  );
};

export default SecondsCounter;
