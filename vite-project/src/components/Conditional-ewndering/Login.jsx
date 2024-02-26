import React,{useState} from "react";

function Login(){
    let [IsLoggedIn,setIsLoggedIn] =useState(false);
    let content ;

    const LoginButton =  ()=>{
        setIsLoggedIn(true)
    }
    const LogoutButton =()=>{
        setIsLoggedIn(false)
    }

    return(
        <>
        {IsLoggedIn?(<div>Welcome, You are logged in</div>):(<div>Please Login</div>)}

        <button onClick={LoginButton}>Login</button>
        <button onClick={LogoutButton}>Logout</button>
        </>
    )
}

export default Login ;


