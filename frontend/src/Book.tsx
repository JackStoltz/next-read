import './styles/Book.css';
import gatsby from './images/gatsbyBook.jpg';
import orwell from './images/1984.jpg';
import mockingbird from './images/mockingbird.jpg';

function Book () {
    return (
        <>


                 <div className="book-library-item">
                    
                            <img src={gatsby} alt="Book 1 Cover" className="book-library-image" />
                            <div className="book-library-info">
                                <p className="book-library-book-title">The Great Gatsby</p>
                                <p className="book-library-author">F. Scott Fitzgerald</p>
                            </div>
                        </div>
            
                        <div className="book-library-item">
                            <img src={orwell} alt="Book 2 Cover" className="book-library-image" />
                            <div className="book-library-info">
                                <p className="book-library-book-title">1984</p>
                                <p className="book-library-author">George Orwell</p>
                            </div>
                        </div>
            
                        <div className="book-library-item">
                            <img src={mockingbird} alt="Book 3 Cover" className="book-library-image" />
                            <div className="book-library-info">
                                <p className="book-library-book-title">To Kill a Mockingbird</p>
                                <p className="book-library-author">Harper Lee</p>
                            </div>
                 </div>
                 
        </>
    )
}

export default Book;