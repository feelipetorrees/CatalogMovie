import { Outlet } from 'react-router-dom'
import NavBar from './componentes/Navbar'
import './index.css'
function App() {


  return (    
       <div>
          <NavBar/>
      
        {/* <Outlet /> must be added to the component of the parent route to show the contents of the sub routes. 
            Usamos o outlet para definir onde as rotas filha, serão exibidas na rota pai */}
          <Outlet/>
       </div>
    
  )
}

export default App
