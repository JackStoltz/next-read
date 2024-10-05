import './styles/BookMenu.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
    infoLink: string;
  };
}

const BookMenu: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const location = useLocation();
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  let selected = "book-library-item";
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  
  
  
  const handleSelect = (id:string) => {
    setSelectedBook(prevSelectedBook => (prevSelectedBook === id ? null : id));

  }

  // Function to parse query parameters
  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return {
      title: params.get('title') || '',
      author: params.get('author') || '',
    };
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const { title, author } = getQueryParams();

      if (title.trim() === '' && author.trim() === '') {
        setError('Please provide a title or author to search.');
        setBooks([]);
        return;
      }

      // Build the query string with quotes for multi-word inputs
      // Build the query string with quotes for multi-word inputs
    let query = '';
    if (title.trim() !== '') query += `intitle:"${title.trim()}"`;
    if (author.trim() !== '') {
    if (query !== '') query += '+';
    query += `inauthor:"${author.trim()}"`;
}


      // Debugging: Log the constructed query
      console.log('Constructed Query:', query);

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
          params: {
            q: query,
            maxResults: 10,
            key: import.meta.env.VITE_REACT_APP_GOOGLE_BOOKS_API_KEY,
          },
        });

        // Debugging: Log the API response
        console.log('API Response:', response.data);

        if (response.data.totalItems === 0) {
          setBooks([]);
          console.warn('No books found for the given query.');
        } else {
          setBooks(response.data.items || []);
        }
      } catch (error) {
        console.error('Error fetching data from Google Books API:', error);
        setError('Failed to fetch books. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [location.search]);

  return (
    <div className="background-menu">
      <h1>Search Results</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="book-list">
          {books.length > 0 ? (
            books.map((book) => {
              const { volumeInfo } = book;
              return (
                <div key={book.id} className={selectedBook === book.id ? "book-library-item-selected" : "book-library-item"} onClick={() => handleSelect(book.id)}>
                  {volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail && (
                    <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} className={selectedBook ? "book-library-image-selected" : "book-library-image"} />
                  )}
                  <div className="book-library-info">
                    <h2 className="book-library-book-title">
                        {volumeInfo.title.length > 20 ? `${volumeInfo.title.substring(0, 20)}...` : volumeInfo.title}
                    </h2>
                    <h3 className="book-library-author">{volumeInfo.authors?.join(', ')}</h3>
                    
                      
                  </div>
                </div>
              );
            })
          ) : (
            <p>No books found. Try a different search.</p>
          )}
        </div>
      )}
      <Button variant="primary" onClick={() => navigate('/library')} className={selectedBook != null ? "view-button-select" : "view-button"}>{selectedBook != null ? "Add to library" : "Back to library"}</Button>
    </div>
  );
};

export default BookMenu;
