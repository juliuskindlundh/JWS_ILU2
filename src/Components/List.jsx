import React from "react";
import ListItem from "./ListItem"
function List(props){

    const isDataLoaded = () =>{
        if(typeof(props.data) === "undefined"){
            return false;
        }
        return true;
    }
    return(
        <div className="List">
           {   
           isDataLoaded() ? 
           <div>{    
               props.data.map((row,index)=>{
                   return (
                        <ListItem key={index} data={row} showFavorites={props.showFavorites}/>
                    )
               })}
            </div>
            :
            <div>
                Loading...
            </div>
           }
        </div>
    );
}

export default List;