// List Items Input and Display
// Description: Build a component that allows users to enter items into a list. Each new item should be added when the "Add" button is clicked, and displayed on the page.

// Steps:
//     - Write your code within the file, by the name of component as List_Item
import React, { useState } from 'react';

const ListItem = () => {
  const [item, setItem] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const handleInputChange = (event) => {
    setItem(event.target.value);
  };

  const handleAddItem = () => {
    if (item.trim()) {
      setItemsList([...itemsList, item]);
      setItem('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={handleInputChange}
        placeholder="Enter an item"
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {itemsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListItem;
