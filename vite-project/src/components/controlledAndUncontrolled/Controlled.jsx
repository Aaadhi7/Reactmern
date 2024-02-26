//Controlled components are react components where react controls and manages the state of the elements, such as form inputs . The components state and the value of the input elements are tightly linked, and any change to the input is controlled through React's state Management.

import React,{useState} from "react";

function Controlled (){
    let [inputValue,setInputValue]=useState('');

    const handleChange =(e) => {
        setInputValue(e.target.value);
    }

    return(
        <>
        <input type="text" value={inputValue} onChange={handleChange} />
        </>
    )
}
export default Controlled;

//In this functional component , we use the useState hook to manage the input state. The input value is controlled by React's state , and any changes handled through the onChange event Handler.