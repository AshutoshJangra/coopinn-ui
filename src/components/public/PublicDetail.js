import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

import InfoCard from "../shared/InfoCard";
import Transactions from "../shared/Transactions";
import Loading from "../shared/Loading";
import PublicError from "./PublicError";

const PublicDetail = (props) => {
	const [user, setUser] = useState();
	const { number, code } = props.match.params;
	const [error, setError] = useState();

	useEffect(() => {
		axios
			.get(
				`https://apicoopinn.herokuapp.com/api/v1/users?number=${number}&code=${code}`
			)
			.then((res) => setUser(res.data))
			.catch((err) =>
				err.response.data.msg
					? setError(err.response.data.msg)
					: setError("")
			);
	}, [number, code]);

	return user ? (
		<section className="public_details">
			<div className="public_details_card">
				<InfoCard data={user.user} role="user" />
			</div>

			<div className="public_details_transactions">
				<h2 className="public_details_transactions_headline">
					Last Transactions
				</h2>
				<Transactions data={user.transactions} role="user" />
			</div>
		</section>
	) : error ? (
		<div>
			<PublicError errors={error} />
		</div>
	) : (
		<div>
			<Loading />
		</div>
	);
};

export default PublicDetail;
