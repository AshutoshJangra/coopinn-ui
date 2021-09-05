import React, { useState, useEffect } from "react";
import axiosService from "../../services/axios-service";
import { Redirect, Link, useHistory } from "react-router-dom";

import InfoCard from "../shared/InfoCard";
import Loading from "../shared/Loading";

const axiosInstance = axiosService.getInstance();

const Detail = (props) => {
	const [user, setUser] = useState();
	const [bill, setBill] = useState();
	const [debit, setDebit] = useState(0);
	const [error, setError] = useState("");
	const [msg, setMsg] = useState("");

	let history = useHistory();

	const custNumber = props.match.params.number * 1;

	const data = {
		bill,
		custNumber,
		debit,
	};

	useEffect(() => {
		axiosInstance
			.get(
				`https://apicoopinn.herokuapp.com/api/v1/users/${
					props.match.params.number
				}`
			)
			.then((res) => setUser(res.data));
		// axiosInstance
		// 	.get(
		// 		`http://localhost:8000/api/v1/users/${
		// 			props.match.params.number
		// 		}`
		// 	)
		// 	.then(
		// 		(res) => setUser(res.data.user),
		// 		(err) => Promise.reject(err.response.data.message)
		// 	)
		// 	.catch((err) => setError(err));
	}, [props.match.params.number]);

	const handleSubmit = (e) => {
		e.preventDefault();

		axiosInstance
			.post("https://apicoopinn.herokuapp.com/api/v1/transaction", data)
			.then(
				(res) => history.push("/"),
				(err) => Promise.reject(err.response.data.message)
			)
			.catch((err) => setError(err));

		// axiosInstance
		// 	.post("http://localhost:8000/api/v1/transaction", data)
		// 	.then(
		// 		(res) => setFlag(true),
		// 		(err) => Promise.reject(err.response.data.message)
		// 	)
		// 	.catch((err) => setError(err));
	};

	return user ? (
		<section className="details_section">
			<section className="details_section_card">
				<div className="details_section_card_tagline">
					Credit Overview
				</div>
				<div className="details_section_card_info">
					<InfoCard data={user.user} role="user" />
				</div>
				<form
					className="details_section_card_form"
					onSubmit={handleSubmit}
				>
					<div className="details_section_card_form_input">
						<input
							type="number"
							className="details_section_card_form_input_1"
							placeholder="Total Bill"
							onChange={(e) => setBill(e.target.value)}
							required
						/>

						<input
							type="number"
							placeholder="Debit"
							className="details_section_card_form_input_2"
							onChange={(e) => setDebit(e.target.value)}
						/>
					</div>

					<input
						className="details_section_card_form_submit"
						value=" Submit &rarr;"
						type="submit"
					/>
					<Link className="details_section_card_form_back" to="/">
						Go Back
					</Link>
				</form>
			</section>
		</section>
	) : (
		<div>
			{" "}
			<Loading />
		</div>
	);
};

export default Detail;
