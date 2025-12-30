import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

function Hearts({ likecount, handleClick }) {
  const hearts = [];

  for (let i = 0; i < 5; i++) {
    // Logika: ha az index kisebb mint a likecount, akkor "teli", egyébként "üres"
    // (Vagy fordítva, ahogy a logikád kívánja)
    const heartIcon = i < likecount ? solidHeart : regularHeart;

    hearts.push(
      <FontAwesomeIcon
        key={i}
        icon={heartIcon}
        style={{ marginRight: "5px", cursor: "pointer" }}
        onClick={() => handleClick(i)} // Itt hívjuk meg az átvett függvényt
      />
    );
  }

  return (
    <div className="hearts" style={{ fontSize: "24px", color: "red" }}>
      {hearts}
    </div>
  );
}

export default Hearts;
