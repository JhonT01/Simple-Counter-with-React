//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

let counter = 0;
//render your react application
setInterval(function() {
	ReactDOM.render(<Home timer={counter} />, document.querySelector("#app"));
	counter++;
}, 1000);
