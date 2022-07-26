import React, { useState } from 'react';
import tire from "./tire.jpg";
import bumper from "./tempBumper.jpg";
import levelingKit from "./levelingKit.jpg";
import { useNavigate } from "react-router-dom";
import { Form, formOptions, Deals, FeatDeals, Deal1, Button } from "./homeStyle.js";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import '../App.css'

let yearGlobal;

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




// function DisplayData(year) {
//    const [loadData, { data: ymmdata }] = useLazyQuery(QUERY_YEAR_MAKE_MODEL);
//    console.log("hi");

//    loadData(
//       {
//          variables: {
//             Year: year,

//          },
//       }
//    );

//    console.log(ymmdata);
function ResultsPage() {
   let nav = useNavigate();
   //const [loadData, { data: yearData }] = useLazyQuery(QUERY_YEAR_MAKE_MODEL);
   const routeChange = () => {
      if (self.Year == "" || self.Make == "" || self.Model == "") {
         alert("Please fill out the year, make, and model field before submitting");
      } else {
         let path = '/results';
         nav(path);
      }
   }
   return (
      <div>
         <Button onClick={() => {
            //    loadData(
            //       {
            //          variables: {
            //             year: self.Year,
            //             make: self.Make,
            //             model: self.Model,
            //          },
            //       });
            // console.log("year searched: " + self.Year);
            // console.log("data: ");
            // console.log(yearData); 
            routeChange();
         }}>
            See Results
         </Button>
      </div>
   )

}

function DetailsPage(src, name) {
   let nav = useNavigate();
   const routeChange = () => {
      let path = '/details';
      nav(path);
   }
   return (
      <Deal1 title={name} onClick={routeChange}>
         <img id="deal1img" src={src} title={name} ></img>
         <a title={name}>{name}</a>
      </Deal1>
   )
}


function quizResult(yearSearched, makeSearched, modelSearched, part) {
   self.Year = yearSearched;
   self.Make = makeSearched;
   self.Model = modelSearched;
   self.Part = part;
}




const Home = () => {
   const [yearSearched, setYearSearched] = useState(" ");
   const [loadData, { data: yearData }] = useLazyQuery(QUERY_YEAR_MAKE_MODEL);

   const [makeSearched, setMakeSearched] = useState("");

   const [modelSearched, setModelSearched] = useState("");

   const [part, setPart] = useState("");

   //let nav = useNavigate();

   return (
      <div>
         <Form>
            <form id="form1">
               <h2>Find Parts For Your Vehicle</h2>
               <formOptions>
                  <select id="year" value={yearSearched} onChange={(e) => setYearSearched(e.target.value)}>
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
                  <div class='space'></div>
                  <select id="make" value={makeSearched} onChange={(x) => setMakeSearched(x.target.value)}>
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
                  <select id="model" value={modelSearched} onChange={(y) => setModelSearched(y.target.value)}>
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
                  <select id="part" value={part} onChange={(e) => setPart(e.target.value)}>

                     <option value="All Part">Part</option>

                     <option value="Suspension">Suspension</option>

                     <option value="Wheel">Wheel</option>

                     <option value="Leveling Kit">Leveling Kit</option>

                     <option value="Fender">Fender</option>
                     <option value="Bumper">Bumper</option>
                     <option value="All Part">All Part</option>
                  </select>
               </formOptions>


               {/* {self.Year = Home.yearSearched}
               {self.Make = Home.makeSearched}
               {self.Model= Home.modelSearched}
               {self.Part= Home.part} */}

               {/* <button type="button"
                  onClick={() => {
                     loadData(
                        {
                           variables: {
                              year: yearSearched,
                              make: makeSearched,
                              model: modelSearched,
                           },
                        });
                     console.log("year searched: " + yearSearched);
                     console.log("data: ");
                     console.log(yearData);
                  }}>
                  {" "}
                     TEST
                  </button> */}
               {/* {quizResult(yearSearched, makeSearched, modelSearched, part)} */}
               {quizResult(yearSearched, makeSearched, modelSearched, part)}
               <ResultsPage />
               {/* <button onClick={()=> {
                  const routeChange = () => {
                     if (self.Year == undefined || self.Make == undefined || self.Model == undefined) {
                        alert("Please fill out the year, make, and model field before submitting");
                     } else {
                        let path = '/results';
                        nav(path);
                     }
                  }
                  loadData(
                     {
                        variables: {
                           year: yearSearched,
                           make: makeSearched,
                           model: modelSearched,
                        },
                     });
                  routeChange();
                  console.log("year searched: " + yearSearched);
                  console.log("data: ");
                  console.log(yearData);
               }}>TEST</button> */}
            </form>
         </Form>
         <Deals>
            <a>Shop Deals For Your Vehicle</a>
         </Deals>
         <FeatDeals onClick={(e) => self.Name = e.target.title}>
            <Deal1>
               {DetailsPage(tire, "Mickey Thompson Baja Legend EXP Tires")}
            </Deal1>
            <Deal1>
               {DetailsPage(bumper, "Fab Fours Matrix Series Front Bumper with Pre-Runner Guard (black)")}
            </Deal1>
            <Deal1>
               {DetailsPage(levelingKit, "Pro Comp 2.5 Inch Leveling Lift Kit")}
            </Deal1>
         </FeatDeals>
         <Deals>
            <a>Shop New Products</a>
         </Deals>
         <FeatDeals onClick={(e) => self.Name = e.target.title}>
            <Deal1>
               {DetailsPage(tire, "Mickey Thompson Baja Legend EXP Tires")}
            </Deal1>
            <Deal1>
               {DetailsPage(bumper, "Fab Fours Matrix Series Front Bumper with Pre-Runner Guard (black)")}
            </Deal1>
            <Deal1>
               {DetailsPage(levelingKit, "Pro Comp 2.5 Inch Leveling Lift Kit")}
            </Deal1>
         </FeatDeals>
      </div>

   );
};

export default Home;
export const self =
{
   Year: "hello",
   Make: "hi",
   Model: "hey",
   Part: Home.part,
   Name: Home.name,
};