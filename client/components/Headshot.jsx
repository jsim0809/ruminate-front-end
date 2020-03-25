import React from 'react';

/**
 * Component containing a user's avatar and username, on the left side of their question.
 * Parent: QWithAs
 * Children: none
 */
const Headshot = ({ username, avatarUrl }) => (
  <div className="user-clickable">
    <img className="avatar" src={avatarUrl} alt="User avatar" />
    <div className="username">{username}</div>
  </div>
);

export default Headshot;
