import React, { useState } from 'react';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import ActivityHistory from './components/ActivityHistory';
import Settings from './components/Settings';
import './App.css';

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
  };

  return (
    <div className="app">
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
      <Settings onLogout={handleLogout} />
    </div>
  );
};

export default App;
