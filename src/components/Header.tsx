import React from 'react';

type Props = {
  currentPlayer: string;
};

const Header: React.FC<Props> = ({ currentPlayer }) => {
  return <p>Current player is {currentPlayer}</p>;
};

export default Header;
