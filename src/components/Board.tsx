import React, { useState } from 'react';

type Props = {
  changePlayer: () => void;
};

const Board: React.FC<Props> = ({ changePlayer }) => {
  const [squares, setSquares] = useState(Array(9).fill(''));

  return (
    <div className='board'>
      {squares.map((square, index) => (
        <button onClick={changePlayer} key={index} className='square'>
          {index}
        </button>
      ))}
    </div>
  );
};

export default Board;
