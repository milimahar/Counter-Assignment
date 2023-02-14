import React from "react";
import Counter from "./Counter";
import { useState } from "react";
import Style from "./Style.css"

const Button=(props)=>{



    return(
        <div>
         
        <h1>{props.num}</h1>
        </div>
    )
}
export default Button;
