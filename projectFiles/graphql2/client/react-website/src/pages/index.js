import React, { useState } from 'react';
import tire from "./wheels.jpg";
import bumper from "./bumper.jpg";
import levelingKit from "./levelingKit.jpg";
import { useNavigate } from "react-router-dom";
import { Form, formOptions, Deals, FeatDeals, Deal1, Button, DealName } from "./homeStyle.js";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import '../App.css';
import {prody} from "./results.js";

let yearGlobal;

//query for the product finder when given year make and model
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

//This function ensures that the user fills out all of the portions of the 
//part finder and then reroutes the user to the results page upon submission 
function ResultsPage() {
   let nav = useNavigate();
   //const [loadData, { data: yearData }] = useLazyQuery(QUERY_YEAR_MAKE_MODEL);
   const routeChange = () => {
      //checks if all fields were given an input
      if (self.Year == "" || self.Make == "" || self.Model == "") {
         alert("Please fill out the year, make, and model field before submitting");
      } 
      if(self.Part == ""){
         alert("Please select an option in the Part dropdown before submitting. If you want to view all parts for a vehicle, select 'View All Parts' ");
      }
      else {
         let path = '/results';
         nav(path);
      }
   }
   return (
      <div>
         <Button onClick={() => {
            routeChange();
         }}>
            See Results
         </Button>
      </div>
   )

}

//This function returns the deals portion of the landing page with the 
//attached on click event to transfer the user to the product detail page
//if an element is selected
function DetailsPage(src, name) {
   let nav = useNavigate();
   const routeChange = () => {
      prody.name = name;
      let path = '/details';
      nav(path);
   }
   return (
      <Deal1 title={name} onClick={routeChange}>
         <img id="deal1img" src={src} title={name} ></img>
         <DealName  title={name}>{name}</DealName>
      </Deal1>
   );
}

//this function sets the self attributes
function quizResult(yearSearched, makeSearched, modelSearched, part) {
   self.Year = yearSearched;
   self.Make = makeSearched;
   self.Model = modelSearched;
   self.Part = part;
}

