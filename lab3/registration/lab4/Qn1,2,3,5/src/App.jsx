// Design and develop a simple React component that displays a light bulb image along with a control button.
// When the user clicks the button, the bulb should toggle between ON and OFF states by changing the image dynamically.
// At the same time, a status message should update to indicate whether the bulb is currently ON or OFF.
// The button text should also change accordingly (for example, “Turn ON” or “Turn OFF”).
// Implement the functionality using React state and event handlers.

import { useState } from 'react';
import './App.css';
import onBulb from './assets/onBulb.jpeg';
import offBulb from './assets/offBulb.jpeg';
import PassToggle from './passToggle';
import Counter from './counter';
import ListDisplayer from './ListDisplayer';

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const [items, setItems] = useState(['apple', 'mango', 'hero']);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>Light Bulb Toggle</h2>

      <img src={isOn ? onBulb : offBulb} alt="bulb" className="bulb" />

      {/* Button */}
      <button className="btn" onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>

      <p className="status">
        The bulb  <strong>{isOn ? 'ON' : 'OFF'}</strong>
      </p>
       <PassToggle/> 
       <Counter/> 
      <ListDisplayer items={items} addItem={addItem} deleteItem={deleteItem} />
    </div>
  );
}
