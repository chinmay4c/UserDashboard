import React from 'react';

const Settings = ({ onLogout }) => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <button className="logout-button" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Settings;
