import { createContext,useState } from "react";

export const DataContext = createContext(null);


export default function Context({children}){
    const [isSigned, setIsSigned] = useState(false)
    const [isNft, setIsNft] = useState(false)
    const [loading, setLoading] = useState(false)
    const [popup, setPopup] = useState(false)
    return(
        <DataContext.Provider value={{isSigned,isNft,setIsSigned,setIsNft,loading,setLoading,popup,setPopup}}>
            {children}
        </DataContext.Provider>
    )
}