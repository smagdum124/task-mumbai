import React, { useState } from 'react';
import Modal from './Modal';
import '../assets/style/style.css';

const Form = () => {
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
      <h2>Client Admin Users</h2>
      <form>
        <div className="radio-group">
          <label htmlFor="clientAccess">Client Access</label>
          <input type="radio" id="clientAccessYes" name="clientAccess" value="yes" checked />
          <label htmlFor="clientAccessYes">Yes</label>
          <input type="radio" id="clientAccessNo" name="clientAccess" value="no" />
          <label htmlFor="clientAccessNo">No</label>
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

        <div className="form-group">
          <label htmlFor="firstName2">First Name</label>
          <input type="text" id="firstName2" name="firstName2" value="Kashyap" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName2">Last Name</label>
          <input type="text" id="lastName2" name="lastName2" value="Trivedi" />
        </div>
        <div className="form-group">
          <label htmlFor="email2">Email ID</label>
          <input type="email" id="email2" name="email2" value="kptrivedi0019@DHive.in" />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo2">Mobile No.</label>
          <input type="tel" id="mobileNo2" name="mobileNo2" value="8555574995" />
        </div>

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
}

export default Form;
