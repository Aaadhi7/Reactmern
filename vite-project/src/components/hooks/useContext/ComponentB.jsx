import {useContext} from "react";
import {MyContext} from "./UseContextApp"


function componentB() {
    const contextValue = useContext(MyContext); 
    return <div>component B : {contextValue}</div>
}

export default componentB ;