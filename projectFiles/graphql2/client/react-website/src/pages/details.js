import React , {useState, } from 'react';
import {self} from "./index";
import MyImage from './levelingKit.jpg';
import MyImage2 from './clearstars.png';
import MyImage3 from './0stars.png';
import MyImage4 from './cart.png'
import Popup from './popup';

const Details = () => {
    const [isOpen, setIsOpen] = useState(false);
 
	const togglePopup = () => {
	  setIsOpen(!isOpen);
	}

    return (
        <>

        <div class="flex-container">
        <nav class="nav left"></nav>
            <div> 
                <div><h2>{self.Name}</h2></div>
                <img src={MyImage} className="img" alt=" "/></div>
            <div> 
            <div>
                    <img src={MyImage2} className="starspic" alt=" "/>
            </div>

                <h2>descriptions n stuff
                blah iwjoifjwijqnjifljwnejjnejwlnjfjnj;wevjnjve </h2>

            </div>
            <div class="borderbox">
            <section class="nav right">

{/*INSERT PRICE -----------------------------*/}
            <div>
               <h2> $000.00 </h2>
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
                    <input type="button" class="button_css" value="ADD TO CART"/>
                </div>
            </div>
                <div><h4>__ % of users think this product is a good fit</h4></div>

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

    );}
export default Details; 