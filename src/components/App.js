import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { getQuestions } from "../actions/questions";
import { getUsers } from "../actions/users";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Login from "./login/Login";
import Nav from "./navbar/Nav";
import Home from "./Home/Home";
import LoadingOverlay from "react-loading-overlay";
import Layout from "./Layout";
import { Route } from "react-router-dom";
import AddQuestion from "./addQuestion/AddQuestion";
import Leaderboard from "./leaderboard/Leaderboard";
import Question from "./question/Question";
import "bootstrap/dist/css/bootstrap.min.css";

export class App extends Component {
	state = { loading: true };

	render() {
		// console.log("AuthedUser: ", this.props.authUser);
		return (
			<LoadingOverlay
				active={this.state.loading}
				spinner
				text="Loading, Please Wait..."
			>
				<div className="App">
					{/* <LoadingBar /> */}
					{this.props.authUser ? (
						<Layout>
							<Route path="/" exact={true} component={Home}></Route>
							<Route path="/add" exact={true} component={AddQuestion}></Route>
							<Route
								path="/leaderboard"
								exact={true}
								component={Leaderboard}
							></Route>
							<Route
								path="/questions/:id"
								exact={true}
								component={Question}
							></Route>
						</Layout>
					) : (
						<Login />
					)}
				</div>
			</LoadingOverlay>
		);
	}
	handleInitialData() {
		this.props.getUsers();
		this.props.getQuestions();
		this.setState({ loading: false });
	}
	componentDidMount() {
		this.handleInitialData();
	}
}

const mapStateToProps = (state) => ({
	authUser: state.users[state.authUser],
});

export default connect(mapStateToProps, {
	handleInitialData,
	getUsers,
	getQuestions,
})(App);
