import { createContext, useContext, useEffect, useState } from "react";


const MyContext = createContext();

export const MyProvider = ({children}) =>{
    const [API_URL, setAPI_URL] = useState(process.env.REACT_APP_API_URL);
    useEffect(()=>{
        setAPI_URL(process.env.REACT_APP_API_URL);
    },[])
    return <MyContext.Provider value={{API_URL}}>
        {children}
    </MyContext.Provider>
}
export const UseProvider = ()=>{
    return useContext(MyContext);
};