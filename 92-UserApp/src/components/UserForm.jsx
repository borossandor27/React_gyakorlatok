import { useState } from 'react';
import PropTypes from 'prop-types';
import { createUser, updateUser } from '../api';

// Az API egy felhasználóról a name, email és home mezőket tárolja
function UserForm({ user, onSave }) {
  const [formData, setFormData] = useState(user || { name: '', email: '', home: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await updateUser(formData.id, formData);
      } else {
        await createUser(formData);
      }
      onSave();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="home">Home:</label>
        <input type="text" id="home" name="home" value={formData.home} onChange={handleChange} required />
      </div>
      <button type="submit">Save</button>
      {error && <p>Hiba: {error}</p>}
    </form>
  );
}

UserForm.propTypes = {
  user: PropTypes.object,
  onSave: PropTypes.func.isRequired,
};

export default UserForm;
