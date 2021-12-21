import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { getQuestions } from "../actions/questions";
import { getUsers } from "../actions/users";
import { connect } from "react-redux";
// import LoadingBar from "react-redux-loading";
import Login from "./login/Login";
// import Nav from "./navbar/Nav";
import Home from "./Home/Home";
import LoadingOverlay from "react-loading-overlay";
import Layout from "./Layout";
import { Route, Switch } from "react-router-dom";
import AddQuestion from "./addQuestion/AddQuestion";
import Leaderboard from "./leaderboard/Leaderboard";
import Question from "./question/Question";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./NotFound";

export class App extends Component {
	state = { loading: true };

	render() {
		console.log("AuthedUser: ", this.props.authUser);
		return (
			<LoadingOverlay
				active={this.state.loading}
				spinner
				text="Loading, Please Wait..."
			>
				<div className="App">
					{this.props.authUser ? (
						<Layout>
							<Switch>
								<Route path="/" exact={true} component={Home} />
								<Route path="/add" exact={true} component={AddQuestion} />
								<Route
									path="/leaderboard"
									exact={true}
									component={Leaderboard}
								/>
								<Route
									path="/questions/:id"
									exact={true}
									component={Question}
								/>
								<Route path="*" component={NotFound} />
							</Switch>
						</Layout>
					) : (
						// <Login />
						<Switch>
							<Route exact={true} path="/" component={Login} />
							<Route exact={true} path="/add" component={Login} />
							<Route exact={true} path="/leaderboard" component={Login} />
							<Route exact={true} path="/questions/:id" component={Login} />
							<Route path="*" component={NotFound} />
						</Switch>
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
