import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import PublicFeatures from "./PublicFeatures";
import PublicWorking from "./PublicWorking";
import PublicElite from "./PublicElite";
import PublicFooter from "./PublicFooter";

const PublicView = () => {
	const [number, setNumber] = useState();
	const [code, setCode] = useState();
	const [flag, setFlag] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setFlag(true);
	};

	if (flag) {
		return <Redirect to={{ pathname: `/public/${number}/${code}` }} />;
	}

	return (
		<div className="public_view">
			<h1 className="headline">
				Coin At <br /> Every <br /> <span> Pinn.</span>
				<p className="headline_description">
					Get Assured Discounts Upto 10% on Your Every Purchase at
					Coopinn Merchant
				</p>
			</h1>
			<form className="form_box" onSubmit={handleSubmit}>
				<input
					type="number"
					className="input_mobile"
					onChange={(e) => setNumber(e.target.value)}
					placeholder="Enter Mobile Number"
					required
				/>

				<input
					type="number"
					className="input_passcode"
					onChange={(e) => setCode(e.target.value)}
					placeholder="Passcode"
					required
				/>
				<input
					className="input_submit"
					type="submit"
					value="Go &rarr;"
				/>
			</form>

			<div className="shop_login">
				{/*<Link className="shop_login_link" to="/login">
					view your profile &rarr;
				</Link>*/}
			</div>

			<section className="features">
				<PublicFeatures />
			</section>
			<section className="workings">
				<PublicWorking />
			</section>
			<section className="elite">
				<PublicElite />
			</section>
			<footer className="public">
				<PublicFooter />
			</footer>
		</div>
	);
};

export default PublicView;
