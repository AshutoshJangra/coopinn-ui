import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

import InfoCard from "../shared/InfoCard";
import Transactions from "../shared/Transactions";

const PublicDetail = (props) => {
	const [user, setUser] = useState();
	const { number, code } = props.match.params;

	useEffect(() => {
		axios
			.get(
				`https://apicoopinn.herokuapp.com/api/v1/users?number=${number}&code=${code}`
			)
			.then((res) => setUser(res.data.user));
	}, [number, code]);

	return user ? (
		<section className="public_details">
			<div className="public_details_card">
				<InfoCard data={user} role="user" />
				<Link className="public_details_card_back" to="/">
					Go Back
				</Link>
			</div>

			<div className="public_details_transactions">
				<h2 className="public_details_transactions_headline">
					Last Transactions
				</h2>
				<Transactions data={user.transactions} role="user" />
			</div>
		</section>
	) : (
		<div>
			<h5> Please Wait... </h5>
		</div>
	);
};

export default PublicDetail;
