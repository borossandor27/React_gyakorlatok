import  { useEffect, useState } from 'react';
import { getUserById } from '../api';
import  './UserDetails.css';

function UserDetails({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserById(userId);
      setUser(data);
    };
    fetchUser();
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className={styles.user-details}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.name}</p>
      <p>Home: {user.home}</p>
    </div>
  );
}

export default UserDetails;
