import React, { useState } from 'react';

const Settings = ({ onLogout }) => {
  const [theme, setTheme] = useState('light');

  return (
    <div className="settings">
      <h2>Settings</h2>
      <label>
        Theme:
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Settings;