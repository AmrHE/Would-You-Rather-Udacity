import React, { Component } from "react";
import LoginHeader from "./loginHeader/LoginHeader";
import UsersLoginGrid from "./userLoginGrid/UsersLoginGrid";

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
