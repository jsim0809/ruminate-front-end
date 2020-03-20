import React from 'react';

const Headshot = ({ username, avatarUrl }) => (
  <div className="user-clickable">
    <img className="avatar" src={avatarUrl} />
    <div className="username">{username}</div>
  </div>
);

export default Headshot;
