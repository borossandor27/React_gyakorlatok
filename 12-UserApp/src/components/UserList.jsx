import React, { useEffect, useState } from 'react';
import { getUsers } from '../api';

function UserList({ onSelectUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const selectedUserId = e.target.value;
    if (selectedUserId) {
      onSelectUser(selectedUserId);
    }
  };

  return (
    <div>
      <h2>Felhasználók</h2>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>
          Válassz felhasználót...
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserList;
