import React from "react";
import { Grid, Image } from "semantic-ui-react";
import LoginForm from "../form/Form";
import IMG from "../../../assets/WYR.jpg";
import "./userLoginGrid.css";

const UsersLoginGrid = ({ image, form }) => {
	return (
		<Grid divided padded textAlign="center">
			<Grid.Row className="login">
				<Grid.Column width={16} className="image-container">
					<Image src={IMG} className="image" />

					{image}
					<br />
					<LoginForm />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default UsersLoginGrid;
