import React from 'react';
import girl from "../assets/images/laptop.png"
import '../assets/style/style.css';

const Modal = ({ show, onClose, onSave }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <h2 style={{textAlign:"center",fontSize:"1.2vw"}}>Unsaved  Changes</h2>
        </div>
        <div className="modal-body">
          <img className='girl' src={girl} alt="Placeholder" />
          <h2 style={{textAlign:"center",fontSize:"1.2vw"}}>There are Unsaved Changes</h2>
          <p>Are you sure want to cancel?</p>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="button-cancel">
            Cancel
          </button>
          <button onClick={onSave} className="button-save">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
