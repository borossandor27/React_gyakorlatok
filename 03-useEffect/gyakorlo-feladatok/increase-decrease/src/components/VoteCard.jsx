import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import "./VoteCard.css"; 
// Feltételezve, hogy a Font Awesome ikonok a megfelelő módon vannak beállítva a projektben.

const VoteCard = ({ votes, onIncrease, onDecrease }) => {
    // 1. Állapot a jelenlegi választás tárolására: 'none', 'like', vagy 'dislike'
    const [currentVote, setCurrentVote] = useState('none');

    const handleLike = () => {
        if (currentVote === 'none') {
            // Eredeti állapot -> LIKE: növeljük a számlálót, beállítjuk 'like'-ra
            onIncrease();
            setCurrentVote('like');
        } else if (currentVote === 'dislike') {
            // DISLIKE -> LIKE: kétszer növeljük (DISLIKE visszavonása (-1) + LIKE hozzáadása (+1)) -> (összesen: +2),
            // de a feladat szerint csak -1-et kell visszavonni és +1-et hozzáadni:
            // Csökkentés visszavonása (ami már megtörtént a dislike-nál) + Like számlálása
            // Egyszer növeljük (a dislike visszavonása), majd még egyszer növeljük (a like-ra szavazás miatt). 
            // VAGY: 
            // Mivel a szavazat csak 1-el nő/csökken a diszlike/like között (az előző szavazat visszavonása + az új szavazat),
            // ezért a "nettó változás" a külső számlálón (ami 0-nál nem lehet kisebb!) itt +1 kell legyen. 
            // Az egyszerűség kedvéért: +1-el növeljük
            onIncrease();
            setCurrentVote('like');
        } else if (currentVote === 'like') {
            // LIKE -> LIKE: Nem történik semmi
            return;
        }
    }

    const handleDislike = () => {
        if (currentVote === 'none') {
            // Eredeti állapot -> DISLIKE: csökkentjük a számlálót (ha nem nulla), beállítjuk 'dislike'-ra
            if (votes > 0) {
                onDecrease(); 
            }
            setCurrentVote('dislike');
        } else if (currentVote === 'like') {
            // LIKE -> DISLIKE: csökkentjük a számlálót, beállítjuk 'dislike'-ra
            // Mivel a számláló nem lehet 0-nál kisebb, és a like miatt legalább 1 volt, 
            // de ez a logika feltételezi, hogy a számláló már nőtt.
            // Egyszer csökkentjük (a like visszavonása), majd még egyszer csökkentjük (a dislike-ra szavazás miatt).
            // VAGY:
            // A feladat szerint a számláló csökken, de nem lehet kevesebb nullánál.
            // Ezt egyszerűen úgy kezeljük, ha a számláló csökken, de max 0-ig. 
            // Az egyszerűség kedvéért: -1-el csökkentjük
            if (votes > 0) {
                 onDecrease();
            }
            setCurrentVote('dislike');
        } else if (currentVote === 'dislike') {
            // DISLIKE -> DISLIKE: Nem történik semmi
            return;
        }
    }

    // 2. A gombok színének meghatározása az aktuális állapot alapján
    const likeColor = currentVote === 'like' ? 'green' : 'gray';
    const dislikeColor = currentVote === 'dislike' ? 'red' : 'gray';

    return (
        <div className="vote-card">
            <button 
                onClick={handleLike}
                style={{ color: likeColor }} // Stílus beállítása
                aria-label="Like"
            >
                <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <p> {votes} </p>
            <button 
                onClick={handleDislike}
                style={{ color: dislikeColor, transform: "rotateY(180deg)" }} // Stílus beállítása
                aria-label="Dislike"
            >
                <FontAwesomeIcon icon={faThumbsDown} />
            </button>
        </div>
    );
}

export default VoteCard;