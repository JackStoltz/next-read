// src/BookMenu.tsx

import './styles/BookMenu.css';
import './styles/Book.css'; // Ensure that class names in Book.css don't conflict with BookMenu.css
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

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
            key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY, // Securely using the API key from environment variables
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
    <div className="background">
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
                <div key={book.id} className="book-library-item">
                  {volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail && (
                    <img src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} className='book-library-image' />
                  )}
                  <div className="book-library-info">
                    <h2 className="book-library-book-title">{volumeInfo.title}</h2>
                    <h3 className="book-library-author">{volumeInfo.authors?.join(', ')}</h3>
                    <p>{volumeInfo.description || 'No description available.'}</p>
                    <a href={volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
                      More Info
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No books found. Try a different search.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BookMenu;
