//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

let unidad = 0;
let decena = 0;
let centena = 0;
let milecima = 0;
// horas son = 3600
//render your react application
setInterval(function() {
	ReactDOM.render(
		<Home
			unidades={unidad}
			decenas={decena}
			centenas={centena}
			milecimas={milecima}
		/>,
		document.querySelector("#app")
	);

	//Logica de los minutos

	unidad++;

	if (unidad == 10) {
		decena++;
		unidad = 0;
		if (decena == 10) {
			centena++;
			decena = 0;
			if (centena == 10) {
				milecima++;
				centena = 0;
				if (milecima == 10) {
					unidad, decena, centena, (milecima = 0);
				}
			}
		}
	}
}, 1000);
