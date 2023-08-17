import React, { useState } from 'react';

type Props = {
  handleCellClick: (idx: number) => void;
  changePlayer: () => void;
  cellIdx: number;
  currentGrid: string[];
};

const Square: React.FC<Props> = ({
  changePlayer,
  cellIdx,
  handleCellClick,
  currentGrid,
}) => {
  const [isSquareClicked, setIsSquareClicked] = useState(false);

  const handleClick = () => {
    handleCellClick(cellIdx);
    changePlayer();
    setIsSquareClicked(true);
  };
  return (
    <button disabled={isSquareClicked} onClick={handleClick} className='square'>
      {currentGrid[cellIdx] === 'X' && <p>X</p>}
      {currentGrid[cellIdx] === 'O' && <p>O</p>}
    </button>
  );
};

export default Square;
