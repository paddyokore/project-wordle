import React from 'react';

import Game from '../Game';
import Header from '../Header';

function ShowGame() {
  return (
    <div className="wrapper">
      <Header />
      <a className="home" href='/'>Home</a>   
      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default ShowGame;
