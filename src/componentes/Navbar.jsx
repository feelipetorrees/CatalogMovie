import { Link } from "react-router-dom"
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import "./Navbar.css"
import { useNavigate } from "react-router-dom"

import { useState } from "react"
const NavBar = () => {
  const [search, setSearch] = useState(null)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
      e.preventDefault()
      if(!search) return 
      navigate(`/search?q=${search}`)

      console.log(search)
  }
  return (
    <div>
      <nav id="navbar">
          <h2>
            <Link to='/'>
              <BiCameraMovie/>
                 ApiMovies
              </Link>
          </h2>
           <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)}/>
              <button type="submit">
                <BiSearchAlt2/>
              </button>
           </form>
          
        </nav>
    </div>
  )
}
export default NavBar