import React, { useState, useEffect, useContext } from "react";
import axiosService from "../../services/axios-service";
import { Link } from "react-router-dom";
import Transactions from "../shared/Transactions";

import InfoCard from "../shared/InfoCard";
import Loading from "../shared/Loading";

import money from "../../images/money.svg";

import { AuthContext } from "../../contexts/AuthContext";

const axiosInstance = axiosService.getInstance();

const Profile = (props) => {
	const [user, setUser] = useState();

	const { signOut } = useContext(AuthContext);

	useEffect(() => {
		axiosInstance
			.get(`https://apicoopinn.herokuapp.com/api/v1/shops`)
			.then((res) => setUser(res.data));

		// axiosInstance
		// 	.get(`http://localhost:8000/api/v1/shops`)
		// 	.then((res) => setUser(res.data.shop));
	}, []);

	console.log(user);
	return user ? (
		<section className="public_details">
			<div className="public_details_card">
				<InfoCard data={user.shop} role="shop" />
				<Link
					className="public_details_card_back"
					to="/"
					onClick={signOut}
				>
					logout
				</Link>
			</div>

			<div className="public_details_credit">
				<img
					className="public_details_credit_image"
					src={money}
					alt="credit back image"
				/>
				<div className="public_details_credit_value">
					<div className="public_details_credit_value_heading">
						Credits Returned
					</div>
					<div className=" public_details_credit_value_text">
						{user.shop.rewardToClaim}
					</div>
				</div>
			</div>
			<div className="public_details_transactions">
				<h2 className="public_details_transactions_headline">
					Last Transactions
				</h2>
				<Transactions data={user.transactions} role="shop" />
			</div>
		</section>
	) : (
		<div>
			{" "}
			<Loading />{" "}
		</div>
	);
};

export default Profile;
