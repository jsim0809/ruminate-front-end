import React from 'react';

/**
 * Modal that pops up when any button requiring login is clicked.
 * Parent: QA
 * Children: none
 */
const LoginModal = ({ handleLoginCancelClick }) => (
  // Gray background
  <div className="modal-background">
    <div className="modal-login">
      {/* Cancel button */}
      <div className="modal-x-button" onClick={handleLoginCancelClick} onKeyDown={handleLoginCancelClick} role="button">&#x1F5D9;</div>
      {/* Fake login picture */}
      <img src="./images/login.png" alt="Log in to GuiltTripAdvisor." />
    </div>
  </div>
);

export default LoginModal;
