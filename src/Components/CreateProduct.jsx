import React,{useState} from "react";
import { useUpdateListContext} from "../Context";
import productService from "../Services/ProductServices";
import useToken from "../Services/tokenHandler";

function CreateProduct(){

    const {token} = useToken();
    const {updateList,setUpdateList} = useUpdateListContext();
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState(0);
    const [statusMessage,setStatusMessage] = useState("");
   
    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) =>{
        setDescription(e.target.value);
    }

    const handlePriceChange = (e) =>{
        if(e.target.value === ""){
            setPrice(0);
            return;
        }
        setPrice(e.target.value);;
    }

    const handleCreate = () =>{
        if(token === ""){
            return;
        }
        else if(name === ""){
            return;
        }
        productService.create({
            "name":name,
            "description":description,
            "price":price
        },token,setStatusMessage,updateList,setUpdateList,clearInput);
    }

    const blockUndefined = (field) =>{
        if(typeof(field) === "undefined"){
            return "";
        }
        return field;
    }

    const clearInput = () =>{
        setName("");
        setDescription("");
        setPrice(0);
    }
 
    return(
        <div className="CreateProduct">
            Name
            <input type="text" onChange={handleNameChange} value={blockUndefined(name)}></input><br></br>
            Description
            <input type="text" onChange={handleDescriptionChange} value={blockUndefined(description)}></input><br></br>
            Price
            <input type="number" onChange={handlePriceChange} value={blockUndefined(price)}></input><br></br>
            <button onClick={handleCreate}>Create</button><br></br>
            {statusMessage}
        </div>
    );
}

export default CreateProduct;