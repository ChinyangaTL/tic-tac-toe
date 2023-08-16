import React, { useState } from 'react';
import Square from './Square';

type Props = {
  changePlayer: () => void;
  currentPlayer: string;
};

const Board: React.FC<Props> = ({ changePlayer, currentPlayer }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [squares, setSquares] = useState(Array(9).fill(''));

  const handleClick = (cellIdx: number) => {
    const grid = [...squares];
    grid[cellIdx] = currentPlayer;
    console.log(grid);
    setSquares(grid);
  };

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
    </div>
  );
};

export default Board;
