import React from 'react';

const ActivityHistory = ({ activities }) => {
  return (
    <div className="activity-history">
      <h2>Activity History</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityHistory;
