import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "../../styles/index.scss";

export const Light = props => {
	const [encendido, setEncendido] = useState(false);
	console.log(props);
	console.log(props.color);
	console.log(props.active);
	console.log(props.handleActive);

	function cambiar() {
		if (props.active[props.color]) {
			console.log("Voy a cambiar");
			return;
		} else if (props.color == "red") {
			props.handleActive({
				red: true,
				yellow: false,
				green: false
			});
		} else if (props.color == "yellow") {
			props.handleActive({
				red: false,
				yellow: true,
				green: false
			});
		} else if (props.color == "green") {
			props.handleActive({
				red: false,
				yellow: false,
				green: true
			});
		}
	}

	return (
		<div
			className={`${props.color} lamp ${
				props.active[props.color] ? "sombra" : ""
			}`}
			onClick={cambiar}></div>
	);
};

Light.propTypes = {
	color: PropTypes.string,
	active: PropTypes.object,
	handleActive: PropTypes.func
};
