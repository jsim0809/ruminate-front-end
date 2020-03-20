import React from 'react';
import ReactDOM from 'react-dom';

// Refactored to create modals in simpler way.

const LoginModal = ({ restaurantID, handleLoginCancelClick }) => (
  // Gray background
  <div className="modal-background">
    <div className="modal-login">
      {/* Cancel button */}
      <div className="modal-x-button" onClick={handleLoginCancelClick}>&#x1F5D9;</div>
      {/* Fake login picture */}
      <img src="./images/login.png" />
    </div>
  </div>
);

export default LoginModal;
