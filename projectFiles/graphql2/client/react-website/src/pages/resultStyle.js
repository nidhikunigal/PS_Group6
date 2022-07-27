import styled from "styled-components";

export const RefineHead = styled.form`
background-color: black;
color: white; 
font-size: small;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`;


export const RefineResults = styled.form`
align-content: stretch;
background-color: #ccc;
color:white;
`


export const ChangeVeh = styled.form`
border: none;
color: black;
text-decoration: underline;
align-self: right;
`

export const Silly = styled.form`
display: flex;
flex-direction: row;
font-size: small;
align-items: center;
`

export const NoResults=styled.form`
font-size: 2em;
font-weight: 600;
font-family: Sans-serif;
margin-top: 2em;

`

export const ResultHeader = styled.form`
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: large;
font-weight: 500;
padding: 10px;
`

export const ResultsPage = styled.form`
display: flex;
flex-direction: row;
flex: 1 1 auto;
`

export const Column1 = styled.form`
width: 20%; 
padding: 2px;
align-items: stretch;
font-family: Verdana, Geneva, Tahoma, sans-serif;
display: flex;
flex-direction: column;
text-align: center;
`

export const Column2 = styled.form`
width: 80%;
`
//grid-template-columns: [col1-start] auto  [col2-start] auto  [col3-start] auto ;
export const ResultGrid = styled.form`
display: grid;
grid-gap: 2px;
box-sizing: border-box;
grid-template-columns: [col1-start] 22em  [col2-start] 22em  [col3-start] 22em ;
grid-auto-rows: 400px;
`

