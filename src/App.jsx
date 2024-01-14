

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FormSearch } from "./components/FormSearch"
import { Movies } from "./components/Movies"
import { MainPage } from "./components/MainPage"
import { SingleMovie } from "./components/SingleMovie"


function App() {


  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/movies/:id" element={<SingleMovie/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
