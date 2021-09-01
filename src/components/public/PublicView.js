import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import PublicFeatures from "./PublicFeatures";
import PublicWorking from "./PublicWorking";
import PublicShop from "./PublicShop";
import PublicElite from "./PublicElite";
import PublicFooter from "./PublicFooter";

import coopinncard from "../../images/coopinncard.svg";
import quiz from "../../images/quiz.svg";
import hero from "../../images/hero.svg";

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
			<div className="public_view_hero ">
				{/*<div className="public_view_headline_design">
					<div className="public_view_headline_design_color_box">
						<img src={coopinncard} alt="" />
					</div>
				</div>*/}
				<img className="public_view_hero_image" src={hero} alt="" />
				<h1 className="public_view_hero_headline">
					Coin At Every <span> Pinn.</span>
				</h1>
				<p className="public_view_hero_description">
					Get Assured Discounts Upto 10% on Every Purchase at Nearby
					Local Shop
				</p>
			</div>
			<form className="form_box" onSubmit={handleSubmit}>
				<h2 className="form_box_headline">
					Enter Details to View Profile & Credit History
				</h2>
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

			<div className="hero_banner">
				{/*<img className="image" src={hero} alt="" />*/}
			</div>

			<section className="features">
				<PublicFeatures />
			</section>

			<section className="elite">
				<PublicElite />
			</section>

			<section className="workings">
				<PublicWorking />
			</section>

			<section className="shops">
				<PublicShop />
			</section>

			<footer className="public">
				<PublicFooter />
			</footer>
		</div>
	);
};

export default PublicView;
