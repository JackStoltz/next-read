import './styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar () {
    return (
        <header className="header">
        <Link to='/' className="logo">NextRead</Link>
        <nav className="navbar">
                <Link to= '/'>Discover</Link> 
                <Link to='/Library'>My Library</Link> 
                <Link to='/'>About</Link>
                <Link to='/'>Account</Link>
            </nav>
        </header> 
    )
}

export default Navbar