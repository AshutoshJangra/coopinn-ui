import React, { useState, useEffect } from "react";
import axiosService from "../../services/axios-service";
import { Redirect } from "react-router-dom";

const axiosInstance = axiosService.getInstance();

const Detail = (props) => {
	const [user, setUser] = useState({});
	const [bill, setBill] = useState();
	const [debit, setDebit] = useState(0);
	const [flag, setFlag] = useState(false);

	const custNumber = props.match.params.number * 1;

	const data = {
		bill,
		custNumber,
		debit,
	};

	useEffect(() => {
		axiosInstance
			.get(`/api/v1/users/${props.match.params.number}`)
			.then((res) => setUser(res.data.user));
	}, [props.match.params.number]);

	const handleSubmit = (e) => {
		e.preventDefault();

		axiosInstance
			.post("/api/v1/transaction", data)
			.then((res) => console.log("handle", res));

		setFlag(true);
	};

	if (flag) {
		return <Redirect to={{ pathname: "/" }} />;
	}

	return user ? (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Bill:
					<input
						type="number"
						onChange={(e) => setBill(e.target.value)}
						required
					/>
				</label>
				<label>
					Debit:
					<input
						type="number"
						onChange={(e) => setDebit(e.target.value)}
					/>
				</label>

				<input type="submit" />
			</form>
			<button onClick={() => setFlag(true)}> back </button>
			<h3>{user.totalShopping}</h3>
			<h3>{user.totalRewards}</h3>
		</div>
	) : (
		<div> please wait.... </div>
	);
};

export default Detail;
