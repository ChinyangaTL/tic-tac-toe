import { useState } from 'react';
import './App.css';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(''));

  return (
    <div className='board'>
      {squares.map((square, index) => (
        <button key={index} className='square'>
          {index}
        </button>
      ))}
    </div>
  );
}

export default App;
