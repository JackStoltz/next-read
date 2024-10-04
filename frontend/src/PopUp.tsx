import React, { useState, useEffect} from "react";
import "./styles/PopUp.css";

function PopUp() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  useEffect(() => {
    console.log("Modal state changed:", modal);
  }, [modal]);

  return (
    <>
        <button 
        onClick={toggleModal}
        className="btn-modal">
            +
        </button>


        {modal && (<div className="modal">
            <div className="overlay"
            onClick={toggleModal}>
                
            </div>
            <div className="modal-content">
                <h2>
                    Hello
                </h2>
                <p>
                    Hello world
                </p>
                <button className='close' onClick={toggleModal}>
                    Close
                </button>
            </div>
        </div>)}
    </>
  )
}

export default PopUp;