import React from "react";
import eliteCard from "../../images/eliteCard.png";

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
						Coopinn Elite
					</h2>

					<h4 className="elite_section_box_content_feature">
						Show Card At Any Coopinn Merchant
					</h4>
					<h4 className="elite_section_box_content_feature">
						Get Or Redeem Credits
					</h4>
					<h4 className="elite_section_box_content_feature">
						Customized Coopinn Elite Card
					</h4>
					<h4 className="elite_section_box_content_feature">
						Hassle Free
					</h4>
					<h4 className="elite_section_box_content_feature">
						Seemless Checkout
					</h4>
				</div>
			</div>
		</section>
	);
};

export default PublicElite;
