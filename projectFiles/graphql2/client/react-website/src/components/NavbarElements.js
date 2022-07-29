//import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
height: 85px;
display: flex;
justify-content: flex-start;
z-index: 12;
align-items: center;
font-size: 1em;
font-family: Sans-serif;

`;
export const Logo = styled.nav`
align-items: flex-start;
`

export const NavLink = styled(Link)`
color: white;
display: flex;
text-weight: 500;
align-items: center;
text-decoration: none;
padding: 0 1.5rem;
height: 100%;
cursor: pointer;
font-family: Sans-serif;
font-size: 0.9em;
&.active {
	color: yellow;
}
`;


export const NavMenu = styled.div`
display: flex;
align-items: center;
font-family: Sans-serif;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
