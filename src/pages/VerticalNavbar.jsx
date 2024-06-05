import React from "react";
import {
  FaChartBar,
  FaCalendarAlt,
  FaClipboardList,
  FaPlus,
} from "react-icons/fa"; // Importing icons from react-icons
// import "./style.css"; 

const VerticalNavbar = () => {
  return (
    <nav className="vertical-navbar">
      <ul className="nav-items">
      
        <li>
          <FaChartBar /> <br /> Dashboard
        </li>
     
        <li>
          <FaCalendarAlt /> <br /> Calendar
        </li>
      
        <li>
          <FaClipboardList /> <br /> Report
        </li>

        <li>
          <FaPlus /> <br /> Create
        </li>
     
      </ul>
    </nav>
  );
};

export default VerticalNavbar;
