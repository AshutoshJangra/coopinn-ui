import React, { useState, useEffect, useContext } from "react";
import axiosService from "../../services/axios-service";
import { Link } from "react-router-dom";
import Transactions from "../shared/Transactions";

import InfoCard from "../shared/InfoCard";

import { AuthContext } from "../../contexts/AuthContext";

const axiosInstance = axiosService.getInstance();

const Profile = (props) => {
	const [user, setUser] = useState({});

	const { signOut } = useContext(AuthContext);

	useEffect(() => {
		axiosInstance
			.get(`https://apicoopinn.herokuapp.com/api/v1/shops`)
			.then((res) => setUser(res.data));

		// axiosInstance
		// 	.get(`http://localhost:8000/api/v1/shops`)
		// 	.then((res) => setUser(res.data.shop));
	}, []);
	return (
		<section className="public_details">
			<div className="public_details_card">
				<InfoCard data={user.shop} role="shop" />
				<Link className="public_details_card_back" to="/">
					Go Back
				</Link>
				<Link
					className="public_details_card_back"
					to="/"
					onClick={signOut}
				>
					logout
				</Link>
			</div>
			<div className="public_details_transactions">
				<h2 className="public_details_transactions_headline">
					Last Transactions
				</h2>
				<Transactions data={user.transactions} role="shop" />
			</div>
		</section>
	);
};

export default Profile;
