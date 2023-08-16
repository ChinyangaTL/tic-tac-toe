import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const changePlayer = () => {
    currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
  };

  return (
    <>
      <Header currentPlayer={currentPlayer} />
      <div className='board'>
        {squares.map((square, index) => (
          <button onClick={changePlayer} key={index} className='square'>
            {index}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
