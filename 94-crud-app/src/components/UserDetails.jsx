import { Link, useParams } from 'react-router-dom';
import { useUser } from './useUser';

const UserDetails = () => {
    // Az útvonal (/user/:id) paraméterét a useParams hook adja vissza
    const { id } = useParams();
    const { user, error } = useUser(id);

    if (error) return <p>Failed to fetch user: {error}</p>;
    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h1>User Details</h1>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Home: {user.home}</p>
            <Link to="/">Back to list</Link>
        </div>
    );
}
export default UserDetails;
