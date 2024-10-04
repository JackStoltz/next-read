import './styles/BookRec.css';

interface BookRecProps {
    title: string;

}

function BookRec({ title } : BookRecProps) {
    return (
        <>
        <div>
        <img src={ title } className="BookRecs"/>
        </div>
        </>
    )

}

export default BookRec;