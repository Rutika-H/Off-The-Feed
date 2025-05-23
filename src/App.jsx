
import './css/App.css'
import Movies from "./pages/Movies"
import {Routes,Route} from "react-router-dom"
import Favorites from "./pages/Favorites"
import Others from "./pages/Others"
import NavBar from "./components/NavBar"
import Home from "./components/Home"

function App() {
 

  return( 
  <div>
 <NavBar />
  <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Movies" element={<Movies/>}/>
      <Route path="/Favorites" element={<Favorites />}/>
     <Route path="/Others" element={<Others/>}/>
    </Routes>
    
  </main>
   </div>
  )
}
export default App