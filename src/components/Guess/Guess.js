import React from 'react';
import { range } from '../../utils';
import {checkGuess} from '../../game-helpers'

function Rend({letter, status}) {
  const className = status ? `cell ${status}`: 'cell'
  return (    
    <span                   
      className={className}
    >
      {letter}    
    </span>
  )
}  

function Guess({value, answer}) {
  const output = checkGuess(value, answer);
  return (
    <div className="guess-results">
      
        <p className="guess">
          {range(5).map((num) => (
            < Rend 
              key={num}
              letter={output? output[num].letter: undefined}
              status={output? output[num].status: undefined}
            />
          ))}   
        </p>
     </div>
  );
}

export default Guess;
