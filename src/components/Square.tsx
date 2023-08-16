import React from 'react';

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
  const handleClick = () => {
    handleCellClick(cellIdx);
    changePlayer();
  };
  return (
    <button onClick={handleClick} className='square'>
      {currentGrid[cellIdx] === 'X' && <p>X</p>}
      {currentGrid[cellIdx] === 'O' && <p>O</p>}
    </button>
  );
};

export default Square;
