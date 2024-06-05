import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HorizontalNavbar from './pages/HorizontalNavbar';
import VerticalNavbar from './pages/VerticalNavbar';
import ButtonGroup from './pages/ButtonGroup';
import MainContent from './components/MainContent';
import Copyright from './pages/Copyright';
import '../src/assets/style/style.css'

function App() {
  const [activeComponent, setActiveComponent] = useState('basicInfo');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <Router>
      <div className="app">
        <VerticalNavbar />
        <div className="content-container">
          <HorizontalNavbar />
          <div className="main-section">
            <h4>Group Settings  &gt; Account/Group Details</h4>
            <ButtonGroup onButtonClick={handleButtonClick} />
            <MainContent activeComponent={activeComponent} />
          </div>
          <div className="footer">
            <Copyright />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
