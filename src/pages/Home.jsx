
import { MovieCard } from '../componentes/MovieCard';
import "./MoviesGrid.css"
import UseGetMovie from '../hooks/useGetMovies';
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY; 
const Home = () => {
  const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    const topMovies = UseGetMovie(topRatedUrl)
    
  return (
    <div className='container'>
        <h2 className='title'>Melhores Filmes:</h2>
        <div className='movies-container'>
         
                {topMovies.length === 0 && <p>Carregando</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
         </div>
    
    </div>
  )
}
export default Home