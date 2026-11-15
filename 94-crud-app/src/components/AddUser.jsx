import { useNavigate } from 'react-router-dom';
import { addUser } from '../api';
import UserForm from './UserForm';

const AddUser = () => {
    const navigate = useNavigate();

    const handleSubmit = (formData) => {
        addUser(formData)
            .then(() => navigate('/')) // siker esetén vissza a listához
            .catch((error) => alert('Failed to add user: ' + error.message));
    };

    return (
        <UserForm
            title="Add User"
            submitLabel="Add User"
            initialData={{ name: '', email: '', home: '' }}
            onSubmit={handleSubmit}
        />
    );
};

export default AddUser;
