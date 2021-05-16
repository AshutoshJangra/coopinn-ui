import React, { useState, useEffect } from "react";
import axiosService from "../../services/axios-service";
import { Link } from "react-router-dom";
const axiosInstance = axiosService.getInstance();

const Profile = (props) => {
	const [user, setUser] = useState({});

	useEffect(() => {
		axiosInstance
			.get(`/api/v1/shops/l`)
			.then((res) => setUser(res.data.shop));
	}, []);
	return (
		<div>
			{user ? user.name : "profile"}
			<Link to="/"> Back </Link>
		</div>
	);
};

export default Profile;
