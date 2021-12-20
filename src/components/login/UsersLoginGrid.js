import React from "react";
import { Grid, Image } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import IMG from "../../assets/WYR.jpg";

const UsersLoginGrid = () => {
	return (
		<Grid divided padded textAlign="center">
			<Grid.Row className="login-container">
				<Grid.Column width={16} className="login-image-container">
					<Image src={IMG} className="login-image" />

					<br />
					<LoginForm />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default UsersLoginGrid;
