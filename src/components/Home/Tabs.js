import React from "react";
import { Button, Card, Nav } from "react-bootstrap";

const Tabs = () => {
	return (
		<div>
			<Card>
				<Card.Header>
					<Nav variant="tabs" defaultActiveKey="#first">
						<Nav.Item className="">
							<Nav.Link href="#first">Active</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#link">Link</Nav.Link>
						</Nav.Item>
					</Nav>
				</Card.Header>
				<Card.Body>
					<Card.Title>Special title treatment</Card.Title>
					<Card.Text>
						With supporting text below as a natural lead-in to additional
						content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Tabs;
