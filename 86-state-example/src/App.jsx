import UserCard from './UserCard';

const App = () => {
  const users = [
    { name: 'Anna', age: 28, hobbies: ['reading', 'coding', 'hiking'] },
    { name: 'John', age: 35, hobbies: ['gaming', 'fishing'] },
    { name: 'Laura', age: 24, hobbies: ['painting', 'dancing'] },
    { name: 'Mike', age: 40, hobbies: ['cooking', 'gardening'] },
    { name: 'Sophie', age: 19, hobbies: ['shopping', 'swimming', 'food'] },
    { name: 'Tom', age: 22, hobbies: ['running', 'cycling'] },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>User List</h1>
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          age={user.age}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};

export default App;
