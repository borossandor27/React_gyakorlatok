import React, { useState } from 'react';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import UserForm from './components/UserForm';

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSelectUser = (id) => {
    setSelectedUserId(id);
    setIsEditing(false);
  };

  const handleAddUser = () => {
    setSelectedUserId(null);
    setIsEditing(true);
  };

  return (
    <div>
      <UserList onSelectUser={handleSelectUser} />
      {isEditing ? (
        <UserForm onSave={() => setIsEditing(false)} />
      ) : selectedUserId ? (
        <UserDetails userId={selectedUserId} />
      ) : (
        <button onClick={handleAddUser}>Add New User</button>
      )}
    </div>
  );
}

export default App;
