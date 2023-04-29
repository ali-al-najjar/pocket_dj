import { useEffect, useState } from "react";
import  './input.css';

const Input=({name,type,onChange},)=>{  
    return(
    <div className="single_input">
        <label className="single_input_label">{name}</label>
        <input type={type} onChange={onChange} required/>
    </div>
    );
}
export default Input;