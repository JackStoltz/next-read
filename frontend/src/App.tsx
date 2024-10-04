import Navbar from './NavBar'
import Home from './Home'
import './styles/App.css'
import Library from './Library'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          
          <Route path="/Library" element={<Library />} />
       
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App