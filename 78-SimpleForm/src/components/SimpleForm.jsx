import { useState } from 'react';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('apple');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Küldés</button>
      </form>
      <p>Beküldött érték: {submittedValue}</p>
    </div>
  );
};

export default SimpleForm;