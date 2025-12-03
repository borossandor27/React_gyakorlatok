import React, { useState } from "react";
import "./Catcard.css";
import VoteCard from "./VoteCard";

const Catcard = ({ imageURL, imageWidth, imageHeight }) => {
  // Állapot a szavazatok számának tárolására
  const [votes, setVotes] = useState(0);

  // Kezelő függvény a szavazás logikájának központosítására
  const handleVoteAction = (action) => {
    setVotes((prevVotes) => {
      if (action === "increase") {
        return prevVotes + 1;
      } else if (action === "decrease") {
        // Biztosítja, hogy a számláló ne legyen kisebb nullánál
        return Math.max(0, prevVotes - 1);
      }
      return prevVotes;
    });
  };

  // A Catcard stílusához szükséges képarány számítása (CSS-ben is használható)
  const aspectRatio = imageWidth / imageHeight;

  return (
    <div className="cat-card">
      <div
        className="cat-image-container"
        style={{ aspectRatio: `${imageWidth} / ${imageHeight}` }}
      >
        <div className="cat-image">
          <img
            src={imageURL}
            alt="Macska"
            className="cat-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/500x375/374151/ffffff?text=Kép+betöltési+hiba";
            }}
          />
        </div>
      </div>

      <VoteCard votes={votes} onVote={handleVoteAction} />
    </div>
  );
};

export default Catcard;
