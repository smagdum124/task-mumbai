import React, { useState } from 'react';
import Modal from './Modal';
import '../assets/style/style.css';

const FirmAccess = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    // Handle save changes logic here
    console.log('Changes saved!');
    setShowModal(false);
  };

  return (
    <div className="form-container">
      <h2>Assigned Firm</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName1">First Name</label>
          <input type="text" id="firstName1" name="firstName1" value="Kashyap" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName1">Last Name</label>
          <input type="text" id="lastName1" name="lastName1" value="Trivedi" />
        </div>
        <div className="form-group">
          <label htmlFor="email1">Email ID</label>
          <input type="email" id="email1" name="email1" value="kptrivedi0019@DHive.in" />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo1">Mobile No.</label>
          <input type="tel" id="mobileNo1" name="mobileNo1" value="8555574995" />
        </div>
        <div className="form-group">
          <label htmlFor="firstName1">First Name</label>
          <input type="text" id="firstName1" name="firstName1" value="Kashyap" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName1">Last Name</label>
          <input type="text" id="lastName1" name="lastName1" value="Trivedi" />
        </div>
        <div className="form-group">
          <label htmlFor="email1">Email ID</label>
          <input type="email" id="email1" name="email1" value="kptrivedi0019@DHive.in" />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo1">Mobile No.</label>
          <input type="tel" id="mobileNo1" name="mobileNo1" value="8555574995" />
        </div>

        {/* More form groups */}

        <div className="button-group">
          <button type="button" onClick={handleOpenModal}>Save</button>
        </div>
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          onSave={handleSaveChanges}
        />
      </form>
    </div>
  );
};

export default FirmAccess;
