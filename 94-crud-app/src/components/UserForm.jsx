import 'bootstrap/dist/css/bootstrap.min.css';
import './AddUser.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

// Közös űrlap az új felhasználó felvételéhez és a meglévő módosításához.
// initialData: a mezők kezdőértékei, onSubmit: az ellenőrzött adatokkal hívjuk meg.
const UserForm = ({ title, submitLabel, initialData, onSubmit }) => {
    const [formData, setFormData] = useState(initialData);
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

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <div className="container shadow-sm mt-5 p-3 bg-body rounded">
            <h3>{title}</h3>
            {/* noValidate: a böngésző beépített ellenőrzése helyett a sajátunk fut */}
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        value={formData.name}
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                    {errors.home && <div className="invalid-feedback">{errors.home}</div>}
                </div>
                <button type="submit" className="btn btn-primary">{submitLabel}</button>
            </form>
        </div>
    );
};

UserForm.propTypes = {
    title: PropTypes.string.isRequired,
    submitLabel: PropTypes.string.isRequired,
    initialData: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        home: PropTypes.string,
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
