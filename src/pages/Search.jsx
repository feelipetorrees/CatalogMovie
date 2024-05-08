import { useSearchParams } from "react-router-dom"
import "./MoviesGrid.css"
import { MovieCard } from "../componentes/MovieCard"
import UseGetMovie from "../hooks/useGetMovies"
const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  const [searchParams] = useSearchParams()
  const queryParams = searchParams.get("q")

  const searchedMovies = `${searchURL}?${apiKey}&query=${queryParams}`
  const movies = UseGetMovie(searchedMovies)


  
  return (
    <div className="container">
       <h2 className="title">
          Resultados para: <span className="query-text">{queryParams}</span>
       </h2>
       <div className='movies-container'>
            {movies.length === 0 && <p>Carregando</p>}
            {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
       </div>
    </div>
  )
}
export default Search