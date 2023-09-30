import React from 'react';

function Card({ user }) {
  return (
    <div className="card">
      <img src={user.avatar} alt="User Avatar" />
      <h2>{user.first_name} {user.last_name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Card;
