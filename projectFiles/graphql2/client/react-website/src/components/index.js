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
					<img src ={companyLogo} width="300px"></img>
				</Logo>
			</NavLink>
		</NavMenu>
        <search>
            <input type="text" placeholder="SEARCH..."/>
        </search>
		<NavMenu>
		<NavLink to="/support" activeStyle>
			SUPPORT
		</NavLink>
		<NavLink to="/cart" activeStyle>
			CART
		</NavLink>
		<NavLink to="/storesNear" activeStyle>
			STORES NEAR ME
		</NavLink>
		<NavLink to="/Account" activeStyle>
			MY ACCOUNT
		</NavLink>
		</NavMenu>
	</Nav>
	);
};

export default Navbar;
