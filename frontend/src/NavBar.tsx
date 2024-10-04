import './styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar () {
    return (
        <header className="header">
        <a href='#' className="logo">NextRead</a>
        <nav className="navbar">
                <Link to= '/'>Discover</Link> 
                <Link to='/Library'>My Library</Link> 
                <a href='#'>About</a>
                <a href='#'>Account</a>
            </nav>
        </header> 
    )
}

export default Navbar