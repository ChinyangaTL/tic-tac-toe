import React from 'react';

type Props = {
  changePlayer: () => void;
  cellIdx: number;
};

const Square: React.FC<Props> = ({ changePlayer, cellIdx }) => {
  return (
    <button onClick={changePlayer} className='square'>
      {cellIdx}
    </button>
  );
};

export default Square;
