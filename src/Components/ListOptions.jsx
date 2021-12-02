import React from "react";
import { useUpdateListContext } from "../Context";
function ListOptions(props){

    const {updateList,setUpdateList} = useUpdateListContext();
    const handleAllProductsClick = ()=>{
        props.setShowFavorites(false);
        setUpdateList(!updateList);
    }

    const handleFavoritesOnClick = ()=>{
        props.setShowFavorites(true);
        setUpdateList(!updateList);
    }

    return(
        <div className="ListOptions">
            <button onClick={handleAllProductsClick}>All products</button>
            <button onClick={handleFavoritesOnClick}>Favorites</button>
        </div>
    );
}

export default ListOptions;