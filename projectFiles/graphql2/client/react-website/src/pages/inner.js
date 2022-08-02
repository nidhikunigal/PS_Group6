import { renderMatches, useNavigate } from "react-router-dom";
//import unique from "./results";
import {dat} from "./results";
import tire from "./wheels.jpg";
import bumper from "./bumper.jpg";
import levelingKit from "./levelingKit.jpg";
import suspension from "./suspension.jpg";
import fender from "./fender.jpg";
import bestfit from "./best_fit.png";
import React from "react";
import { Component } from "react";
 

const Inner = () => {
    var daty = dat.data;
    var gridy = document.createElement("div");
    gridy.id="grid-container";
    gridy.className="grid";
    //console.log("out here");
    //console.log(daty);
    for(let i = 0; i < daty.length; i++){
        if(daty[i] != null){
            var SRC =null;
            switch(daty[i].VehicleParts[0].Type){
                case 'Bumper':
                    SRC = bumper;
                    break;
                case 'Suspension':
                    SRC = suspension;
                    break;
                case 'Leveling':
                    SRC = levelingKit;
                    break;
                case 'Wheels':
                    SRC = tire;
                    break;
                case 'Fenders':
                    SRC = fender;
            }
            const cell = document.createElement("div");
            cell.id = "grid-element";

            const imag = document.createElement("img");
            imag.src = SRC; 

            const nam = document.createElement("a");
            nam.id = "ProdName";
            //nam.onclick = PDPage();
            const nam2 = document.createTextNode(daty[i].Product_Name); 
            nam.appendChild(nam2);

            cell.append(imag, nam);
            gridy.appendChild(cell);
        }
    }
   // console.log(gridy);
    const safety = ({gridy}) => gridy; 
    const safest = ({gridy}) => (
        <>
        <safety>{gridy}</safety>
        </>
    )
    
        return(<Component>{gridy}</Component>);
};
 
export default Inner;