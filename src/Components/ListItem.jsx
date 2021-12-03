import React from "react";
import useToken from "../Services/tokenHandler";
import productService from "../Services/ProductServices";
function ListItem(props){
    const {token} = useToken();
    
    const handeOnClick = () =>{
        productService.addFavourite(token,props.data.name);
    }

    return(
        <div className="ListItem">
            <h5>{props.data.name}</h5>
            <h5>Price:{props.data.price}</h5>
            <p>{props.data.description}</p>
           {
               props.showFavorites?
               <div></div>
               :
               <div>
                    <button onClick={handeOnClick}>Add to favorites</button>
               </div>
           }
        </div>
    );
}

export default ListItem;