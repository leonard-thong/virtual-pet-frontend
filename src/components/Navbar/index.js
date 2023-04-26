import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import logo from '../ui/yangyang logo2.png';

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu><div>
		<img src={logo} alt="Logo"
		style={{
			width: '100px',
			height: '100px',
			display: 'flex'
		}}
		/>
		</div>

		<NavLink to="/" activeStyle>
			Home
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
