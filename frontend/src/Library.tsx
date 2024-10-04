import './styles/library.css'
import Navbar from './NavBar'
import BookContainer from './BookContainer';


function Library() { 
    return (<>
    <Navbar />
        <div className = "library">
            <h1 className="header-title">
                    My Library
            </h1>
            
            <div className="side-panel">
                    <h2>Sort Books</h2> 
                    <div className="genre-options">
                        <h3>Sort By</h3>
                        <select id="genre-select">
                            <option value="most-recent">Most Recent</option>
                            <option value="alphabetical">Alphabetical</option>
                            <option value="length">Length</option>
                            <option value="price">Price</option>
                        </select>
                    </div>
            </div>
            <BookContainer />
          
        </div>
    </>
    );
}

export default Library;