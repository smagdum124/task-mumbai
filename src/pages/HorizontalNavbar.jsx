import React from 'react';
import { FaSearch, FaCog, FaBell } from 'react-icons/fa'; // Importing icons from react-icons

const HorizontalNavbar = () => {
  return (
    <nav className="horizontal-navbar">
      <div className="logo">D'LittMan</div>
      <div className="user-profile">
        <FaSearch className='icon' /> 
        <FaCog className='icon' /> 
        <FaBell className='icon' /> 
        <span className="user-initial">A</span>
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
