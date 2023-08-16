import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const changePlayer = () => {
    currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
  };

  return (
    <>
      <Header currentPlayer={currentPlayer} />
      <Board changePlayer={changePlayer} />
    </>
  );
}

export default App;
