import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteUser } from '../api';
import { useUser } from './useUser';

// Megerősítést kér, és csak utána törli a felhasználót.
// (A komponens törzsében nem indíthatunk hálózati kérést és nem nyithatunk
// párbeszédablakot: a renderelésnek mellékhatás nélkülinek kell lennie.)
const DeleteUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, error } = useUser(id);

    const handleDelete = () => {
        deleteUser(id)
            .then(() => navigate('/'))
            .catch((err) => alert('Failed to delete user: ' + err.message));
    };

    if (error) return <p>Failed to fetch user: {error}</p>;
    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h1>Delete User</h1>
            <p>Do you really want to delete user: {user.name}?</p>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>{' '}
            <Link className="btn btn-secondary" to="/">Cancel</Link>
        </div>
    );
};
export default DeleteUser;
