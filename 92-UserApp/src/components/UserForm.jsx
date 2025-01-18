import React, { useState } from 'react';
import { createUser, updateUser } from '../api';

function UserForm({ user, onSave }) {
  const [formData, setFormData] = useState(user || { name: '', email: '', username: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      await updateUser(formData.id, formData);
    } else {
      await createUser(formData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default UserForm;
