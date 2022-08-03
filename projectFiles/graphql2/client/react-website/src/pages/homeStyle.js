import styled from "styled-components";
import car from "./coolBackground2.jpg";
import line from "./line.png";

export const Button = styled.button`
background-color: white;
color: black;
font-size: 11.5px;
padding: 3px 15px;
border-radius: 7px;
margin: 5px 0px;
cursor: pointer;
font-family: Sans-serif;
width:100px;
height:23px;
-webkit-text-stroke:  0.7px black;
`

export const Button1 = styled.button`
color: white;
background-color: #36454f;
font-size: 11.5px;
padding: 3px 15px;
border-radius: 7px;
cursor: pointer;
font-family: Sans-serif;
width:150;
height:30px;
-webkit-text-stroke:  0.7px black;
display: flex;
align-items: center;
font-family: Sans-serif;
margin: 20px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`

export const Form = styled.form`
background-image: url(${car});
background-size: cover;
color: white; 
-webkit-text-stroke:  1.6px black;
font-size: 23px;
height: 300px;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
text-align: center;
font-family: Sans-serif;
`

export const formOptions = styled.form`
display: flex;
flex-flow: row;
justify-content: center;
align-items: center;
text-align: center;
`

export const Deals = styled.form`
display: flex;
background-image: url(${line});
align-items: center;
justify-content: center;
color: black;
top: 50%;
height: 100px;
width: 100%;
margin-top: 10px;
font-size: 24px;
font-weight: bolder;
font-family: Sans-serif;
`

export const FeatDeals = styled.form`
display:flex;
flex: 1 1 1px;
flex-flow: row;
justify-content: center;
align-items: center;
background-color: #36454f;
`

export const Deal1 = styled.form`
display: flex; 
flex-flow: column;
align-items: center;
font-size: 1vw;
padding: 1%;
height: 450px;
`

export const DealName = styled.form`
background-color: white;
font-family: Sans-serif;
font-weight: 600;
width: 400px;
height: 50px;
font-size: 1em;
text-align: center;
`