//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Secondscounter from "./component/SecondsCounter.jsx";

//render your react application
let countSec = 0;
let interval;

const renderCounter = () => {
  ReactDOM.render(
    <Secondscounter seconds={countSec} />,
    document.querySelector("#app")
  );
};

const startInterval = () => {
  if (!interval) {
    interval = setInterval(() => {
      countSec++;
      renderCounter();
    }, 1000);
  }
};

const stopInterval = () => {
  clearInterval(interval);
  interval = null;
};

const resetCounter = () => {
  countSec = 0;
  renderCounter();
};

/* setInterval(() => {
  countSec++
  ReactDOM.render(<Secondscounter seconds={countSec}/>, document.querySelector("#app"));
}, 1000); */

renderCounter();

document.querySelector("#startBtn").addEventListener("click", startInterval);
document.querySelector("#stopBtn").addEventListener("click", stopInterval);
document.querySelector("#resetBtn").addEventListener("click", resetCounter);
