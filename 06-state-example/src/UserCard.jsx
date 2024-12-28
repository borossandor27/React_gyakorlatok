import  { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UserCard.module.css'

const UserCard = ({ name, age, hobbies }) => {
    const [currentAge, setCurrentAge] = useState(age); // Állapot definiálása

    // Funkció az életkor növelésére, ezt hívjuk meg a gomb lenyomásakor
    const increaseAge = () => {
        setCurrentAge(currentAge + 1);
    };

    return (
        <div className={styles["user-card"]}>
            <h2>{name}</h2>
            <p><strong>Age:</strong> {currentAge}</p>
            <button onClick={increaseAge}>Increase Age</button>
            <h4>Hobbies:</h4>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
};

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserCard;
