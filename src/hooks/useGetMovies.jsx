
import { useState, useEffect } from "react"



const UseGetMovie = (url) =>{
    const [movies, setMovies] = useState([]);
 
    useEffect(() => {
        
        const getMovie =  async () => {
            const res = await  fetch(url)
            const data = await res.json()
            setMovies(data.results === undefined ? data: data.results)  
            console.log(data.results)
        }
        getMovie()
    }, [])

    return movies
 }

export default UseGetMovie






  

 
