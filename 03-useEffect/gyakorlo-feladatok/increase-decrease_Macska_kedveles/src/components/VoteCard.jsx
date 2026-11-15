import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import "./VoteCard.css";

// votes: az aktuális szavazatszám (a szülő tárolja)
// onVote: a szülő függvénye, 'increase' vagy 'decrease' paraméterrel hívjuk
const VoteCard = ({ votes, onVote }) => {
    // A felhasználó jelenlegi választása: 'none', 'like' vagy 'dislike'
    const [currentVote, setCurrentVote] = useState('none');

    const handleLike = () => {
        // LIKE -> LIKE: nem történik semmi
        if (currentVote === 'like') return;

        // 'none' vagy 'dislike' állapotból: eggyel nő a számláló
        onVote('increase');
        setCurrentVote('like');
    };

    const handleDislike = () => {
        // DISLIKE -> DISLIKE: nem történik semmi
        if (currentVote === 'dislike') return;

        // 'none' vagy 'like' állapotból: eggyel csökken a számláló.
        // Azt, hogy nulla alá ne mehessen, a szülő (Catcard) biztosítja.
        onVote('decrease');
        setCurrentVote('dislike');
    };

    // A gombok színe az aktuális választástól függ
    const likeColor = currentVote === 'like' ? 'green' : 'gray';
    const dislikeColor = currentVote === 'dislike' ? 'red' : 'gray';

    return (
        <div className="vote-card">
            <button
                onClick={handleLike}
                style={{ color: likeColor }}
                aria-label="Like"
            >
                <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <p> {votes} </p>
            <button
                onClick={handleDislike}
                style={{ color: dislikeColor, transform: "rotateY(180deg)" }}
                aria-label="Dislike"
            >
                <FontAwesomeIcon icon={faThumbsDown} />
            </button>
        </div>
    );
};

export default VoteCard;
