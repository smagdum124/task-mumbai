import React from 'react';

const ButtonGroup = ({ onButtonClick }) => {
  return (
    <div className="button-group">
      <button onClick={() => onButtonClick('basicInfo')}>Basic Info</button>
      <button onClick={() => onButtonClick('clientAccess')}>Client Access</button>
      <button onClick={() => onButtonClick('firmAccess')}>Firm Access</button>
    </div>
  );
};

export default ButtonGroup;
