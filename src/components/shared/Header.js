import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import logoCo from "../../images/logoCo.svg";

const Header = () => {
	const { isAuth, signOut } = useContext(AuthContext);

	const renderLink = () => {
		if (isAuth) {
			return (
				<React.Fragment>
					{/*<Link className="navlink" to="/" onClick={signOut}>
						logout
					</Link>*/}
					<Link className="navlink" to="/profile">
						My Profile
					</Link>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<Link className="navlink" to="/register">
						Join Us
					</Link>
				</React.Fragment>
			);
		}
	};
	return (
		<div className="header">
			<label className="logoCo">
				<img src={logoCo} />
			</label>

			<nav className="navlinks">{renderLink()}</nav>
		</div>
	);
};

export default Header;
