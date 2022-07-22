import React from "react";
import { RefineHead, RefineResults, ChangeVeh, Silly, ResultHeader, ResultsPage, Column1, Column2, ResultGrid, GridEl } from "./resultStyle";
import { useNavigate } from "react-router-dom";
import littleCar from "./currveh.jfif";
import {self} from "./index";


function ResultGridFun(){
    let j = "";
    for(let i = 0; i < 8; i++){
        j+="<div class=\"grid-item\">1</div>";
    }
    return(
        <ResultGrid dangerouslySetInnerHTML={{__html: j}}>
        </ResultGrid>
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
return (
	<ResultsPage>
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
                <button id="refine" onclick="refine()">Refine</button>

            </RefineResults>
             

        </Column1>
        <Column2>
            <ResultHeader>
                Showing {self.Part}'s for {self.Year} {self.Make} {self.Model}
                
        
            </ResultHeader>
            
            <div id="grid-container" class="grid">
                <ResultGridFun />
            </div>
            
            <div id="grid-container" class="grid">
            </div>
        </Column2>
	</ResultsPage>
);
};

export default Results;