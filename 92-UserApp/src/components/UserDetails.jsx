import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getUserById } from '../api';
import './UserDetails.css';

function UserDetails({ userId }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ha közben másik felhasználót választanak, a régi választ eldobjuk
    let ignore = false;

    const fetchUser = async () => {
      try {
        const data = await getUserById(userId);
        if (!ignore) {
          setUser(data);
          setError(null);
        }
      } catch (err) {
        if (!ignore) setError(err.message);
      }
    };
    fetchUser();

    return () => {
      ignore = true;
    };
  }, [userId]);

  if (error) return <p>Hiba: {error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div id="user-details">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Home: {user.home}</p>
    </div>
  );
}

UserDetails.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default UserDetails;
