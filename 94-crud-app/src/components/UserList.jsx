import { getUsers } from '../api.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then((response) => setUsers(response.data))
            .catch((error) => console.error('Failed to fetch users:', error));
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <Link to="/add-user">Add User</Link>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Home</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.home}</td>
                            <td>
                                <Link className="btn btn-outline-secondary" to={`/user/${user.id}`}><FontAwesomeIcon icon={faEye} /> </Link>
                            </td>
                            <td>
                                <Link  className="btn btn-outline-success" to={`/edit-user/${user.id}`}><FontAwesomeIcon icon={faPenToSquare} /> </Link>
                            </td>
                            <td>
                                <Link className="btn btn-outline-danger" to={`/delete-user/${user.id}`}><FontAwesomeIcon icon={faTrash} /> </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;