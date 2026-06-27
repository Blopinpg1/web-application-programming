// Design a React application where a parent component maintains a list of items in its state and
// passes the list along with add and delete functions to a child component using props.
// The child component should display the list and allow users to modify it through the provided buttons.
import { useState } from 'react';

const ListDisplayer = ({ items, addItem, deleteItem }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <h2>Item list </h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type new item"
      />
      <button
        onClick={() => {
          if (inputValue.trim() !== '') {
            addItem(inputValue);
            setInputValue('');
          }
        }}
      >
        {' '}
        Add Item
      </button>

      {/* display list */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDisplayer;
