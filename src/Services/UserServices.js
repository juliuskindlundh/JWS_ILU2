const url = "http://localhost:8080/user";
const userService = {
    register:(dto,setStatusMessage)=>{
        fetch(url+"/register",{
            method:"put",
            body:JSON.stringify(dto),
            headers:{
                "Content-Type":"application/json",
            }
        }).then((res)=>{
            if(res.status === 200){
                setStatusMessage("A new user has been created, press \"login\" to continue");
            }
            else if(res.status === 409){
                setStatusMessage("There is already a user with that username");
            }
            else if(res.status === 500){
                setStatusMessage("Something went wrong");
            }
        });
    },
    login:(dto,setStatusMessage,setToken,setUsername)=>{
        fetch(url+"/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "username":dto.username,
                "password":dto.password,
            }
        }).then((res)=>{
            if(res.status === 200){
                window.location.reload(false);
                setStatusMessage("Logged in as "+ dto.username);
                setUsername(dto.username);
                res.body.getReader().read().then(result=>{            
                    const data = result.value;
                    const token = String.fromCharCode(...data)
                    setToken(token);
                }) 
            }
            else{
                setStatusMessage("Failed to login")
            }
        });
    },
    logout:(token,setToken,setStatusMessage,setUsername)=>{
        fetch(url+"logout",{
            method:"post",
            mode:"no-cors",
            headers:{
                "token":token 
            }
        }).then();
        setToken("");
        setStatusMessage("");
        setUsername("");
    }

}

export default userService;