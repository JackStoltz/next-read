import Book from './Book';
import './styles/BookContainer.css';
import PopUp from './PopUp';

function BookContainer() {
    return (
        <div className="grid">
             <div className="addbtnsec">
                    <PopUp />
                 </div>
            <Book />
            
        </div>
    )
}

export default BookContainer;