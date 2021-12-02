const url = "http://localhost:8080/product";
const productService = {
    getAll:(token,setData)=>{
        fetch(url+"/all",{
            method:"get",
            headers:{
                token:token
            }
        }).then(res => res.json()).then(data=>{
            setData(data);
        });
    },
    getFavourites:(token,setData)=>{
        fetch(url+"/favorites",{
            method:"get",
            headers:{
                token:token
            }
        }).then(res => res.json()).then(data=>{
            setData(data);
        });
    },
    addFavourite:(token,name)=>{
        fetch(url+"/add-favorite",{
            method:"put",
            headers:{
                token:token
            },
            body:name
        });
    },
    create:(dto,token,setStatusMessage,updateList,setUpdateList,resetInput)=>{
        fetch(url+"/create",{
            method:"put",
            headers:{
                "token":token,
                "Content-Type":"application/json",
            },
            body:JSON.stringify(dto),
        }).then(res =>{
            if(res.status === 401){
                setStatusMessage("You are not logged in");
            }
            else if(res.status === 409){
                setStatusMessage("A product with that name already exists");
            }
            else if(res.status === 200 ){
                setStatusMessage("Product created");
                setUpdateList(!updateList);
                resetInput();
            }
            else{
                setStatusMessage("Something went wrong");
            }
        });
    }

}

export default productService;