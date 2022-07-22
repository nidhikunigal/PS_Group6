import styled from "styled-components";
import car from "./car.jpg";
import line from "./line.png";

export const Form = styled.form`
background-image: url(${car});
background-size: cover;
color: white;
text-shadow: -1.2px 1px 0 black;
font-size: 23px;
height: 300px;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
text-align: center;
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
`

export const FeatDeals = styled.form`
display:flex;
flex: 1 1 1px;
flex-flow: row;
justify-content: center;
align-items: center;
background-color: #ccc;
`

export const Deal1 = styled.form`
display: flex; 
flex-flow: column;
align-items: center;
font-size: 1vw;
padding: 1%;
`