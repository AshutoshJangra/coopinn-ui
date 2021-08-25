import React, { useEffect, useContext } from "react";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import Login from "./auth/login/login";
import Register from "./auth/login/register";

import Header from "./shared/Header";

import Dashboard from "./dashboard/Dashboard";
import Detail from "./dashboard/Detail";
import Profile from "./dashboard/Profile";

import PublicView from "./public/PublicView";
import PublicDetail from "./public/PublicDetail";

import { ProtectedRoute } from "./shared/auth/ProtectedRoute";
import { LoggedInRoute } from "./shared/auth/LoggedInRoute";

function Root() {
	const auth = useContext(AuthContext);

	useEffect(() => {
		auth.checkAuthState();
	}, [auth]);

	return (
		<div className="mainApp">
			{/*<div className="design">
				<div className="color_box">
					<div className="c1"> </div>
					<div className="c2"> </div>
				</div>

				<div className="color_box">
					<div className="c3"> </div>
					<div className="c4"> </div>
				</div>
				<div className="color_box">
					<div className="c5"> </div>
					<div className="c6"> </div>
				</div>
			</div>*/}
			<BrowserRouter>
				<Header />

				<Switch>
					<Route exact path="/">
						{auth.isAuth ? (
							<Redirect to="/dashboard" />
						) : (
							<PublicView />
						)}
					</Route>

					<Route
						exact
						path="/public/:number/:code"
						component={PublicDetail}
					/>

					<Route exact path="/login" component={Login} />
					<LoggedInRoute
						exact
						path="/register"
						component={Register}
					/>

					<ProtectedRoute exact path="/dashboard">
						<Dashboard />
					</ProtectedRoute>

					<Route exact path="/dashboard/:number" component={Detail} />

					<ProtectedRoute exact path="/profile">
						<Profile />
					</ProtectedRoute>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default Root;
