import React from "react";
import { Link } from "react-router-dom";
// import Layout from "./Layout";

const NotFound = ({ location }) => (
	<div>
		<h1>404 - Not Found!</h1>
		<h3>
			The page <b>{location.pathname}</b> does not exist, please login and
			navigate to the right page
		</h3>
		<Link to="/">Go Login Again</Link>
	</div>
);

export default NotFound;
