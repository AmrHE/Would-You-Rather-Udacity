import React from "react";
import { Header } from "semantic-ui-react";

const LoginHeader = () => {
	return (
		<Header as="h4" block attached="top" textAlign="center">
			<b className="login-header-text">Would You Rather Game</b>
			<Header.Subheader>
				<b>Sign In to Play</b>
			</Header.Subheader>
		</Header>
	);
};

export default LoginHeader;
