import React from 'react';
import UserCard from './UserCard';

const App = () => {
  const users = [
    { name: 'Anna', age: 28, hobbies: ['reading', 'coding', 'hiking'] },
    { name: 'John', age: 35, hobbies: ['gaming', 'fishing'] },
    { name: 'Laura', age: 24, hobbies: ['painting', 'dancing'] },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>User List</h1>
      {users.map((user, index) => (
        <UserCard 
          key={index} 
          name={user.name} 
          age={user.age} 
          hobbies={user.hobbies} 
        />
      ))}
    </div>
  );
};

export default App;
