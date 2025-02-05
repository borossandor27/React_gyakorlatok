import { useState } from 'react';

const ClickButton = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('A gombra kattintottál!');
  };

  return (
    <div>
      <button onClick={handleClick}>Kattints rám!</button>
      <p>{message}</p>
    </div>
  );
};

export default ClickButton;