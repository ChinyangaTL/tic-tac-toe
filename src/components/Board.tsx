import React, { useState } from 'react';
import Square from './Square';

type Props = {
  changePlayer: () => void;
};

const Board: React.FC<Props> = ({ changePlayer }) => {
  const [squares, setSquares] = useState(Array(9).fill(''));

  return (
    <div className='board'>
      {squares.map((square, index) => (
        <Square key={index} changePlayer={changePlayer} cellIdx={index} />
      ))}
    </div>
  );
};

export default Board;