//Main function called to return the home page
const Home = () => {
   //these are useStates that are set up to listen for the user input
   const [yearSearched, setYearSearched] = useState(" ");
   const [loadData, { data: yearData }] = useLazyQuery(QUERY_YEAR_MAKE_MODEL);
   const [makeSearched, setMakeSearched] = useState("");

   const [modelSearched, setModelSearched] = useState("");

   const [part, setPart] = useState("");

   const [isDisabled, setIsDisabled] = useState(true);

   const [isDisabled1, setIsDisabled1] = useState(true);

   const [isDisabled2, setIsDisabled2] = useState(true);


   //states for prohibition -> disables the inputs until user chooses an option 
   const changeDisable = () => {
      setIsDisabled(setYearSearched  => {
            if(setYearSearched != '0'){
               return !isDisabled;
            }
            return isDisabled;
      });
   }

   const changeDisable1 = () => {
      setIsDisabled1(setMakeSearched  => {
            if(setMakeSearched != '0'){
               return !isDisabled1;
            }
            return isDisabled1;
      });
   }

   const changeDisable2 = () => {
      setIsDisabled2(setModelSearched  => {
            if(setModelSearched != '0'){
               return !isDisabled2;
            }
            return isDisabled2;
      });
   }

   //changes cursors for prohibition
   const [cursor, setCursor] = useState('not-allowed');
   const changeCursor = () => {
      setCursor(setYearSearched => {
         if(setYearSearched != '0'){
            return 'auto';
         }
         return 'not-allowed';
      });
   }


   const [cursor1, setCursor1] = useState('not-allowed');
   const changeCursor1 = () => {
      setCursor1(setMakeSearched => {
         if(setMakeSearched != '0'){
            return 'auto';
         }
         return 'not-allowed';
      });
   }

   const [cursor2, setCursor2] = useState('not-allowed');
   const changeCursor2 = () => {
      setCursor2(setModelSearched => {
         if(setModelSearched != '0'){
            return 'auto';
         }
         return 'not-allowed';
      });
   }

   return ( 
      <div>
         <Form>
            <form id="form1">
               <h2>Find Parts For Your Vehicle</h2>
               <formOptions>
                  <select id="year" value={yearSearched} onChange={(e) => {setYearSearched(e.target.value); changeDisable(); changeCursor()}}>
                     <option value="0">Year</option>
                     <option value="2022">2022</option>
                     <option value="2021">2021</option>
                     <option value="2020">2020</option>
                     <option value="2019">2019</option>
                     <option value="2018">2018</option>
                     <option value="2017">2017</option>
                     <option value="2016">2016</option>
                     <option value="2015">2015</option>
                  </select>
      
                  <div class='space' style={{cursor: cursor}}></div>
                  <select name="make" id="make" value={makeSearched} disabled={isDisabled} onChange={(x) => {setMakeSearched(x.target.value); changeDisable1(); changeCursor1()}} style={{cursor:cursor}}>
                     <option value="0">Make</option>
                     <option value="Ford">Ford</option>
                     <option value="Jeep">Jeep</option>
                     <option value="Toyota">Toyota</option>
                     <option value="Lexus">Lexus</option>
                     <option value="Chevrolet">Chevrolet</option>
                     <option value="GMC">GMC</option>
                     <option value="Ram">Ram</option>
                  </select>
                  <div class='space'> </div>

                  <select name="model" id="model" value={modelSearched} disabled={isDisabled1} onChange={(y) => {setModelSearched(y.target.value); changeDisable2(); changeCursor2()}} style={{cursor:cursor1}}>
                     <option value="0">Model</option>
                     <option value="F-150">F-150</option>
                     <option value="Gladiator">Gladiator</option>
                     <option value="Wrangler">Wrangler</option>
                     <option value="Tacoma">Tacoma</option>
                     <option value="Bronco">Bronco</option>
                     <option value="Suburban">Suburban</option>
                     <option value="1500">1500</option>
                     <option value="4Runner">4Runner</option>
                     <option value="GX460">GX460</option>
                     <option value="Silverado">Silverado</option>
                     <option value="Sierra">Sierra</option>
                  </select>
                  <div class='space'> </div>
                  <select name="part" id="part" value={part} disabled={isDisabled2} onChange={(e) => setPart(e.target.value)} style={{cursor:cursor2}}>
                     <option value="0">Part</option>
                     <option value="Suspension">Suspension</option>
                     <option value="Wheel">Wheel</option>
                     <option value="Leveling">Leveling Kit</option>
                     <option value="Fender">Fender</option>
                     <option value="Bumper">Bumper</option>
                     <option value="All Part">View All Parts</option>
                  </select>
               </formOptions>

               {quizResult(yearSearched, makeSearched, modelSearched, part)}
               <ResultsPage />
            </form>
         </Form>
         <Deals>
            <a>Shop Deals For Your Vehicle</a>
         </Deals>
         <FeatDeals onClick={(e) => self.Name = e.target.title}>
            <a class="Back">&#10094; </a>
            <Deal1>
               {DetailsPage(tire, "4 Wheel Parts T-Series Split Spoke Design Bronze with Black Lip Wheels")}
            </Deal1>
            <Deal1>
               {DetailsPage(bumper, "Bronco Front Bumper")}
            </Deal1>
            <Deal1>
               {DetailsPage(levelingKit, "Pro Comp 2.5 Inch Leveling Lift Kit - 62206")}
            </Deal1>
            <a class="forward">&#10095;</a>
         </FeatDeals>
         <Deals>
            <a>Shop New Products</a>
         </Deals>
         <FeatDeals onClick={(e) => self.Name = e.target.title}>
         <a class="Back">&#10094;</a>
            <Deal1>
               {DetailsPage(tire, "Mickey Thompson Baja Legend EXP Tires")}
            </Deal1>
            <Deal1>
               {DetailsPage(bumper, "Fab Fours Matrix Series Front Bumper with Pre-Runner Guard (black)")}
            </Deal1>
            <Deal1>
               {DetailsPage(levelingKit, "Pro Comp 2.5 Inch Leveling Lift Kit")}
            </Deal1>
            <a class="forward">&#10095;</a>
         </FeatDeals>
      </div>
   
   );
};

export default Home;
//this is how we transfer the users input from one file to another
export const self =
{
   Year: "hello",
   Make: "hi",
   Model: "hey",
   Part: "All Part",
   Name: Home.name,
};