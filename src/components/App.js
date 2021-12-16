import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Login from "./login/Login";

export class App extends Component {
	componentDidMount() {
		this.props.handleInitialData();
	}
	render() {
		console.log("AuthedUser: ", this.props.authUser);
		return (
			<div className="App">
				<LoadingBar />
				{this.props.authUser ? <div>Hello World!</div> : <Login />}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	authUser: state.authUser,
});

export default connect(mapStateToProps, { handleInitialData })(App);
