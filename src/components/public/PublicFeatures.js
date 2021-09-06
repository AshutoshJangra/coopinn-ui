import React from "react";

const PublicFeatures = () => {
	return (
		<section className="features_section">
			<h1 className="features_section_headline">
				Be part of an experience
			</h1>

			<div className="features">
				<div className="feature_1 features_feature ">
					<h2 className="features_feature_headline">Save Money</h2>
					<p className="features_feature_paragraph ">
						save money on purchase at your local shops everytime.
						get assured discounts and use it for your next purchase
					</p>
				</div>
				<div className="feature_2 features_feature ">
					<h2 className="features_feature_headline ">
						No Debit Card Required
					</h2>
					<p className="features_feature_paragraph">
						no debit or credit card required. start using now with
						zero setup
					</p>
				</div>
			</div>
		</section>
	);
};

export default PublicFeatures;
