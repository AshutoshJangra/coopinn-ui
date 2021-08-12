import React from "react";
import eliteCard from "../../images/eliteCard.svg";

const PublicElite = () => {
	return (
		<section className="elite_section">
			<h4 className="elite_section_heading"> Introducing </h4>

			<div className="elite_section_box">
				<div className="elite_section_box_content">
					<img
						className="elite_section_box_content_image"
						src={eliteCard}
						alt="image_1"
					/>
					<h2 className="elite_section_box_content_heading">
						Coopinn Rewards
					</h2>

					<p className="elite_section_box_content_feature">
						Show Card At Any Coopinn Merchant
					</p>
					<p className="elite_section_box_content_feature">
						Get Or Redeem Credits
					</p>
					<p className="elite_section_box_content_feature">
						Customized Coopinn Elite Card
					</p>
					<p className="elite_section_box_content_feature">
						Hassle Free
					</p>
					<p className="elite_section_box_content_feature">
						Seemless Checkout
					</p>
				</div>
			</div>
		</section>
	);
};

export default PublicElite;
