import React from "react";
import { Nav, NavLink, NavMenu, Logo }
	from "./NavbarElements";
import companyLogo from "./logo.png";
import { Button1 } from "../pages/homeStyle.js";


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
		<Button1>
		<NavLink to="/support" activeStyle>
			SUPPORT
		</NavLink>
		</Button1>
		<Button1>
		<NavLink to="/cart" activeStyle>
			CART
		</NavLink>
		</Button1>
		<Button1>
		<NavLink to="/storesNear" activeStyle>
			STORES NEAR ME
		</NavLink>
		</Button1>
		<Button1>
		<NavLink to="/Account" activeStyle>
			MY ACCOUNT
		</NavLink>
		</Button1>
	</Nav>
	);
};

export default Navbar;
