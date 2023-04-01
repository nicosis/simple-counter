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
      <div className="digito icon">*</div>
      <div className="digito">{centMillar}</div>
      <div className="digito">{diezmiles}</div>
      <div className="digito">{millares}</div>
      <div className="digito">{centenas}</div>
      <div className="digito">{decenas}</div>
      <div className="digito">{unidades}</div>
    </div>
  );
};

export default SecondsCounter;
