import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>
         <logo>
            <img src = "4-wheel-parts-logo.png" width="300"></img>
         </logo>
         <search>
            <input type="text" placeholder="Search..." />
         </search>
         <topLinks>
            <support>
               <a class="active" href="#Support" onclick="supportPage()"> <font size="3" color="black">Support</font></a>
            </support>
            <myAcc>
               <a class="active" href="#myAcc" onclick="accountPage()"><font size="3" color="black">My Account</font></a>
            </myAcc>
            <findStore>
               <a class="active" href="#findStore" onclick="mapPage()"><font size="3" color ="black">Find Store Near Me</font></a>
            </findStore>
            <cart>
               <a class="active" href="#cart" onclick="cartPage()"><font size="3" color="black">Cart</font></a>
            </cart>
            <script>
               //use these functions to send user to respective page
               function supportPage(){

               }
               function accountPage(){

               }
               function mapPage(){

               }
               function cartPage(){

               }
            </script>
         </topLinks>

      </h1>

      <form id="form1">
         <h2>Find Parts For Your Vehicle</h2>
         <formOptions>
            <select id="year">
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
            
            <select id="make">
               <option value="0">make</option>
               <option value="Ford">Ford</option>
               <option value="Jeep">Jeep</option>
               <option value="Toyota">Toyota</option>
               <option value="Lexus">Lexus</option>
               <option value="Chevrolet">Chevrolet</option>
               <option value="GMC">GMC</option>
               <option value="Ram">Ram</option>
            </select>
            <select id="model">
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
            <select id="part">
               <option value="All Part">part</option>
               <option value="Bumper">Bumper</option>
               <option value="Tire">Tire</option>
               <option value="Turning Kit">Turning Kit</option>
               <option value="All Part">All Parts</option>
            </select>
         </formOptions>
         
         <p><button id ="submitButton" type="button" value="Submit" onclick="quizResult()">see results</button></p>
         {/* <script type="text/javascript">
            function quizResult(){
               var year = document.getElementById("year");
               var idxY = year.selectedIndex;
               var selYear = year.options[idxY].value;
               var make = document.getElementById("make");
               var idxMake = make.selectedIndex;
               var selMake = make.options[idxMake].value;
               var model = document.getElementById("model");
               var idxModel = model.selectedIndex;
               var selModel = model.options[idxModel].value;
               var part = document.getElementById("part");
               var idxP = part.selectedIndex;
               var selP = part.options[idxP].value;
               if(selYear == "0" || selMake == "0" || selModel == "0"){
                  alert("Please complete the year, make, and model fields before submitting.");
                  return;
               }
               localStorage["part"] = selP;
               localStorage["year"] = selYear;
               localStorage["make"]=selMake;
               localStorage["model"] = selModel;
               localStorage["results"] = 8;
               location.href="result.html";
               //use these results to send a query & then send user to result.html page
               
            }
         </script> */}
      </form>
      <deals>
         <a onclick="">Shop Deals For Your Vehicle</a>
      </deals>
      <featDeals>
         <deal1>
            <img id="deal1img"src="tire.jpg" ></img>
            Mickey Thompson Baja Legend EXP Tires 
         </deal1>
         <deal2>
            <img id="deal2img" src="tempBumper.jpg" ></img>
            Fab Fours Matrix Series Front Bumper with Pre-Runner Guard (Black) 
         </deal2>
         <deal3>
            <img id="deal3img" src="levelingKit.jpg"></img>
            Pro Comp 2.5 Inch Leveling Lift Kit
         </deal3>
      </featDeals>
      <deals>
         <a onclick="">Shop New Products</a>
      </deals>
            </div>
        );
    }
}

export default Home;