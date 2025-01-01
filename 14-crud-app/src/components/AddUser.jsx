import 'bootstrap/dist/css/bootstrap.min.css';
import './AddUser.css';
import { useState } from 'react';
import { addUser } from '../api';

const AddUser = () => {
    const [formData, setFormData] = useState({ name: '', email: '', home: '' });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format.';
        }
        if (!formData.home) newErrors.home = 'Home address is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            addUser(formData)
                .then(() => alert('User added successfully!'))
                .catch((error) => alert('Failed to add user: ' + error.message));
        }
    };

    return (
        <div className="container shadow-sm mt-5 p-3 bg-body rounded">
            <h3>Add User</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="home">Home:</label>
                    <input
                        type="text"
                        id="home"
                        className={`form-control ${errors.home ? 'is-invalid' : ''}`}
                        value={formData.home}
                        onChange={(e) => setFormData({ ...formData, home: e.target.value })}
                    />
                    {errors.home && <div className="invalid-feedback">{errors.home}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
