import { useState } from "react";
function useUsername(){

    const getUsername = () =>{
        const user = sessionStorage.getItem("username");
        if(user === null){
            return "";
        }
        return user;
    };

    const [username,setUsername] = useState(getUsername());

    const saveUsername = (name) => {
        sessionStorage.setItem("username",name);
        setUsername(name);
    }

    return{
        setUsername:saveUsername,
        username
    }
};

export default useUsername;