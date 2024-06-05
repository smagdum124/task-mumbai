import React from 'react';
import BasicInfo from './BasicInfo';
import ClientAccess from './ClientAccess';
import FirmAccess from './FirmAccess';

const MainContent = ({ activeComponent }) => {
  const renderContent = () => {
    switch (activeComponent) {
      case 'basicInfo':
        return <BasicInfo />;
      case 'clientAccess':
        return <ClientAccess />;
      case 'firmAccess':
        return <FirmAccess />;
      default:
        return <BasicInfo />;
    }
  };

  return (
    <div className="main-content">
    
      {renderContent()}
    </div>
  );
};

export default MainContent;
