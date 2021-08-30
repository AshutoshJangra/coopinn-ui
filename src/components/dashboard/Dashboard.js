import React, { useState, useEffect } from "react";
import axiosService from "../../services/axios-service";
import { Redirect } from "react-router-dom";
import * as actions from "../auth/login/actions";

const axiosInstance = axiosService.getInstance();

const Dashboard = () => {
	const [number, setNumber] = useState();
	const [redirect, setRedirect] = useState(false);
	const [name, setName] = useState("");

	useEffect(() => {
		const nm = actions.getSellerName();
		setName(nm);
	}, []);

	const submitForm = (e) => {
		e.preventDefault();
		setRedirect(true);
	};

	if (redirect) {
		return <Redirect exact to={{ pathname: `/dashboard/${number}` }} />;
	}

	return (
		<div className="dashboard">
			<form onSubmit={submitForm} className="dashboard_form">
				<h3 className="dashboard_form_heading"> Welcome </h3>
				<h1 className="dashboard_form_name"> {name} </h1>

				<input
					type="number"
					placeholder="Enter Mobile Number"
					className="dashboard_form_input"
					onChange={(e) => setNumber(e.target.value)}
					required
				/>

				<input
					className="dashboard_form_submit"
					value="Go"
					type="submit"
				/>
			</form>

			<h3 className="dashboard_coming_soon"> coming soon </h3>
			<section className="dashboard_upcoming">
				<h2 className="dashboard_upcoming_headline">
					Outreach Campaign
				</h2>
				<h3 className="dashboard_upcoming_sub_heading">
					Engage Customer And Promote Your Product Through SMS
				</h3>
			</section>
		</div>
	);
};

export default Dashboard;
