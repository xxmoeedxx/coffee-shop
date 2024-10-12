import React from 'react';
import '../assets/css/UserProfile.css';

const UserProfile = () => {
  return (
    <div className="card" style={{ width: '18rem', margin: '20px auto', padding: '15px' }}>
      <img src="/img/avatars/avatar.jpg" className="card-img-top rounded-circle" alt="User Avatar" style={{ width: '50%', margin: '0 auto' }} />
      <div className="card-body text-center">
        <h5 className="card-title">Charles Hall</h5>
        <p className="card-text text-muted">charles.hall@example.com</p>
        <a href="#" className="btn btn-primary">Edit Profile</a>
        <a href="#" className="btn btn-danger" style={{ marginLeft: '10px' }}>Log Out</a>
      </div>
    </div>
  );
};

export default UserProfile;
