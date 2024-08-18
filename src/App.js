import React, { useState } from 'react';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import ActivityHistory from './components/ActivityHistory';
import Settings from './components/Settings';
import './styles.css';
import Profilephoto from './Profile.png';

const App = () => {
  const [user, setUser] = useState({
    name: 'Chinmay Ghatule',
    email: 'chinmay@example.com',
    profilePicture: Profilephoto,
  });

  const [activities, setActivities] = useState([
    'Logged in',
    'Viewed dashboard',
    'Updated profile',
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = (updatedUser) => {
    setUser(updatedUser);
    setIsEditing(false);
    setActivities([...activities, 'Updated profile']);
  };
  const handleCancelClick = () => setIsEditing(false);
  const handleLogout = () => {
    alert('Logged out');
    // Implement logout logic here
  };

  return (
    <div className="app">
      <div className="dashboard-header">
        <h1>User Dashboard</h1>
        <button className="settings-button" onClick={() => setIsSettingsVisible(!isSettingsVisible)}>
          {isSettingsVisible ? 'Close Settings' : 'Open Settings'}
        </button>
      </div>
      {!isSettingsVisible && (
        <>
          {isEditing ? (
            <EditProfile
              user={user}
              onSaveClick={handleSaveClick}
              onCancelClick={handleCancelClick}
            />
          ) : (
            <Profile user={user} onEditClick={handleEditClick} />
          )}
          <ActivityHistory activities={activities} />
        </>
      )}
      {isSettingsVisible && <Settings onLogout={handleLogout} />}
    </div>
  );
};

export default App;
