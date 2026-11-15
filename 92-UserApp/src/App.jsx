import { useState } from 'react';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import UserForm from './components/UserForm';

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  // Mentés után növeljük: a megváltozott key miatt a UserList újra betölti a listát
  const [listVersion, setListVersion] = useState(0);

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
      <UserList key={listVersion} onSelectUser={handleSelectUser} />
      {isEditing ? (
        <UserForm
          onSave={() => {
            setIsEditing(false);
            setListVersion((v) => v + 1);
          }}
        />
      ) : selectedUserId ? (
        <UserDetails userId={selectedUserId} />
      ) : (
        <button onClick={handleAddUser}>Add New User</button>
      )}
    </div>
  );
}

export default App;
