import './UserCard.css'; // CSS fájl importálása
import PropTypes from 'prop-types';

const UserCard = ({ name, age, hobbies }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <h4>Hobbies:</h4>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
UserCard.defaultProps = {
    name: 'Unknown User',
    age: 'N/A',
    hobbies: [],
  };
UserCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hobbies: PropTypes.arrayOf(PropTypes.string),
};

export default UserCard;
