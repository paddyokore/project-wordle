import React from 'react';
import { answer } from '../Game';

function ResultsBanner( {status, numofGuessList, answer} ) {
  const size = numofGuessList === 1? '1 guess': `${numofGuessList} guesses`
  if (status === 'won') {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> You got it in
          {' '}
          <strong>{size}</strong>.
        </p>
      </div>
    );
  } else if (status === 'lost') {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    );
  }
}

export default ResultsBanner;
