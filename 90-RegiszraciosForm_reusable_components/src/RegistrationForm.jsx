import React, { useState } from 'react';
import TextInput from './TextInput';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Username:"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <TextInput
        label="Email:"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextInput
        label="Password:"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
