import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
	const [number, setNumber] = useState();
	const [redirect, setRedirect] = useState(false);

	const submitForm = (e) => {
		e.preventDefault();
		setRedirect(true);
	};

	if (redirect) {
		return <Redirect exact to={{ pathname: `/dashboard/${number}` }} />;
	}

	return (
		<div>
			<form onSubmit={submitForm} className="dashboard">
				<h1> Welcome </h1>
				<label>
					Number:
					<input
						type="number"
						onChange={(e) => setNumber(e.target.value)}
						required
					/>
				</label>

				<input type="submit" />
			</form>
		</div>
	);
};

export default Dashboard;
