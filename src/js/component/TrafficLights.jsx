import React, { useState } from "react";
import { Light } from "./Light.jsx";
import "../../styles/index.scss";
import { func } from "prop-types";

export const TrafficLights = () => {
	const [lightActive, setLightActive] = useState({
		red: false,
		yellow: false,
		green: false
	});
	return (
		<div className="all">
			<div className="padreposte">
				<div className="poste"></div>
			</div>
			<div id="trafficlights">
				<div id="container">
					<Light
						color="red"
						active={lightActive}
						handleActive={setLightActive}
					/>
					<Light
						color="yellow"
						active={lightActive}
						handleActive={setLightActive}
					/>
					<Light
						color="green"
						active={lightActive}
						handleActive={setLightActive}
					/>
				</div>
			</div>
		</div>
	);
};
