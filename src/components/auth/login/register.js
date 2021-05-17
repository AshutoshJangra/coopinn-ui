import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import * as actions from "./actions";

const Register = () => {
	const [name, setName] = useState("");
	const [shopname, setShopname] = useState("");
	const [number, setNumber] = useState();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passconf, setPassconf] = useState("");
	const [reward, setReward] = useState();

	const [error, setError] = useState("");

	const [flag, setFlag] = useState(false);

	const data = {
		name,
		sellerName: shopname,
		mobile: number,
		email,
		password,
		passwordConfirm: passconf,
		rewardPercentage: reward,
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		actions
			.register(data)
			.then((registered) => setFlag(true), (err) => setError(err));
	};

	if (flag) {
		return <Redirect to={{ pathname: "/login" }} />;
	}

	return (
		<div className="Register">
			<form onSubmit={handleSubmit}>
				<label> Name </label>
				<input
					type="text"
					placeholder="name"
					onChange={(e) => setName(e.target.value)}
					required
				/>

				<label> Shop Name </label>
				<input
					type="text"
					placeholder="shop name"
					onChange={(e) => setShopname(e.target.value)}
					required
				/>

				<label> Mobile Number </label>
				<input
					type="number"
					placeholder="mobile number"
					onChange={(e) => setNumber(e.target.value)}
					required
				/>

				<label> Email </label>
				<input
					type="email"
					placeholder="email"
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<label> Password </label>
				<input
					type="password"
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<label> Confirm Password </label>
				<input
					type="password"
					placeholder="password"
					onChange={(e) => setPassconf(e.target.value)}
					required
				/>

				<label> Reward Percentage </label>
				<input
					type="number"
					placeholder="reward"
					onChange={(e) => setReward(e.target.value)}
					required
				/>

				<input type="submit" />
			</form>

			{error ? "error yes" : ""}
		</div>
	);
};

export default Register;
