import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://reqres.in/api/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data.data);
      setShowCards(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }finally{
      setIsLoading(false)
    }
  };

  return (
    <div>
      <NavBar onGetStartedClick={handleGetStarted}/>
      <div className="content">
        {isLoading ? (
          <p>Loading...</p> // Display loading message while fetching data
        ) : showCards ? (
          <div className="card-container">
            {users.map((user) => (
              <Card key={user.id} user={user} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
