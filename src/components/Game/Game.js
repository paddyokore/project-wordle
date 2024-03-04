import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessTracker from '../GuessTracker';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import ResultsBanner from '../ResultsBanner';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.log({ answer });

function Game() {
  const [status, setStatus] = React.useState('running');
  const [guessList, setGuessList] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  })
  console.log({answer});
  function handleGuess(label) {   
    const nextGuess = [...guessList, label];
    setGuessList(nextGuess);

    if (label === answer) {
      setStatus('won');
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }

  function handleClick() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuessList([]);
    setStatus('running');
  }

  return ( 
    <div>           
      <GuessTracker guessList={guessList} answer={answer}/>
      <GuessInput 
        handleGuess={handleGuess}
        status={status}
      /> 
      <ResultsBanner 
       status={status} 
       numofGuessList={guessList.length}
       answer={answer}
       handleClick={handleClick}
      />
    </div>
  );
}



export default Game;
// export {answer};
