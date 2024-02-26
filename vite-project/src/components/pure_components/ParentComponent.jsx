import React,{useState} from "react";

const MyPureComponent = React.memo(({message})=>{
    console.log("Component is re-rendering");
    return <div>{message}</div>
});

function ParentComponent () {
    const [count,setCount]=useState(1);

    return(
        <>
        <MyPureComponent message={"Hello Iam a Component"} />
        <p>Count : {count}</p>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        </>
    )
}

export default ParentComponent;