import React from "react";
import { Nav, NavLink, NavMenu, Logo }
	from "./NavbarElements";
import companyLogo from "./logo.png";



const Navbar = () => {
return (
	<Nav>
		<NavMenu>
			<NavLink to="/" activeStyle>
				<Logo>
					<img src ={companyLogo} width="400px"></img>
				</Logo>
			</NavLink>
		</NavMenu>
        <search>
            <input type="text" placeholder="Search..."/>
        </search>
		<NavMenu>
		<NavLink to="/support" activeStyle>
			Support
		</NavLink>
		<NavLink to="/cart" activeStyle>
			Cart
		</NavLink>
		<NavLink to="/storesNear" activeStyle>
			Stores Near Me
		</NavLink>
		<NavLink to="/Account" activeStyle>
			My Account
		</NavLink>
		</NavMenu>
	</Nav>
	);
};

export default Navbar;
