import styles from './UserCard.module.css'; // CSS fájl importálása
import PropTypes from 'prop-types';

const UserCard = ({ name, age, hobbies }) => {
    return (
        <div className={styles["user-card"]}>
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
    name: PropTypes.string.isRequired, // A name kötelező string
    age: (props, propName, componentName) => {
        const value = props[propName];
        if (typeof value !== 'number') { // Az életkor egy szám kell legyen
          return new Error(`${propName} in ${componentName} must be a number.`);
        }
        if (value < 0 || value > 120) { // Az életkor 0 és 120 közötti szám lehet
          return new Error(`${propName} in ${componentName} must be between 0 and 120.`);
        }
        return null; // Érvényes esetben nincs hiba
    },
    hobbies: PropTypes.arrayOf(PropTypes.string).isRequired, // A hobbies egy stringekből álló tömb
    
};

export default UserCard;
