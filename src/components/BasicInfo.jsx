// src/components/Form.js
import React, { useState } from 'react';
import Modal from './Modal';
import '../assets/style/style.css';

const BasicInfo = () => {
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
      <h2>Basic Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="clientGroupName">Client Group Name</label>
          <input
            type="text"
            id="clientGroupName"
            name="clientGroupName"
            value="Apollo Hospital Group"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            value="kptrivedi0019@DHive.in"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo">Mobile No.</label>
          <input type="tel" id="mobileNo" name="mobileNo" value="8555574995" />
        </div>
        <div className="form-group">
          <label htmlFor="addressType">Address Type</label>
          <select id="addressType" name="addressType">
            <option value="registered">Registered Office</option>
            <option value="branch">Branch Office</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="premises">Premises</label>
          <select id="premises" name="premises">
            <option value="owned">Owned</option>
            <option value="rented">Rented</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="addressLine1">Address line 1</label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            value="Raheja Titanium, Floor 6, Western Express Highway"
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine2">Address line 2</label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            value="Geetanjali Railway Colony, Ram Namgar, Goregaon"
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <select id="state" name="state">
            <option value="maharashtra">Maharashtra</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select id="city" name="city">
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input type="text" id="pincode" name="pincode" value="400099" />
        </div>
      </form>
      <div className="row">
        <button type="button" onClick={handleOpenModal}>
          Submit
        </button>
      </div>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        onSave={handleSaveChanges}
      />
    </div>
  );
};

export default BasicInfo;
