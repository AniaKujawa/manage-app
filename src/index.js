import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./containers/Home";
import { Router, Route } from "react-router-dom";
import WeatherData from "./components/weatherdata";
import createHistory from "history/createBrowserHistory";
import registerServiceWorker from "./registerServiceWorker";

const history = createHistory();

ReactDOM.render(<Home />, document.getElementById("root"));
registerServiceWorker();
