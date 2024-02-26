//Uncontrolled components are react components where the form elements maintain their own state, and React is not directly involved in managing their state. We can still access their values using refs, but the React does not control or manipulate the state of these components.   

import React,{useRef} from "react";

function Uncontrolled (){
    let inputRef = useRef(null);

    const handleButtonClick =() => {
        alert(`Input value : ${inputRef.current.value}`)
    }

    return(
        <>
        <input type="text" ref={inputRef} />
        <button onClick={handleButtonClick}>Get input value</button>
        </>
    )
}
export default Uncontrolled;

//in this functional component , we use the useRef hook to create a reference to the input elment (inputRef), the input is maintain its own state , and when the button is clicked , we can access the input's value using the ref. React is not directly controlling the input's value on this case. 