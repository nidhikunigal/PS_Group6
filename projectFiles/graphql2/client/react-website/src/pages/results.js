import React from "react";
import { NoResults, RefineHead, RefineResults, ChangeVeh, Silly, ResultHeader, ResultsPage, Column1, Column2, ResultGrid, NumRes } from "./resultStyle";
import { useNavigate } from "react-router-dom";
import littleCar from "./currveh.jfif";
import {self} from "./index";
import Home from "./index";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import tire from "./wheels.jpg";
import bumper from "./bumper.jpg";
import levelingKit from "./levelingKit.jpg";
import suspension from "./suspension.jpg";
import fender from "./fender.jpg";
import bestfit from "./best_fit.png";
 
const QUERY_YEAR_MAKE_MODEL = gql`
query yearMakeModel($year: String, $make: String, $model: String) {
  partByYear(Year: $year, Make: $make, Model: $model) {
    Product_Name
    Year
    Make
    Model
    Trim
    Num_Reviews
    Fitment_Percent
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
var eeep = 0; 
function ResultGridFun(data, error, loading){ 

    eeep = 0; 
    let j = "";
    if(!error && !loading){
        unique = [... new Map(data.partByYear.map(item => [item.Product_Name, item])).values()];
        let bestFitCheck = null;

        if(self.Part != "All Part" && self.Part != ""){
            //if the input has a select part
            let refinedDataForBestFit = refineForBestFit(data);
            bestFitCheck = bestFit(refinedDataForBestFit);
            refineUnique(unique);
        }
        else {
            //if the input is for all parts
            bestFitCheck = bestFitTwo(data);
        }
        let aaa = "";
        for(let i = 0; i < unique.length; i++){
            if(unique[i] != null){
                
                if (unique[i].Product_Name === bestFitCheck.Product_Name) {
                    //add best fit sticker to proper item
                    console.log("best fit" + "fit percent: " + unique[i].Fitment_Percent + "num reviews: " + unique[i].Num_Reviews);
                    aaa = "<img src=" + bestfit + " width=125 />";
                }
                else {
                    aaa="";
                }
                
                j+="<div class=grid-item><style type=text/css> .grid-item{display: flex; flex-direction:column; align-items: center; text-align: center; border: 1px solid grey;}</style>" 
                + aaa 
                + internalGrid(unique[i].VehicleParts[0].Type) 
                + "<a id = prodName style=\"color:blue; font-weight: 600; font-family:Sans-serif; font-size:1em; text-decoration-line: underline;  \">" 
                +"<div></div>"
                + unique[i].Product_Name 
                + "</a> <p id=price><style type=text/css> #price{justify-self: flex-end; align-self: flex-start; font-family:Sans-serif; font-weight:600; margin-left: 30px; height: 8px; }</style> $" 
                + unique[i].VehicleParts[0].Cost 
                + "</p> <div id=bottom><style type=text/css> #bottom{display: flex; flex-direction: row; align-self: center;} #quan{width: 5em;} #buy{background-color: red; width:15em; display: block; border: none; color: white; font-family: Sans-serif; font-weight: 600;}</style><select id=quan value=quan><option value=1>1</option> <option value=2>2</option> <option value=3>3</option></select><button id=buy>Add To Cart </button></div> </div> ";
                console.log("fit percent: " + unique[i].Fitment_Percent + "num reviews: " + unique[i].Num_Reviews);
                eeep++;
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

function refineForBestFit(data){
    //refines the data for the best fit function
    console.log(data);
    console.log(self.Type);
    
    let newData = [];
    for(let i = 0; i < data.partByYear.length; i++){
        if(data.partByYear[i].VehicleParts[0].Type == self.Part){
            newData.push(data.partByYear[i]);
        }
    }
    console.log(newData);
    return newData;
}
 
function internalGrid(type){
    var SRC = null;
    //var img = document.createElement("img");
 
        switch(type){
            case 'Bumper':
                SRC = bumper;
                break;
            case 'Suspension':
                SRC = suspension;
                break;
            case 'Leveling':
                SRC = levelingKit;
                break;
            case 'Wheels':
                SRC = tire;
                break;
            case 'Fenders':
                SRC = fender;
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

 
function bestFit(data){
    //finds the best fit item in the given data set
    let bestFitArr = [];
    console.log(data);

    
    //find the reviews with over 70% best fit
    for(let i = 0; i < data.length; i++){
        if(data[i].Fitment_Percent >= 70) {
            bestFitArr.push(data[i]);
        }
    }

     console.log(bestFitArr);
    //finds the part with the most number of reviews from our bestFitArr (parts with only 70+ fitment)
    let max = bestFitArr[0];
    for(let i = 0; i < bestFitArr.length; i++){
        if(bestFitArr[i].Num_Reviews > max.Num_Reviews) {
            console.log(i);
            max = bestFitArr[i];
        }
    }
    console.log("bestfit");
    console.log(max);

    return max;
}

function bestFitTwo(data){
    //finds the best fit item in the given data set if the array is the original data set (for all parts)
    let bestFitArr = [];

    //find the reviews with over 70% best fit
    for(let i = 0; i < data.partByYear.length; i++){
        if(data.partByYear[i].Fitment_Percent >= 70) {
            bestFitArr.push(data.partByYear[i]);
        }
    }

     console.log(bestFitArr);
    //finds the part with the most number of reviews from our bestFitArr (parts with only 70+ fitment)
    let max = bestFitArr[0];
    for(let i = 0; i < bestFitArr.length; i++){
        if(bestFitArr[i].Num_Reviews > max.Num_Reviews) {
            console.log(i);
            max = bestFitArr[i];
        }
    }
    console.log("bestfit");
    console.log(max);

    return max;
}

const Results = () => {
    const{data, error, loading} = useQuery(QUERY_YEAR_MAKE_MODEL, {variables: { year: self.Year,
        make: self.Make,
        model: self.Model,}});

    if( !error && !loading){
        var size = data.partByYear.length;
        if(size == 0){
            return(
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
                    <center>
                    <NoResults>
                        We're Sorry, We Couldn't Find Any Parts Matching Your Search For {self.Year} {self.Make} {self.Model}
                    </NoResults>
                        Change your vehicle or search for another part for more results. 
                    </center>
                </Column2>
            </ResultsPage>

             
            );
        }
    }
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
                Showing {self.Part}s for {self.Year} {self.Make} {self.Model}
               
       
            </ResultHeader>
            <NumRes> 
                {eeep} Results
            </NumRes>
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
