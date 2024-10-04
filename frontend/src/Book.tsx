import './styles/Book.css';
import gatsby from './images/gatsbyBook.jpg';
import orwell from './images/1984.jpg';
import mockingbird from './images/mockingbird.jpg';

interface Book {
    title: string;
    author: string;
}

function Book ({ title, author }: Book) {
    

    return (
        <>


                 <div className="book-library-item">
                    
                            <img src={gatsby} alt="Book 1 Cover" className="book-library-image" />
                            <div className="book-library-info">
                                <p className="book-library-book-title">{title}</p>
                                <p className="book-library-author">{author}</p>
                            </div>
                        </div>
            
                        
                        
            
                
                 
        </>
    )
}

export default Book;