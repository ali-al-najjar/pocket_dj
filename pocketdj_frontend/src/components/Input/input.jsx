import { useEffect, useState } from "react";
import  './input.css';

const Input=({name,type,onChange,value},)=>{  
    return(
    <div className="single_input">
        <label className="single_input_label">{name}</label>
        <input type={type} value = {value} onChange={onChange} required/>
    </div>
    );
}
export default Input;