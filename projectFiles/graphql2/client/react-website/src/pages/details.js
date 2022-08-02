import React , {useState, } from 'react';
import {self} from "./index";
import MyImage from './levelingKit.jpg';
import MyImage2 from './clearstars.png';
import MyImage3 from './0stars.png';
import MyImage4 from './cart.png'
import Popup from './popup';
import { Deals, FeatDeals, Deal1 } from "./homeStyle.js";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import tire from "./wheels.jpg";
import bumper from "./bumper.jpg";
import levelingKit from "./levelingKit.jpg";
import suspension from "./suspension.jpg";
import fender from "./fender.jpg";
import bestfit from "./best_fit.png";

const QUERY_BY_NAME = gql`
query PartByName($productName: String!) {
  partByName(Product_Name: $productName) {
    Type
    Product_Name
    Company
    Cost
    Specifications
    Technical_Details
    General_Vehicle
    Compatible_Vehicles {
      Product_Name
      Year
      Make
      Model
      Trim
      Num_Reviews
      Fitment_Percent
    }
  }
}
`;

const Details = () => {
    const [isOpen, setIsOpen] = useState(false);
 
	const togglePopup = () => {
	  setIsOpen(!isOpen);
	}

    const [isActive, setIsActive] = useState(false); 
    const handleClick = () => {
        setIsActive(current => !current);
    }

    const{data: partData, error, loading} = useQuery(QUERY_BY_NAME, {variables: {productName: "Pro Comp 6' Stage 1 with Pro-X Shocks - K4189T"}});
    console.log(partData);
    if( !error && !loading){
        let productNameTitle = partData.partByName[0].Product_Name;
        let productFitPercent = partData.partByName[0].Compatible_Vehicles[0].Fitment_Percent;
        let generalVehicle = partData.partByName[0].generalVehicle;
        let productCost = partData.partByName[0].Cost;

    return (
        <>

        <div class="flex-container">
        
        <div class ="flex-vibes">
        <nav class="nav left"></nav>
            <div> 
                <div><h1>{productNameTitle}</h1></div>
                <img src={MyImage} className="img" alt=" "/>
            </div>
   

            <div class="nav middle"> 
                <div> <img src={MyImage2} className="starspic" alt=" "/> </div> 
                <div class="greeny"> <h2>{productFitPercent}% of {generalVehicle} Drivers Found This a Good Fit.</h2> </div> 

            </div>
        </div> 
        <div> </div>

        <div class="nav right">
            <section class="borderbox">

            <div>
               <h2> ${productCost} </h2>
            </div>

            <div class="flex-container">
                <div class="col top">                
                    <select>
                        <option value="1">1 </option>
                        <option value="2">2 </option>
                        <option value="3">3</option>
                        <option value="4">4 </option>
                        <option value="5">5 </option>
                        <option value="6">6 </option>
                        <option value="7">7 </option>
                        <option value="8">8 </option>
                        <option value="9">9 </option>
                        <option value="10">10 </option>
                        <option value="11">11 </option>
                        <option value="12">12 </option>
                        <option value="13">13 </option>
                        <option value="14">14 </option>
                        <option value="15">15 </option>
                    </select></div>
                    <div class="col bottom">
                    <input type="button" style = {{backgroundColor: isActive ? 'maroon' : '',
                    color: isActive ? 'white' : '',
                    }} class="button_css" value="ADD TO CART" onClick={handleClick}/>
                </div>
            </div>

                <hr
                    style={{
                        color:'light gray',
                        height: '1px',
                    }}
                />

                <div> <img src={MyImage4} className="logos" alt=" "/></div>

            </section>
        <nav class="main"></nav>
        </div>
        </div>
   
     
    <div>
        <input type="button" class="buttonz" value="SPECIFICATIONS"></input>
        <input type="button" class="buttonz" value="REVIEWS"></input>
        <input type="button" class="buttonz" value="Q&A"></input>
        <input type="button" class="buttonz" value="PEOPLE ALSO BOUGHT"></input> 
        <input type="button" class="buttonz" value="MANUFACTURER"></input>
    </div>

    <hr
        style={{
            color:'light gray',
            height: '1px',
            }}
        />

    <div> <h3> Specifications </h3></div>
    <div><h5> blah blah blah blah </h5></div>

    <hr
        style={{
            color:'light gray',
            height: '1px',
            }}
        />


    <div><h3> Customer Reviews </h3></div>
    <div class="flex-container">
    <div>
           <img src={MyImage3} className="starspic2" alt=" "/>
            </div> 
    </div>

    <div>
    		<input
      			type="button"
				class="button_css"
      			value="Write a Review"
      			onClick={togglePopup}
    		/>
    		{isOpen && <Popup
      			content={<>
      			</>}
      		handleClose={togglePopup}
    		/>}
  			</div>
        </>    

    );}}
export default Details; 