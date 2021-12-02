import React,{useEffect, useState} from "react";
import userService from "./Services/UserServices";
import useToken from "./Services/tokenHandler";
import useUsername from "./Services/usernameHandler";
function LoginContainer(){

    const {token,setToken} = useToken();
    const {username,setUsername} = useUsername();
    const [password,setPassword] = useState("");
    const [statusMessage,setStatusMessage] = useState("");
    const [isLoggedin,setIsLoggedin] = useState(false);

    useEffect(()=>{
        if(token !== ""){
            setIsLoggedin(true);
            setUsername(username);
            setPassword("");
            setStatusMessage("Logged in as "+ username);
        }
        else{
             setIsLoggedin(false);
        }
    },[token])

    const handleChangeName = (e)=>{
        setUsername(e.target.value);
    }

    const handleChangePsw = (e)=>{
        setPassword(e.target.value);
    }

    const handleLogin = () =>{
        userService.login({
            "username":username,
            "password":password
        },setStatusMessage,setToken,setUsername);
    }

    const handleLogout = () =>{
        userService.logout(token,setToken,setStatusMessage,setUsername);
        window.location.reload(false);
        setIsLoggedin(false);
    }

    const handleCreate = ()=>{
        if(username.length < 3 || password.length < 3){
            setStatusMessage("Username and password must have lenght >= 3")
            return;
        }

        userService.register({
            "username":username,
            "password":password
        },setStatusMessage);
    }

    return(
        <div className="LoginContainer">
           {!isLoggedin ? 
            <div>
                Username
                <input type="text" onChange={handleChangeName}></input><br></br>
                Password
                <input type="password" onChange={handleChangePsw}></input><br></br>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleCreate}>Create</button><br></br>
                {statusMessage}
            </div>
           :
            <div>
                {statusMessage}<br></br>
                <button onClick={handleLogout}>Logout</button>
            </div>
        }
        </div>
    );
}

export default LoginContainer;