import React, { useContext,useState } from "react";

const UpdateListContext = React.createContext();
export function useUpdateListContext(){
    return useContext(UpdateListContext)
}

export function ContextProvider({children}){
    const [updateList,setUpdateList] = useState(true);
    return(
            <UpdateListContext.Provider value={{updateList,setUpdateList}}>
                {children}
            </UpdateListContext.Provider>
    );
}