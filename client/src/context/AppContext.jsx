import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";
export const AppContext= createContext();
export const AppContextProvider = (props) =>{
    const [searchFilter, setsearchFilter]=useState({
        title:" ",
        location:" "
    });
    const [isSearched,setisSearched]=useState(false);
    const [Jobs,setJobs]=useState([])
    const [showRecruiterLogin,setShowRecruiterLogin]=useState(false)
    {/*Fetch Job Data*/}
    const FetchJobs=async () => {
        setJobs(jobsData)
    }
    useEffect(()=>{
        FetchJobs()
    },[])
    const value={
        searchFilter,setsearchFilter,isSearched,setisSearched,Jobs,setJobs,
        showRecruiterLogin,setShowRecruiterLogin
    }

    return(<AppContext.Provider value={value}>
        {props.children}
        </AppContext.Provider>)
}
