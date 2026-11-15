import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getUsers } from '../api';

function UserList({ onSelectUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error('Nem sikerült betölteni a felhasználókat:', err);
      }
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

UserList.propTypes = {
  onSelectUser: PropTypes.func.isRequired,
};

export default UserList;
