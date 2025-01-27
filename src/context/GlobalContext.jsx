import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    //qui inseriremo tutta la logica e i dati da esportare globalmente

    const baseApiUrl = import.meta.env.VITE_BASE_API_URL

    const [postsList, setPostsLists] = useState([])

    const fetchData = () => {
        axios.get(`${baseApiUrl}/posts`)
            .then(res => {

                setPostsLists(res.data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <GlobalContext.Provider value={{ postsList }}>
            {children}
        </GlobalContext.Provider>
    )
}

//useGloblContext conterrà lui stesso tutti gli elementi definiti nella prop value di GlobalContext.Provider

const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalProvider }