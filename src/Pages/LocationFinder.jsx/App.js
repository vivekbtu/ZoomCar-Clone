
import { useEffect, useState } from "react";
// import ReactMapGL, { Marker, FlyToInterpolator }
	// from "react-map-gl";
import { ImLocation } from "react-icons/im";
import { Marker } from "react-map-gl";
import "./App.css";
import Fly from "./Fly";

function App() {

// Setting up the state for the latitude
// and longitude
const [lat, setLat] = useState(22.5726);
const [lon, setLon] = useState(88.3639);

// Setting up the state for the map
const [viewport, setViewport] = useState({
	latitude: lat,
	longitude: lon,
	zoom: 12,
	bearing: 0,
	pitch: 0,
	width: "100%",
	height: "100vh",
});

// Map viewport updates whenever the
// latitude and longitude changes
useEffect(() => {
	setViewport({
	latitude: lat,
	longitude: lon,
	zoom: 12,
	transitionInterpolator:
		new FlyToInterpolator ({ speed: 1.0 }),
	transitionDuration: "auto",
	width: "100%",
	height: "100vh",
	});
}, [lat, lon]);

return (
	<ReactMapGL
	mapboxApiAccessToken={"pk.eyJ1Ijoidml2ZWtidHUiLCJhIjoiY2w4b3N4bHRvMHQ1NjNvbGhsaTVpazltbiJ9.mP1pNVi520gwgK5I0cGnRw"}
	{...viewport}
	onViewportChange={(viewport) => setViewport(viewport)}
	>
	<Marker latitude={lat} longitude={lon}>
		<ImLocation size="300px" />
	</Marker>
	<Fly setLat={setLat} setLon={setLon} />
	</ReactMapGL>
);
}

export default App;
