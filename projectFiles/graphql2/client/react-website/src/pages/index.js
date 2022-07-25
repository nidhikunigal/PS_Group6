import React, { useState } from 'react';
import tire from "./tire.jpg";
import bumper from "./tempBumper.jpg";
import levelingKit from "./levelingKit.jpg";
import { useNavigate } from "react-router-dom";
import { Form, formOptions, Deals, FeatDeals, Deal1 } from "./homeStyle.js";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

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

function ResultsPage() {
   let nav = useNavigate();

   const routeChange = () => {
      if (self.Year == undefined || self.Make == undefined || self.Model == undefined) {
         alert("Please fill out the year, make, and model field before submitting");
      } else {
         let path = '/results';
         nav(path);
      }
   }
   return (
      <button color="white" className="px-4" onClick={routeChange}
      >
         see results
      </button>
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



//function oops(year, make, model, part) {
// quizResult(year, make, model, part);
//   DisplayData(year, make, model);
//}

function quizResult(year, make, model, part) {
   // yearGlobal = year;
   self.Year = year;
   self.Make = make;
   self.Model = model;
   self.Part = part;

}

function DisplayData(year) {
   const [loadData, { data: ymmdata }] = useLazyQuery(QUERY_YEAR_MAKE_MODEL);
   console.log("hi");

   loadData(
      {
         variables: {
            Year: year,

         },
      }
   );

   console.log(ymmdata);
   function ResultsPage() {
      let nav = useNavigate();

      const routeChange = () => {
         if (self.Year == undefined || self.Make == undefined || self.Model == undefined) {
            alert("Please fill out the year, make, and model field before submitting");
         } else {
            let path = '/results';
            nav(path);
         }
      }
      return (
         <button color="white" className="px-4" onClick={routeChange}
         >
            see results
         </button>
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


   function quizResult(year, make, model, part) {
      self.Year = year;
      self.Make = make;
      self.Model = model;
      self.Part = part;
   }

}

const Home = () => {
   const [yearSearched, setYearSearched] = useState(" ");
   const [loadData, { data: yearData }] = useLazyQuery(QUERY_YEAR_MAKE_MODEL);

   const [makeSearched, setMakeSearched] = useState("");

   const [modelSearched, setModelSearched] = useState("");

   const [part, setPart] = useState("");

   return (
      <div>
         <Form>
            <form id="form1">
               <h2>Find Parts For Your Vehicle</h2>
               <formOptions>
                  <select id="year" value={yearSearched} onChange={(e) => setYearSearched(e.target.value)}>
                     <option value="0">year</option>
                     <option value="2022">2022</option>
                     <option value="2021">2021</option>
                     <option value="2020">2020</option>
                     <option value="2019">2019</option>
                     <option value="2018">2018</option>
                     <option value="2017">2017</option>
                     <option value="2016">2016</option>
                     <option value="2015">2015</option>
                  </select>

                  <select id="make" value={makeSearched} onChange={(x) => setMakeSearched(x.target.value)}>
                     <option value="0">make</option>
                     <option value="Ford">Ford</option>
                     <option value="Jeep">Jeep</option>
                     <option value="Toyota">Toyota</option>
                     <option value="Lexus">Lexus</option>
                     <option value="Chevrolet">Chevrolet</option>
                     <option value="GMC">GMC</option>
                     <option value="Ram">Ram</option>
                  </select>
                  <select id="model" value={modelSearched} onChange={(y) => setModelSearched(y.target.value)}>
                     <option value="0">model</option>
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
                  <select id="part" value={part} onChange={(e) => setPart(e.target.value)}>
                     <option value="All Part">part</option>
                     <option value="Bumper">Bumper</option>
                     <option value="Tire">Tire</option>
                     <option value="Turning Kit">Turning Kit</option>
                     <option value="All Part">All Parts</option>
                  </select>
               </formOptions>
               <button type="button"
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
                  {" "}fetch data</button>
               <ResultsPage type="button" onClick={quizResult(yearSearched, makeSearched, modelSearched, part)} />
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
   Year: Home.year,
   Make: Home.make,
   Model: Home.model,
   Part: Home.part,
   Name: Home.name
};
