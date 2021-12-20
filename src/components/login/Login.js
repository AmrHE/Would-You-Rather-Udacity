import React, { Component } from "react";
import LoginHeader from "./LoginHeader";
import UsersLoginGrid from "./UsersLoginGrid";

class Login extends Component {
	render() {
		return (
			<div>
				<LoginHeader />
				<UsersLoginGrid />
			</div>
		);
	}
}

export default Login;
