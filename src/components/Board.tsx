import React, { useEffect, useState } from 'react';
import Square from './Square';
import { checkWinner } from '../utils/checkForWinner';

type Props = {
  changePlayer: () => void;
  currentPlayer: string;
};

const Board: React.FC<Props> = ({ changePlayer, currentPlayer }) => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [winningPlayer, setWinningPlayer] = useState('');

  const handleClick = (cellIdx: number) => {
    const grid = [...squares];
    grid[cellIdx] = currentPlayer;

    setSquares(grid);
  };

  useEffect(() => {
    const winner = checkWinner(squares);
    if (winner) {
      setWinningPlayer(winner);
    }
  }, [squares]);

  return (
    <div className='board'>
      {squares.map((_, index) => (
        <Square
          key={index}
          changePlayer={changePlayer}
          cellIdx={index}
          handleCellClick={handleClick}
          currentGrid={squares}
        />
      ))}
      {winningPlayer && <h2>{winningPlayer} wins!</h2>}
    </div>
  );
};

export default Board;
