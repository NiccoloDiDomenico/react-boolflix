import { useEffect, useState } from "react"
import GlobalContext from "./contexts/GlobalContext"
import AppLayout from "./layout/AppLayout"
import axios from "axios"

const apiUrlMovies = "https://api.themoviedb.org/3/search/movie"
const apiKey = "e99307154c6dfb0b4750f6603256716d"

function App() {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  function getMovies(query) {
    axios.get(`${apiUrlMovies}?api_key=${apiKey}&query=${query}`).then((resp) => {
      console.log(resp.data.results);
      setMovies(resp.data.results);
    })
  }

  const globalContextValue = { getMovies, movies, setMovies, apiKey, apiUrlMovies }

  return (
    <>
      <GlobalContext.Provider value={globalContextValue} >
        <AppLayout />
      </GlobalContext.Provider >
    </>
  )
}

export default App
