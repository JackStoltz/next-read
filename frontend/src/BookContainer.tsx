import Book from './Book';
import './styles/BookContainer.css';
import PopUp from './PopUp';
import React from 'react';

function BookContainer() {
    
    return (
        <div className="grid">
             <div className="addbtnsec">
                    <PopUp />
                 </div>
            <Book title="The Great Gatsby" author="Fitzgerald"/>
            <Book title="1984" author="Orwell"/>
            <Book title="To Kill a Mockingbird" author="Lee"/>
        </div>
    )
}

export default BookContainer;