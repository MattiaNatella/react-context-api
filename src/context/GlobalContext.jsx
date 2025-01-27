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
            .then(res => {
                console.log(postsList)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }