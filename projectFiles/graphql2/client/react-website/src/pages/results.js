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
 
//Query of the Year Make and Model with parameters
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
 
//reformatted data that will be displayed
var unique = [];
//number of results that are displayed
var eeep = 0; 
//reformatted data used for finding the best fit
var data2 = [];
// This function cleans up the data as it is received from the query by 
// eliminating duplicates of products by name due to different trims 
function ResultGridFun(data, error, loading){ 
    eeep = 0; 
    if(!error && !loading){
        unique = [... new Map(data.partByYear.map(item => [item.Product_Name, item])).values()];
    }
    unique = unique; 
    return(
       unique
    )
}

//This function is applied when the user is using the part finder 
//to query for a specific type of part. This allows us to iterate 
//through all of the compatible parts and select only the ones
//that are relevant to the query
function refineUnique(data){
    if(self.Part != "All Part"){
    let temp = [];
    for(let i = 0; i < data.length; i++){
        if(data[i] != null && data[i].VehicleParts[0].Type == self.Part){
            temp.push(data[i]);
        }
    }
    return temp;
    }
    return data;
}

//refines the data for the best fit function
function refineForBestFit(data){
    let newData = [];
    for(let i = 0; i < data.partByYear.length; i++){
        if(data.partByYear[i].VehicleParts[0].Type == self.Part){
            newData.push(data.partByYear[i]);
        }
    }
    return newData;
}


//This function returns the first section of each of the grid elements
//The best fit sticker and image are returned dynamically for each grid element
//based on the returned data. This function also adds the onclick event to allow
//the image and product name to be clicked to move to the next page 
function InternalGrid(num){
    let nav = useNavigate();
    if(num >= unique.length || unique[num] == null){
        return(<></>); 
    }
    const routeChange = () =>{
        prody.name = unique[num].Product_Name;
        let path = '/details';
        nav(path);
    }
    var SRC = null;
    let uniqueType;
    //checks non duplicate parts array types to display corresponding picture
        switch(unique[num].VehicleParts[0].Type){
            case 'Bumper':
                SRC = bumper;
                break;
            case 'Suspension':
                SRC = suspension;
                break;
            case 'Leveling':
                SRC = levelingKit;
                break;
            case 'Wheel':
                SRC = tire;
                break;
            case 'Fender':
                SRC = fender;
        }
    //ensures if the specific product is in fact best fit
    let bestFitCheck = null;
    
    if(self.Part != "All Part" && self.Part != ""){
        //if input is for specific part
        let refinedDataForBestFit = refineForBestFit(data2);
        bestFitCheck = bestFit(refinedDataForBestFit);
        //refineUnique(unique);
    }
    else {
        //if the input is for all parts
        bestFitCheck = bestFitTwo(data2);
        }

    if (unique[num] != null && (unique[num].Product_Name !== bestFitCheck.Product_Name)) {
        return (
            <>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <img src={SRC} width="250px" onClick={routeChange} />
            </>
            );
    }
        return (<>
        <img src={bestfit} width="125px"/>
        <img src={SRC} width="250px" onClick={routeChange} />
        </>);
}

//This function returns the name of the product in each grid element
//with an onclick that passes the user to the details page
function PDPage(num){
    let nav = useNavigate();
    if(num >= unique.length || unique[num] == null){
        return; 
    }
    //navigates to repsective product's PDP
    const routeChange = () =>{
        prody.name = unique[num].Product_Name;
        let path = '/details';
        nav(path);
 
    }
    return(
        <a id="namey" onClick={routeChange}>{unique[num].Product_Name}</a>
    )
}

//This is the final function to be called in each of the grid elements 
//this function returns the price, quantity, and add to cart button 
function priceDyn(num){
    if(num >= unique.length || unique[num] == null){
        return; 
    }
    //price bar
    return(<div>
            <p id="price">
                ${unique[num].VehicleParts[0].Cost}
            </p>
            <div id="bottom">
            <select id="quan" value="quan">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button id="buy">Add To Cart </button>
            </div>
            </div> )
}

