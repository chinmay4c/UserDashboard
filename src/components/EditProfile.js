import React, { useState } from 'react';

const EditProfile = ({ user, onSaveClick, onCancelClick }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    onSaveClick({ ...user, name, email });
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancelClick}>Cancel</button>
    </div>
  );
};

export default EditProfile;
