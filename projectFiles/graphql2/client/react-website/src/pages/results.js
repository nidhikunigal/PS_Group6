import React from "react";
import { RefineHead, RefineResults, ChangeVeh, Silly, ResultHeader, ResultsPage, Column1, Column2, ResultGrid, gridel } from "./resultStyle";
import { useNavigate } from "react-router-dom";
import littleCar from "./currveh.jfif";
import {self} from "./index";
import Home from "./index";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import tire from "./tire.jpg";
import bumper from "./tempBumper.jpg";
import levelingKit from "./levelingKit.jpg";
 
const QUERY_YEAR_MAKE_MODEL = gql`
query yearMakeModel($year: String, $make: String, $model: String) {
  partByYear(Year: $year, Make: $make, Model: $model) {
    Product_Name
    Year
    Make
    Model
    Trim
    VehicleParts {
      Type
      Product_Name
      Company
      Cost
      Specifications
      Technical_Details
      General_Vehicle
    }
  }
}
`;
 
var unique = [];
function ResultGridFun(data, error, loading){
    let j = "";
    if(!error && !loading){
        unique = [... new Map(data.partByYear.map(item => [item.Product_Name, item])).values()];
        console.log(data);
        console.log(unique);
        console.log(self.Part);
        if(self.Part != "All Part" && self.Part != ""){
            refineUnique(unique);
        }
        for(let i = 0; i <unique.length; i++){
            if(unique[i] != null){
                j+="<div class=grid-item><style type=text/css> .grid-item{display: flex; flex-direction:column; align-items: center; justify-content: flex-start;  text-align: center; background-color: pink;}</style>" + internalGrid(unique[i].VehicleParts[0].Type) + "<a style=\"color:blue; font-weight: 600; font-family:Sans-serif; font-size:1em; \" activeStyle>" + unique[i].Product_Name + "</a> <p id=price><style type=text/css> #price{position:relative;  bottom: 0; left: 0; }</style>" +unique[i].VehicleParts[0].Cost + "</p> </div> ";
            }
        }
    }
    return(
        <ResultGrid dangerouslySetInnerHTML={{__html: j}}>
        </ResultGrid>
    )
}
 
function refineUnique(data){
    for(let i = 0; i < data.length; i++){
        if(data[i].VehicleParts[0].Type != self.Part){
            delete data[i];
        }
    }
}
 
function internalGrid(type){
    var SRC = null;
    //var img = document.createElement("img");
 
        switch(type){
            case 'Bumper':
                SRC = bumper;
                break;
            case 'Suspension':
                SRC = bumper;
                break;
            case 'Leveling':
                SRC = levelingKit;
                break;
            case 'Wheel':
                SRC = tire;
                break;
            case 'Fenders':
                SRC = bumper;
        }
        return ("<img src=" + SRC + " width=250px />");
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
                <ResultGrid>
                    {ResultGridFun(data, error, loading) }
                </ResultGrid>
            </div>
            <div id="grid-container" class="grid">
            </div>
        </Column2>
    </ResultsPage>
);
};
 
export default Results;

