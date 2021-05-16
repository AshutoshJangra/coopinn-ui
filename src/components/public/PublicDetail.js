import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const PublicDetail = (props) => {
	const [user, setUser] = useState({});
	const [flag, setFlag] = useState(false);
	const { number, code } = props.match.params;

	useEffect(() => {
		axios
			.get(`/api/v1/users?number=${number}&code=${code}`)
			.then((res) => setUser(res.data.user));
	}, [number, code]);

	if (flag) {
		return <Redirect to={{ pathname: "/" }} />;
	}

	return user ? (
		<div>
			<h4> Total Shopping: {user.totalShopping} </h4>
			<h4> Total Rewards: {user.totalRewards} </h4>
			<button onClick={() => setFlag(true)}> Back </button>
		</div>
	) : (
		<div>
			<h5> Please Wait... </h5>
		</div>
	);
};

export default PublicDetail;
