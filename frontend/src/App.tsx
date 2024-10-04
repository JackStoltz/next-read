import Home from './Home'
import './styles/App.css'
import Library from './Library'
import BookMenu from './BookMenu'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          
          <Route path="/Library" element={<Library />} />
          <Route path="/BookMenu" element={<BookMenu />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;