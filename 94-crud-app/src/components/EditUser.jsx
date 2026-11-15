import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../api';
import UserForm from './UserForm';
import { useUser } from './useUser';

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, error } = useUser(id);

    const handleSubmit = (formData) => {
        updateUser(id, formData)
            .then(() => navigate('/'))
            .catch((err) => alert('Failed to update user: ' + err.message));
    };

    if (error) return <p>Failed to fetch user: {error}</p>;
    // Az űrlap csak akkor jelenik meg, amikor az adatok megérkeztek,
    // mert a kezdőértékeit csak egyszer, a létrejöttekor veszi át.
    if (!user) return <p>Loading...</p>;

    return (
        <UserForm
            title="Edit User"
            submitLabel="Save"
            initialData={{ name: user.name, email: user.email, home: user.home }}
            onSubmit={handleSubmit}
        />
    );
}
export default EditUser;
