import { createContext, useState } from "react";
import { useFetch } from "../hook/useFetch";

//creamos el contexto
export const DataContext = createContext();

//creamos la función del proveedor
export const DataProvider = ({children}) => {
    //creamos los estados que quevamos a usar 
    const [query, setQuery] = useState('disney')
    //usamos el hook para parametrizar el query
    const { isLoading, error, data } = useFetch(`&s=${query}`)

    //retornamos el provider
    const value = {
        isLoading,
        error,
        data,
        setQuery
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}