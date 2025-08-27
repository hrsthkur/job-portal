import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext()
export const AppContextProvider = (props) => {

    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: ''
    })

    const [isSearched, setIsSearched] = useState(false)
    const [jobs,setJobs] = useState([])

    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)
    //function to fetch job data
    const fetchJobs = async () => {
        setJobs(jobsData)

    }

    useEffect(()=>{
        fetchJobs()
    },[])


    const value = {
        jobs,setJobs,
        searchFilter,setSearchFilter,
        isSearched,setIsSearched,
        showRecruiterLogin,setShowRecruiterLogin
    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>

    )
}