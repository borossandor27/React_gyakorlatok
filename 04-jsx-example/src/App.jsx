const App = () => {
  const user = {
    name: 'Anna',
    age: 28,
    hobbies: ['reading', 'coding', 'hiking'],
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to React with Vite!</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
      <h3>Hobbies:</h3>
      <ul>
        {user.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
