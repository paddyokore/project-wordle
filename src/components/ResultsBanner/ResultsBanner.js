import React from 'react';

function ResultsBanner( {status, numofGuessList, answer, handleClick} ) {
  const size = numofGuessList === 1? '1 guess': `${numofGuessList} guesses`
  if (status === 'won') {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> You got it in
          {' '}
          <strong>{size}</strong>.
        </p>
        <button onClick={handleClick}><strong>Restart Game</strong></button>
      </div>
    );
  } else if (status === 'lost') {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        <button onClick={handleClick}><strong>Restart Game</strong></button>
      </div>
    );
  }
}

export default ResultsBanner;
