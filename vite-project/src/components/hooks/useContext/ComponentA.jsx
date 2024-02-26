import {useContext} from "react";
import {MyContext} from "./UseContextApp"


function componentA() {
    const contextValue = useContext(MyContext); 
    return <div>component A : {contextValue}</div>
}


     export default componentA;