import React , {useState, } from 'react';
import MyImage from "./stars.png";

const Popup = props => {

    const [favorite, setFavorite] = React.useState('');

    const handleNoChange = () => {
      setFavorite('No');
    };
  
    const handleYesChange = () => {
      setFavorite('Yes');
    };

    //handle radio buttons on Popup
    const RadioButton = ({ label, value, onChange }) => {
        return (
          <label>
            <input type="radio" checked={value} onChange={onChange} />
            {label}
          </label>
        );
      };

      const [favorite1, setFavorite1] = React.useState('');

      const handleNoChange1 = () => {
        setFavorite1('No');
      };
    
      const handleYesChange1 = () => {
        setFavorite1('Yes');
      }

      //dynamic 5 star ratings
      const [rating, setRating] = useState(0);
      const [hover, setHover] = useState(0);
    

 {/* displays and formats the popup for the product description page */}
    return (
        <>
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

                {/* 5 star ratings */}
                <div class="flex-container">
                    <div class="textyes"><h5>Overall Rating * </h5></div>
                    <div className="star-rating">
                        {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                        <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                        >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
        
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
                </div>
                <div class="textyes">
                    <select> 
                    <option value="0">Make</option>
                     <option value="Ford">Ford</option>
                     <option value="Jeep">Jeep</option>
                     <option value="Toyota">Toyota</option>
                     <option value="Lexus">Lexus</option>
                     <option value="Chevrolet">Chevrolet</option>
                     <option value="GMC">GMC</option>
                     <option value="Ram">Ram</option>
                    </select>
                </div>
                <div class="textyes">
                    <select>
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
                </div>
                </div>

            <div class="flex-container">
                <div class="textyes"> <h5> Was this part a good fit for your vehicle? *</h5></div>
                <div>
                <RadioButton
        label="Yes"
        value={favorite === 'Yes'}
        onChange={handleYesChange}
      />
      <RadioButton
        label="No"
        value={favorite === 'No'}
        onChange={handleNoChange}
      />
    </div>
            </div>

            <div class="flex-container">
                <div class="textyes"> <h5> Would you recommend this product to a friend? </h5></div>
                <div>
                <RadioButton
        label="Yes"
        value={favorite1 === 'Yes'}
        onChange={handleYesChange1}
      />
      <RadioButton
        label="No"
        value={favorite1 === 'No'}
        onChange={handleNoChange1}
      />
    </div>
            </div>

            <hr
                    style={{ 
                        color:'light gray',
                        height: '1px',
                    }}
                />

                <form> 
                    <div class="textyes"> <h5> Nickname * </h5>
                    <textarea rows = "1" cols = "60" name = "description" >
                            Example: bob27(Maximum of 25 characters.)
                    </textarea>
                    </div>

                <div class="textyes"> <h5> Location </h5>
                    <textarea rows = "1" cols = "60" name = "description" >
                            Example: New York, NY
                    </textarea>
                    </div>
                </form> 
       
            <div class="textyes"> <h5> Email* </h5></div>
            <textarea rows = "1" cols = "60" name = "description" >
                            Example: youremail@example.com
                    </textarea> 

                    <hr
                    style={{
                        color:'light gray',
                        height: '1px',
                    }}
                />

            <div class="textyes"><h5> How likely are you to recommend 4WheelParts to a friend? </h5></div>
            <div class="flex-container">
            <div class="radio-toolbar">
                <input type="radio" id="radioApple" name="radioFruit"/>
                <label for="radioApple">0</label>

                <input type="radio" id="radioBanana" name="radioFruit"/>
                <label for="radioBanana">1</label>

                <input type="radio" id="radioOrange" name="radioFruit"/>
                <label for="radioOrange">2</label> 

                <input type="radio" id="radio3" name="radioFruit"/>
                <label for="radio3">3</label> 

                <input type="radio" id="radio4" name="radioFruit"/>
                <label for="radio4">4</label> 

                <input type="radio" id="radio5" name="radioFruit"/>
                <label for="radio5">5</label> 

                <input type="radio" id="radio6" name="radioFruit"/>
                <label for="radio6">6</label>

                <input type="radio" id="radio7" name="radioFruit"/>
                <label for="radio7">7</label> 

                <input type="radio" id="radio8" name="radioFruit"/>
                <label for="radio8">8</label> 

                <input type="radio" id="radio9" name="radioFruit"/>
                <label for="radio9">9</label> 

                <input type="radio" id="radio10" name="radioFruit"/>
                <label for="radio10">10</label> 



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
                    <div class="textyes"> <h6> I agree to the terms and conditions. </h6></div>
                </div>

            <div class="textyes"><h5> You may receive emails regarding this submission. Any emails will include the ability to opt-out of future communications.  </h5> </div>
            
			<span className="close-icon2" onClick={props.handleClose}>
    		<input
      			type="button"
				class="slay"
      			value="POST REVIEW"
    		/>
            </span>

            <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
                </div>
            </div>


            </>
    );
};

export default Popup; 