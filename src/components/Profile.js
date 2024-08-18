import React from 'react';

const Profile = ({ user, onEditClick }) => {
  return (
    <div className="profile">
      <img src={user.profilePicture} alt="Profile" className="profile-picture" />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={onEditClick}>Edit Profile</button>
    </div>
  );
};

export default Profile;
