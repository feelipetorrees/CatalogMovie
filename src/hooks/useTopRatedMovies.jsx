// import { useState,useEffect } from "react"
//  const moviesURL = import.meta.env.VITE_API;
//  const apiKey = import.meta.env.VITE_API_KEY; 

// const useTopRatedMovies = () => {
//   const [topMovies, setTopMovies] = useState([]);
  
//   const getTopRatedMovies =  async (url) => {
//     const res = await fetch(url)
//     const data = await res.json();
//     setTopMovies(data.results)
   
//   } 

//   useEffect(() => {
//      const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
//      getTopRatedMovies(topRatedUrl);
//      console.log(topMovies);
     
//   },[])
//   return topMovies
 
// }
// export default useTopRatedMovies