import { useState } from 'react';
import PropTypes from 'prop-types';

function UsernameInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
UsernameInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


function EmailInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={value}
        onChange={onChange}
        />
    </div>
  );
}
EmailInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    };

function PasswordInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="password">Password:</label>
        <input
        type="password"
        id="password"
        name="password"
        value={value}
        onChange={onChange}
        />
    </div>
    );
}
PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

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
      <UsernameInput value={formData.username} onChange={handleChange} />
      <EmailInput value={formData.email} onChange={handleChange} />
      <PasswordInput value={formData.password} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}
export default RegistrationForm;
