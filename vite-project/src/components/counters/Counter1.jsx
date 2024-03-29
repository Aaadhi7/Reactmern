//Functional Component

import React,{useState} from "react";

function Counter1 ({initialCount}) {
    const[count,setCount] = useState(initialCount);

    const increment = () => {
        setCount(count + 1);
    }

    return(
        <>
        <h1>Functional Component</h1>
        <p>Count : {count}</p>
        <button onClick={increment}>Increment</button>
        </>
    )
}

export default Counter1;