//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Secondscounter from "./component/SecondsCounter.jsx";

//render your react application
let countSec = 0;

setInterval(() => {
  countSec++
  ReactDOM.render(<Secondscounter seconds={countSec}/>, document.querySelector("#app"));
}, 1000);
