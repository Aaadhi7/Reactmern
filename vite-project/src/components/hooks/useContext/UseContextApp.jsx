import React,{createContext,useContext} from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
//create a context with a defalult value

export const MyContext = createContext('default');

// function componentA() {
//     const contextValue = useContext(MyContext); 
//     return <div>component A : {contextValue}</div>
// }

function UseContextApp(){
     //provide the context value to the free

     return (
        <MyContext.Provider value = "Hello from context">
            <ComponentA/>
            <ComponentB/>
            </MyContext.Provider>
     )
}
export default UseContextApp ;