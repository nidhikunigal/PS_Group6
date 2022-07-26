import React from "react";
import { RefineHead, RefineResults, ChangeVeh, Silly, ResultHeader, ResultsPage, Column1, Column2, ResultGrid, GridEl } from "./resultStyle";
import { useNavigate } from "react-router-dom";
import littleCar from "./currveh.jfif";
import {self} from "./index";
import Home from "./index";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

const QUERY_YEAR_MAKE_MODEL = gql`
query yearMakeModel($year: String, $make: String, $model: String) {
  partByYear(Year: $year, Make: $make, Model: $model) {
    Product_Name
    Year
    Make
    Model
    Trim
  }
}
 `;

var unique;
function ResultGridFun(data, error, loading){
    let j = "";
    if(!error && !loading){
        unique = [... new Map(data.partByYear.map(item => [item.Product_Name, item])).values()];
        console.log(data);
        console.log(unique);
        for(let i = 0; i <unique.length; i++){
            j+="<div class=\"grid-item\">" + unique[i].Product_Name + "</div>";
        }
    }
    return(
        <ResultGrid dangerouslySetInnerHTML={{__html: j}}>
        </ResultGrid>
    )
}




function PDPage(){
	let nav = useNavigate();
	const routeChange = () =>{
		let path = '/details';
		nav(path);

	}

	return (
        <div></div>
	)
}

function ChangeVehFun(){
    let nav = useNavigate();
	const routeChange = () =>{
		let path = '/';
		nav(path);

	}

	return (
		<button color="primary" className="px-4"onClick={routeChange}
              >
              Change Vehicle
            </button>
	)
   
}

const Results = () => {
    //const [loadData, { data: yearData }] = useLazyQuery(QUERY_YEAR_MAKE_MODEL);
    const{data, error, loading} = useQuery(QUERY_YEAR_MAKE_MODEL, {variables: { year: self.Year,
        make: self.Make,
        model: self.Model,}});
    console.log("hi");
    console.log(data);
    if( !error && !loading){
        console.log(data.partByYear.length);
        var size = data.partByYear.length;
    }
    //console.log(data.partByYear.length);
    //var size = data.partByYear.length;
return (
	<ResultsPage >
        <Column1>
            <Silly> 
                <img src={littleCar}  height="60px"/>
                Current Vehicle: {self.Year} {self.Make} {self.Model}
            </Silly>
            
            <ChangeVehFun />
                
            <RefineHead> Refine By:</RefineHead>
            <RefineResults>
                <select id="Brand">
                    <option value="brand ex">Put brand examples here</option>
                </select>
                <select id="Fitment">
                    <option value="cars">List all cars</option>
                </select>
                <select id="ProductCategory">
                    <option value="bumper">Bumper</option>
                    <option value="none">List rest of products</option>
                </select>
                <button id="refine" onClick="refine()">Refine</button>

            </RefineResults>
             

        </Column1>
        <Column2>
            <ResultHeader>
                Showing {self.Part}'s for {self.Year} {self.Make} {self.Model}
                
        
            </ResultHeader>
            
            <div id="grid-container" class="grid">
                {ResultGridFun(data, error, loading) }
            </div>
            
            <div id="grid-container" class="grid">
            </div>
        </Column2>
	</ResultsPage>
);
};

export default Results;