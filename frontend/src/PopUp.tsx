
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


function PopUp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState(''); 
  const navigate = useNavigate();

  const handleSearch = () => {
    if (title.trim() === '' && author.trim() === '') {
      alert('Please enter a title or author to search.');
      return;
    }
    // Navigate to BookMenu.tsx with title and author as query parameters
    navigate(`/bookmenu?title=${encodeURIComponent(title.trim())}&author=${encodeURIComponent(author.trim())}`);
    setShow(false);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add book to library
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add books you have enjoyed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="titleInput">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"    
                placeholder="The Great Gatsby"
                autoFocus
                id="title-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="authorInput"
            >
              <Form.Label>Author</Form.Label>
              <Form.Control 
                id="author-input"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter author name"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
