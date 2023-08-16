import React from 'react';

type Props = {
  handleCellClick: (idx: number) => void;
  changePlayer: () => void;
  cellIdx: number;
};

const Square: React.FC<Props> = ({
  changePlayer,
  cellIdx,
  handleCellClick,
}) => {
  const handleClick = () => {
    handleCellClick(cellIdx);
    changePlayer();
  };
  return (
    <button onClick={handleClick} className='square'>
      {cellIdx}
    </button>
  );
};

export default Square;
