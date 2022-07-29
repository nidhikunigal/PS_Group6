import React from "react";
import MyImage from "./stars.png";

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <div className="textyes">
                <h2>My Review For ...</h2>
                <h5>Required Fields are Marked with a *</h5>
                </div>
                <hr
                    style={{
                        color:'light gray',
                        height: '1px',
                    }}
                />

                <div class="flex-container">
                    <div class="textyes"><h5>Overall Rating * </h5></div>
                    <div> <img src={MyImage} className="starspic" alt=" "/></div>
                </div>

                <hr
                    style={{
                        color:'light gray',
                        height: '1px',
                    }}
                />

                <div class="textyes"> <h5> Review Title * </h5></div>

                <div class="textyes">
                <form> 
                    <textarea rows = "2" cols = "60" name = "description" >
                            Example: Great for the dirt!(Maximum of 50 characters.)
                    </textarea>
                </form>
                </div>

                <div class="textyes"> <h5> Review * </h5></div>
                <form>
                <textarea rows = "5" cols = "60" name = "description" >
                            Example: I bought this new set of tires for my 2020 Jeep Wrangler Sport and I love how much traction they have on the dirt ...
                    </textarea>
                </form>

                <hr
                    style={{
                        color:'light gray',
                        height: '1px',
                    }}
                />

                <div class="textyes"> <h5> What vehicle do you drive? * </h5></div>
                <div class="flex-container">
                <div class="textyes"> 
                    <select>
                        <option value="Year">Year </option>
                    </select>
                </div>
                <div class="textyes">
                    <select> 
                        <option value="Make">Make</option>
                    </select>
                </div>
                <div class="textyes">
                    <select>
                        <option value="Model">Model</option>
                    </select>
                </div>
                </div>

            <div class="flex-container">
                <div class="textyes"> <h5> Was this part a good fit for your vehicle? *</h5></div>
                <div class="textyes"> <button> Yes </button> </div>
                <div class="textyes"> <button> No </button> </div>
            </div>

            <div class="flex-container">
                <div class="textyes"> <h5> Would you recommend this product to a friend? </h5></div>
                <div class="textyes"> <button> Yes </button> </div>
                <div class="textyes"> <button> No </button> </div>
            </div>

            <hr
                    style={{ 
                        color:'light gray',
                        height: '1px',
                    }}
                />

                <form> 
                    <div class="textyes"> <h5> Nickname * </h5>
                    <textarea rows = "1" cols = "30" name = "description" >
                            Example: bob27(Maximum of 25 characters.)
                    </textarea>
                    </div>

                <div class="textyes"> <h5> Location </h5>
                    <textarea rows = "1" cols = "20" name = "description" >
                            Example: New York, NY
                    </textarea>
                    </div>
                </form> 
       
            <div class="textyes"> <h5> Email* </h5></div>
            <textarea rows = "1" cols = "40" name = "description" >
                            Example: youremail@example.com
                    </textarea> 

                    <hr
                    style={{
                        color:'light gray',
                        height: '1px',
                    }}
                />

            <div class="textyes"><h5> Would you recommend 4WheelParts to a friend? </h5></div>
            <div class="flex-container">
                    <div><button> 0 </button></div>
                    <div><button> 1 </button></div>
                    <div><button> 2 </button></div>
                    <div><button> 3 </button></div>
                    <div><button> 4 </button></div>
                    <div><button> 5 </button></div>
                    <div><button> 6 </button></div>
                    <div><button> 7 </button></div>
                    <div><button> 8 </button></div>
                    <div><button> 9 </button></div>
                    <div><button> 10 </button></div>
                </div>

                <hr
                    style={{
                        color:'light gray',
                        height: '1px',
                    }}
                />

                <div class="flex-container">
                    <div><textarea rows = "1" cols = "1" name = "description" >
                    </textarea></div>
                    <div class="textyes"> <h5> I agree to the terms and conditions. </h5></div>
                </div>

            <div class="textyes"><h5> You may receive emails regarding this submission. Any emails will include the ability to opt-out of future communications.  </h5> </div>
            
			<div class="textyes">
    		<input
      			type="button"
				class="slay"
      			value="POST REVIEW"
    		/>
            </div>

            <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
                </div>
            </div>
    );
};

export default Popup; 