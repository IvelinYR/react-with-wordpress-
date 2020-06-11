import React from 'react';
import { Link } from "@reach/router";

const NavLink = props => (
	<Link
		{...props}
		className="nav-link"
	/>
);

export default NavLink;
