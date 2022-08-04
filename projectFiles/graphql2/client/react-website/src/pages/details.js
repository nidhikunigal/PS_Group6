import React , {useState, } from 'react';
import {self} from "./index";
import MyImage from './levelingKit.jpg';
import MyImage2 from './clearstars.png';
import MyImage3 from './0stars.png';
import MyImage4 from './cart.png'
import Popup from './popup';
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import tire from "./wheels.jpg";
import bumper from "./bumper.jpg";
import levelingKit from "./levelingKit.jpg";
import suspension from "./suspension.jpg";
import fender from "./fender.jpg";
import bestfit from "./best_fit.png";
import check from "./checkmark.png";
import './pdpstyle.css';
import {prody} from "./results";

//query for when we have a name input
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

//this is the function that returns the general details page when prompted
const Details = () => {
    const [isOpen, setIsOpen] = useState(false);
 
	const togglePopup = () => {
	  setIsOpen(!isOpen);
	}

    const [isActive, setIsActive] = useState(false); 
    const handleClick = () => {
        setIsActive(current => !current);
    }

    const{data: partData, error, loading} = useQuery(QUERY_BY_NAME, {variables: {productName: prody.name}});
    if( !error && !loading){
        //all the fields as varibles from the query
        let productNameTitle = partData.partByName[0].Product_Name;
        let productFitPercent = partData.partByName[0].Compatible_Vehicles[0].Fitment_Percent;
        let productNumRev = partData.partByName[0].Compatible_Vehicles[0].Num_Reviews;
        let generalVehicle = partData.partByName[0].generalVehicle;
        let productCost = partData.partByName[0].Cost;
        let productSpec = partData.partByName[0].Specifications;
        let formattedProductSpec = productSpec.split(",");
        let prodTechDeails = partData.partByName[0].Technical_Details;
        let formattedTechDetails = prodTechDeails.split(",");
        let prodType = partData.partByName[0].Type;

        let imageToUse;

        //selects the proper image for the product
        switch(prodType) {
            case "Wheels":
            imageToUse = tire;
            break;
            case "Leveling":
                imageToUse = levelingKit;
                break;
            case "Suspension":
                imageToUse = suspension;
                break;
            case "Fenders":
                imageToUse = fender;
                break;
            case "Bumper":
                imageToUse = bumper;
                break;
            default:
                imageToUse = tire;

        }

    return (
        <>

        <div class="flex-container1">
        <nav class="nav left"></nav>
            <div id="firstFlex"> 
                <div class = "PDPstyle"><h2>{prody.name}</h2></div>
                <div><img id="imageUsed" src={imageToUse} alt=" " width = "95%"/></div>
                
            </div>
            <div id="secondFlex"> 
            <div>
                    <img src={MyImage2} className="starspic" alt=" "/>
            </div>
                <div className ='fitStat'> <img src={check} width='17px'></img> {productFitPercent}% of drivers of your vehicle found this product to be a good fit</div>
                <div className ='fitStat'> <img src={check} width='17px'></img> Lowest Price Guarentee</div>
                <div className ='fitStat'> <img src={check} width='17px'></img> Qualifies for Free Shipping</div>
                <ul className = 'PDPstyle'>
                    {formattedTechDetails.map((elem)=>{
                        return <li id="techdet">{elem}</li>
                    })}
                </ul>
            </div>
            <div class="borderbox" id="borderbox">
            <section class="nav right" id ="right"> 

            <div>
               <h2> ${productCost} </h2>
            </div>

            <div class="flex-container" id="pricing">
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
                    <input type="button" style = {{textColor: isActive ? 'gray' : '',
                    color: isActive ? 'gold' : '',
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

    <div class="PDPstyle"> <h3> Specifications </h3></div>
    <div> 
        <ul className = 'PDPstyle'>    
        {formattedProductSpec.map((elem)=>{
            return <li>{elem}</li>
        })}
        </ul>
    </div>

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