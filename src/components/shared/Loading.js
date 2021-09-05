import React, { useContext } from "react";
import loading from "../../images/loading.svg";

const Loading = () => {
	return (
		<div className="loading">
			<img className="loading_art" src={loading} alt="loading" />
		</div>
	);
};

export default Loading;
