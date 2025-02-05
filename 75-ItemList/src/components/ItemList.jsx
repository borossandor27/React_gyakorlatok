import { useState } from 'react';

const ItemList = () => {
    const [selectedItem, setSelectedItem] = useState('');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const items = ['Elem 1', 'Elem 2', 'Elem 3'];

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(item)}>
                        {item}
                    </li>
                ))}
            </ul>
            <p>Kiválasztott elem: {selectedItem}</p>
        </div>
    );
};

export default ItemList;