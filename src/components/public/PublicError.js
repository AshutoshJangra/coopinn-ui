import React from "react";
import { Link } from "react-router-dom";

import error from "../../images/error.svg";

const PublicError = ({ errors }) => {
	return (
		<section className="error_section">
			<img className="error_section_art" src={error} alt="error" />
			<h1 className="error_section_headline">{errors}</h1>
			<Link to="/" className="error_section_cta">
				Back to Homepage
			</Link>
		</section>
	);
};

export default PublicError;
