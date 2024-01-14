import { useContext, useState } from "react"
import { useFetch } from "../hook/useFetch"
import { DataContext } from "../context/DataUser"


export const FormSearch = () => {
    const [title, setTitle] = useState('')
    //usamos el context
    const { isLoading, setQuery, error} = useContext(DataContext)
    
    

    // const {isLoading, error, data} = useFetch(`&s=superman`)

    const handleSubmit = e => {
        e.preventDefault();
        setQuery(title)

    }

  return (
    <form className="py-10 w-11/12 md:w-2/4 m-auto " onSubmit={handleSubmit}>
      <div className="w-full flex flex-wrap">
        <input
            className="w-3/4 py-3 p-4 rounded-l-full" 
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="Buscar tu película" 
        />
        <input 
          className="w-1/4 text-xs md:text-lg bg-blue-800 rounded-r-full uppercase font-bold text-white hover:cursor-pointer hover:bg-blue-900 transition-colors"
          type="submit" 
          value='Buscar'
          />
          
      </div>
        {error && <p className="py-4 text-center text-white">{`No hay resultado para esta película '${title}'`}</p>}
    </form>
    
  )
}
