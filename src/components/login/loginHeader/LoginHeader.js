import React from "react";
import { Header } from "semantic-ui-react";
// import styled from "styled-components";
import "./loginHeader.css"


const LoginHeader = () => {
	return (
			<Header style={{}} as="h4" block attached="top" textAlign="center">
				Would You Rather Game!
				<Header.Subheader>Sign In to Play </Header.Subheader>
			</Header>
	);
};

export default LoginHeader;
