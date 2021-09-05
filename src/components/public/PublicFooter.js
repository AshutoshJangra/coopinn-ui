import React from "react";
import contact from "../../images/contact.svg";

const PublicFooter = () => {
	return (
		<section className="public_footer_section">
			<div className="public_footer">
				<img
					className="public_footer_image"
					src={contact}
					alt="contant image"
				/>
				<p className="public_footer_public_cta">
					Get Your Card
					<span>NOW</span>
					At Any Nearby Coopinn Shop
				</p>
				<p className="public_footer_public_cta">
					<span>or</span>
					Call: 9306090180
				</p>
			</div>
		</section>
	);
};

export default PublicFooter;
