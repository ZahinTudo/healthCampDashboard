import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
	return (
		// <h1>hello</h1>

		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route exact path='/dashboard'>
				<Dashboard />
			</Route>
		</Switch>
	);
}

export default App;
