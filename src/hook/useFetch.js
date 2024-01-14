
import { useEffect } from "react"
import { useState } from "react"


const API_ENDPOINT = 'https://www.omdbapi.com/?apikey=9e725925'

export const useFetch = (params) => {
    //creamos los estados que vamos a necesitar
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    //creamos la función del fetch
    const fetchMovie = (url) => {
        setIsLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            if(responseJson.Response === 'True') {
                setData(responseJson.Search || responseJson)
                setError(false)
                console.log(responseJson.Search || responseJson);
            } else {
                setError(true)
            }
            setIsLoading(false)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchMovie(`${API_ENDPOINT}${params}`)
        console.log(`${API_ENDPOINT}${params}`);
    },[params])

    return {isLoading, error, data}
}