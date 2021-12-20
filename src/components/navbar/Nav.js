import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { setAuthedUser } from "../../actions/authUser";
import { NavLink } from "react-router-dom";
import IMG from "../../assets/WYR-logo.png";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./nav.css";
class Navigation extends Component {
	state = {
		active: "",
	};
	render() {
		// console.log("Nav Props: ", this.props);
		const { users, authUser, setAuthedUser } = this.props;

		return (
			<>
				<Navbar className="nav">
					<Container>
						<Navbar.Brand href="/">
							<img src={IMG} alt="Logo" className="logo" />
						</Navbar.Brand>
						<Nav>
							{/* <Nav.Link> */}
							<li>
								<NavLink
									className="nav-item"
									as="a"
									to="/"
									exact={true}
									activeClassName="active"
								>
									Home
								</NavLink>
							</li>
							{/* </Nav.Link> */}
							{/* <Nav.Link> */}
							<li>
								<NavLink
									className="nav-item"
									to="/add"
									exact={true}
									activeClassName="active"
								>
									New Poll
								</NavLink>
							</li>
							{/* </Nav.Link> */}
							{/* <Nav.Link> */}
							<li>
								<NavLink
									className="nav-item"
									to="/leaderboard"
									exact={true}
									activeClassName="active"
								>
									Leader Board
								</NavLink>
							</li>
							{/* </Nav.Link> */}
						</Nav>
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text>
								<b>{users[authUser].name} </b>
							</Navbar.Text>
							<img
								src={users[authUser].avatarURL}
								alt="User"
								className="user"
							/>
							<button
								className="logout-btn"
								onClick={() => setAuthedUser(null)}
							>
								<li className="logout">Logout</li>
								<FiLogOut className="icon" />
							</button>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				{/* <nav className="nav">
				 <div className="nav-container">
						<div className="left">
							
							<li>
								<NavLink as="a" to="/" exact={true} activeClassName="active">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/add" exact={true} activeClassName="active">
									New Poll
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/leaderboard"
									exact={true}
									activeClassName="active"
								>
									Leader Board
								</NavLink>
							</li>
						</div>
						<div className="right">
							<p>
								Signed in as: <b>{users[authUser].name}</b>
							</p>
							<img
								src={users[authUser].avatarURL}
								alt="User"
								className="user"
							/>
							<button
								className="logout-btn"
								onClick={() => setAuthedUser(null)}
							>
								<li className="logout">Logout</li>
								<FiLogOut className="icon" />
							</button>
						</div>
					</div>
				</nav> */}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
		// authUser: state.users[state.authedUSer],
		authUser: state.authUser,
	};
};

export default connect(mapStateToProps, { setAuthedUser })(Navigation);
