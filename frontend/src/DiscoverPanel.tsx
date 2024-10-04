import './styles/DiscoverPanel.css';
import BookRec from './BookRec';
import gatsby from './images/gatsbyBook.jpg';
import mockingbird from './images/mockingbird.jpg';
import nineteen from './images/1984.jpg';
import MovingImage from './MovingImage';

function DiscoverPanel() {
    const classics = [gatsby,mockingbird,nineteen];
    
    
    return (
        <>
        <div className="Discover">
                <header className="Discover-header">
                    <h1>Find Your Next Reading Experience</h1>
                    <p>Explore a curated selection based on your past reads</p>
                    </header>

                    <div className="bookRec">
                        <MovingImage/>
                     </div>

                    <form className="search-form">
                        <div className="search-container">
                            <input type="text" placeholder="Search for books..." className="search-input" />
                            <button type="submit" className="search-button">Search</button>
                        </div>
                    </form>
                        
                    <div className="keyword-inputs">
                        <input type="text" placeholder="Authors (optional)" className="keyword-input" />
                        <input type="text" placeholder="Genres (optional)" className="keyword-input" />
                    </div>

            </div>
        </>
    )
}

export default DiscoverPanel; 