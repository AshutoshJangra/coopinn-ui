import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Redirect } from "react-router-dom";

const Login = () => {
	const { isAuth, signIn } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		signIn({ email, password });
	};

	if (isAuth) {
		return <Redirect to={{ pathname: "/dashboard" }} />;
	}

	return (
		<div className="login">
			<form onSubmit={handleSubmit}>
				<label> Name </label>
				<input
					type="text"
					placeholder="username"
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<label> Password </label>
				<input
					type="password"
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<input type="submit" />
			</form>
		</div>
	);
};

export default Login;
