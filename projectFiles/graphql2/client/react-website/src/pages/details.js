import React , {useState, } from 'react';
import {self} from "./index";
import MyImage from './levelingKit.jpg';
import MyImage2 from './clearstars.png';
import MyImage3 from './0stars.png';
import MyImage4 from './logos.png'
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

    const{data: partData, error, loading} = useQuery(QUERY_BY_NAME, {variables: {productName: "Pro Comp 6' Stage 1 with Pro-X Shocks - K4189T"}});
    console.log(partData);
    if( !error && !loading){
        let productNameTitle = partData.partByName[0].Product_Name;
        let productFitPercent = partData.partByName[0].Compatible_Vehicles[0].Fitment_Percent;
        let generalVehicle = partData.partByName[0].generalVehicle;
        
        return (
            <>
            <div>{productNameTitle}</div>

            <div class="flex-vibes">
            <nav class="nav left"></nav>
                <div> <img src={MyImage} className="img" alt=" "/></div>
                <div> 
                <div>
                        <img src={MyImage2} className="starspic" alt=" "/>
                </div>
                    <h2>{productFitPercent}% of {generalVehicle} Drivers Found This a Good Fit.</h2>

                </div>
                <div class="borderbox">
                <section class="nav right">

                <div class="flex-container">
                    <div class="col top">                
                        <select>
                            <option value="4">4 </option>
                        </select></div>
                        <div class="col bottom">
                        <input type="button" class="button_css" value="ADD TO CART"/>
                    </div>
                </div>

                    <div class="col middle">
                        <div class="textyes">
                        <div><h6>$40 /Suggested monthly payments with 6 mo. special financing. Learn More</h6></div>
                        </div>
                    </div>

                    <div class="col bottom">
                    <div class="flex-container">
                        <div><input type="checkbox" value=""></input>
                        </div>

                        <hr
                        style={{
                            color:'light gray',
                            height: '1px',
                        }}
                    />

                        <div class="textyes">
                        <div> <h6> Free! Curbside & In-Store Pickup: 4 Wheel Parts Cherry Hill NJ #264</h6></div>
                        </div>
                    </div>

                    <hr
                        style={{
                            color:'light gray',
                            height: '1px',
                        }}
                    />


                    <div class="flex-container">
                        <div> 
                        <input type="checkbox" value=""></input>
                        </div>
                        <div class="textyes"> <h6> Ship to Home </h6></div>
                    </div>

                    <hr
                        style={{
                            color:'light gray',
                            height: '1px',
                        }}
                    />
                    <div class="flex-container">
                        <div>
                        <input type="checkbox" value=""></input>
                        </div>
                        <div class="textyes"> <h6> Add Protection Plan for $23.80 </h6></div>
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