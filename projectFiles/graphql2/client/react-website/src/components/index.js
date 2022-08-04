import React from "react";
import { Nav, NavLink, NavMenu, Logo }
	from "./NavbarElements";
import companyLogo from "./logo.png";
import { Button1 } from "../pages/homeStyle.js";

//function returns the navbar which is always apparent at the top of the website
//it includes the functional buttons (including the logo website to reroute back to the landing page)
//although the buttons are functional, we don't have the pages set up. The search bar is not functional. 
const Navbar = () => {
return (
	<Nav>
		<NavMenu>
			<NavLink to="/" activeStyle>
				<Logo>
					<img src ={companyLogo} width="300vw"></img>
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