//this is the onclick function for the change vehicle button on the left
//hand side of the page
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
    
    //find the reviews with over 70% best fit
    for(let i = 0; i < data.length; i++){
        if(data[i].Fitment_Percent >= 70) {
            bestFitArr.push(data[i]);
        }
    }

    //finds the part with the most number of reviews from our bestFitArr (parts with only 70+ fitment)
    let max = bestFitArr[0];
    for(let i = 0; i < bestFitArr.length; i++){
        if(bestFitArr[i].Num_Reviews > max.Num_Reviews) {
            max = bestFitArr[i];
        }
    }


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

   //  console.log(bestFitArr);
    //finds the part with the most number of reviews from our bestFitArr (parts with only 70+ fitment)
    let max = bestFitArr[0];
    for(let i = 0; i < bestFitArr.length; i++){
        if(bestFitArr[i].Num_Reviews > max.Num_Reviews) {
            max = bestFitArr[i];
        }
    }
   // console.log("bestfit");
   // console.log(max);

    return max;
}


//this is the function that is called to produce the results page 
const Results = () => {
    //queries the data using the user input 
    const{data, error, loading} = useQuery(QUERY_YEAR_MAKE_MODEL, {variables: { year: self.Year,
        make: self.Make,
        model: self.Model,}});

    //cleans the data (unique is the individual names and data2 is all of the data that is returned)
    if(data != null){
        unique = ResultGridFun(data, error, loading);
        unique= refineUnique(unique);
        eeep = unique.length; 
        data2 = data; 
    }


    if( !error && !loading){
        //this function checks if there are no results and returns a different page 
        if(eeep == 0){
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
                {/* returns all the result boxes(brute force) */}
                <div id="grid-element">
                    {InternalGrid(0)}
                    {PDPage(0)}
                    {priceDyn(0)}
                </div>
                <div id="grid-element">
                    {InternalGrid(1)}
                    {PDPage(1)}
                    {priceDyn(1)}
                </div>
                <div id="grid-element">
                    {InternalGrid(2)}
                    {PDPage(2)}
                    {priceDyn(2)}
                </div>
                <div id="grid-element">
                    {InternalGrid(3)}
                    {PDPage(3)}
                    {priceDyn(3)}
                </div>
                <div id="grid-element">
                    {InternalGrid(4)}
                    {PDPage(4)}
                    {priceDyn(4)}
                </div>
                <div id="grid-element">
                    {InternalGrid(5)}
                    {PDPage(5)}
                    {priceDyn(5)}
                </div>
                <div id="grid-element">
                    {InternalGrid(6)}
                    {PDPage(6)}
                    {priceDyn(6)}
                </div>
                <div id="grid-element">
                    {InternalGrid(7)}
                    {PDPage(7)}
                    {priceDyn(7)}
                </div>
                <div id="grid-element">
                    {InternalGrid(8)}
                    {PDPage(8)}
                    {priceDyn(8)}
                </div>
                <div id="grid-element">
                    {InternalGrid(9)}
                    {PDPage(9)}
                    {priceDyn(9)}
                </div>
                <div id="grid-element">
                    {InternalGrid(10)}
                    {PDPage(10)}
                    {priceDyn(10)} 
                </div>
                <div id="grid-element">
                    {InternalGrid(11)}
                    {PDPage(11)}
                    {priceDyn(11)}
                </div>
                <div id="grid-element">
                    {InternalGrid(12)}
                    {PDPage(12)}
                    {priceDyn(12)}
                </div>
                <div id="grid-element">
                    {InternalGrid(13)}
                    {PDPage(13)}
                    {priceDyn(13)}
                </div>
                <div id="grid-element">
                    {InternalGrid(14)}
                    {PDPage(14)}
                    {priceDyn(14)}
                </div>
                <div id="grid-element">
                    {InternalGrid(15)}
                    {PDPage(15)}
                    {priceDyn(15)}
                </div>
                <div id="grid-element">
                    {InternalGrid(16)}
                    {PDPage(16)}
                    {priceDyn(16)}
                </div>
                <div id="grid-element">
                    {InternalGrid(17)}
                    {PDPage(17)}
                    {priceDyn(17)}
                </div>
                <div id="grid-element">
                    {InternalGrid(18)}
                    {PDPage(18)}
                    {priceDyn(18)}
                </div>
                <div id="grid-element">
                    {InternalGrid(19)}
                    {PDPage(19)}
                    {priceDyn(19)}
                </div> 
                    </center>
                </Column2>
            </ResultsPage>
            );
        }
    }
    //this is the standard results page that is returned whenever there are results
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
                <style> 
                    {`
                        #grid-element{
                            display: flex; 
                            flex-direction:column; 
                            align-items: center;
                            justify-content: space-between;  
                            text-align: center;  
                            height: 400px;
                        }
                        #buy{
                            background-color: red;
                            width:15em;
                            display: block;
                            border: none;
                            color: white;
                            font-family: Sans-serif;
                            font-weight: 600;
                        }
                        #bottom{
                            display: flex; 
                            flex-direction: row;
                            align-self: center;
                            
                        }
                        #quan{width: 5em;} 
                        #price{justify-self: flex-end; align-self: flex-start; font-family:Sans-serif; font-weight:600; margin-left: 30px; height: 8px; }
                        #namey{
                            color: blue; 
                            font-family: Sans-serif; 
                            font-size: 1em;
                            text-decoration-line: underline; 
                        }
                    `}
                </style>
                <ResultGrid>
                <div id="grid-element">
                    {InternalGrid(0)}
                    {PDPage(0)}
                    {priceDyn(0)}
                </div>
                <div id="grid-element">
                    {InternalGrid(1)}
                    {PDPage(1)}
                    {priceDyn(1)}
                </div>
                <div id="grid-element">
                    {InternalGrid(2)}
                    {PDPage(2)}
                    {priceDyn(2)}
                </div>
                <div id="grid-element">
                    {InternalGrid(3)}
                    {PDPage(3)}
                    {priceDyn(3)}
                </div>
                <div id="grid-element">
                    {InternalGrid(4)}
                    {PDPage(4)}
                    {priceDyn(4)}
                </div>
                <div id="grid-element">
                    {InternalGrid(5)}
                    {PDPage(5)}
                    {priceDyn(5)}
                </div>
                <div id="grid-element">
                    {InternalGrid(6)}
                    {PDPage(6)}
                    {priceDyn(6)}
                </div>
                <div id="grid-element">
                    {InternalGrid(7)}
                    {PDPage(7)}
                    {priceDyn(7)}
                </div>
                <div id="grid-element">
                    {InternalGrid(8)}
                    {PDPage(8)}
                    {priceDyn(8)}
                </div>
                <div id="grid-element">
                    {InternalGrid(9)}
                    {PDPage(9)}
                    {priceDyn(9)}
                </div>
                <div id="grid-element">
                    {InternalGrid(10)}
                    {PDPage(10)}
                    {priceDyn(10)} 
                </div>
                <div id="grid-element">
                    {InternalGrid(11)}
                    {PDPage(11)}
                    {priceDyn(11)}
                </div>
                <div id="grid-element">
                    {InternalGrid(12)}
                    {PDPage(12)}
                    {priceDyn(12)}
                </div>
                <div id="grid-element">
                    {InternalGrid(13)}
                    {PDPage(13)}
                    {priceDyn(13)}
                </div>
                <div id="grid-element">
                    {InternalGrid(14)}
                    {PDPage(14)}
                    {priceDyn(14)}
                </div>
                <div id="grid-element">
                    {InternalGrid(15)}
                    {PDPage(15)}
                    {priceDyn(15)}
                </div>
                <div id="grid-element">
                    {InternalGrid(16)}
                    {PDPage(16)}
                    {priceDyn(16)}
                </div>
                <div id="grid-element">
                    {InternalGrid(17)}
                    {PDPage(17)}
                    {priceDyn(17)}
                </div>
                <div id="grid-element">
                    {InternalGrid(18)}
                    {PDPage(18)}
                    {priceDyn(18)}
                </div>
                <div id="grid-element">
                    {InternalGrid(19)}
                    {PDPage(19)}
                    {priceDyn(19)}
                </div>

                </ResultGrid>
            </div>
            <div id="grid-container" class="grid">
            </div>
        </Column2>
    </ResultsPage>
);
};
 
export default Results;


export const prody = {
    name: "T-Rex Grilles Side Vent - 54001",
}