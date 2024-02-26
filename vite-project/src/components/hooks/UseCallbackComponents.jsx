import  React ,{useState,useCallback} from "react"

function useCallbackComponent () {
    console.log("re-rendering")
    const [count,setCount] = useState(0);
    const [data,setData] = useState('');

    const handleClick = useCallback(()=> {
        setCount(count+1);
    },[count]);

    return(       
         <>
        <h1>count : {count}</h1>
        <Childcomponent onclick = {handleClick}/>
        </>)

        function Childcomponent({onclick}) {
            console.log(" child re-rendering")
            return<button onClick={onclick}>Increment</button>
        }

  }
 export default useCallbackComponent ;