import React from 'react';
import './ActionButtons.css'; 

const ActionButtons = ({ onSave, onNext }) => {
  return (
    <div className="action-buttons">
      <button className="btn-no" onClick={onNext}>Nah</button>
      <button className="btn-yes" onClick={onSave}>Yes</button>
    </div>
  );
};

export default ActionButtons;
