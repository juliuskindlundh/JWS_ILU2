import React,{useState,useEffect} from "react";
import ListOptions from "./ListOptions";
import List from "./List";
import productService from "./Services/ProductServices";
import {useUpdateListContext } from "../Context";
import useToken from "./Services/tokenHandler";

function ProductList(){

    const {token} = useToken();
    const {updateList} = useUpdateListContext();
    const [data,setData] = useState([]);
    const [showFavorites,setShowFavorites] = useState(false);

    useEffect(()=>{
        if(token === ""){
            setData([]);
        }
        else{
            if(showFavorites){
                productService.getFavourites(token,setData)
            }
            else{
                productService.getAll(token,setData);
            }
        }
    },[token,updateList])

    const showList=()=>{
        if(token === ""){
            return false;
        }
        return true;
    }
    return(
        <div className="ProductList">
            {showList()?
                <div>
                    <ListOptions showFavorites={showFavorites} setShowFavorites={setShowFavorites}/>
                    <List data={data} showFavorites={showFavorites}/>
                </div>
                :
                <div>
                    Login and/or create an account to se products
                </div>
            }
        </div>
    );
}

export default ProductList