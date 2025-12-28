import { useState } from "react";

function SharedDataButton({ count, setCount }) {

    return (
        <button onClick={() => setCount(count + 1)}>
            {`Szülő komponensben számolva: ${count}`}
        </button>
    );
}

export default SharedDataButton;