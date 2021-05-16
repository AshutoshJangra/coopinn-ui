import React from "react";
import image_1 from "../../images/image_1.png";
import image_2 from "../../images/image_2.png";
import image_3 from "../../images/image_3.png";

const PublicFooter = () => {
	return (
		<section className="public_footer_section">
			<div className="public_footer">
				<h4 className="public_footer_sub_heading_1">
					{" "}
					Get Your Card From
				</h4>
				<h4 className="public_footer_sub_heading_2">
					Nearby Coopinn Partner
				</h4>

				<h3 className="public_footer_public_cta"> SHOP NOW </h3>

				<div className="public_footer_seperator">
					<div className="public_footer_seperator_line" />
					<div className="public_footer_seperator_text"> OR </div>
					<div className="public_footer_seperator_line" />
				</div>

				<h4 className="public_footer_sub_heading_3">
					Become A Merchant
				</h4>
				<h3 className="public_footer_cta"> JOIN US </h3>
			</div>

			<h2 className="public_footer_brand_name"> Coopinn. </h2>
		</section>
	);
};

export default PublicFooter;
