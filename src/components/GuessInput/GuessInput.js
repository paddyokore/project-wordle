import React from 'react'; 

function GuessInput({handleGuess, status}) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleGuess(guess);
    setGuess('');
  }
  return (
    <form 
      className='guess-input-wrapper'
      onSubmit={handleSubmit}
    >
      <label htmlFor='guess-input'>Enter guess: </label>
      <input
        required
        minLength={5}
        maxLength={5} 
        disabled={status!== 'running'}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        id='guess-input' 
        type='text'
        value={guess}
        onChange={Event => {
          setGuess(Event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
