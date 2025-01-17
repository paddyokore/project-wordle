import React from "react";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../../utils";
import GameInstructions from "../GameInstructions/GameInstructions";
import demo from "../../../public/wordle-demo.gif";
import instructions from "../../../public/instructions.png";

function HomePage() {
  const [isInstructionsModalOpen, toggleInstructionsModal] = useToggle(false);
  const [isDemoModalOpen, toggleDemoModal] = useToggle(false);

  const history = useNavigate();

  const handleClick = () => {
    history("/game");
  };
  return (
    <div>
      <div className="main-wrapper">
        <div className="game-wrapper">
          <div className="icon">
            <img
              src="https://www.nytimes.com/games-assets/v2/assets/wordle/page-icons/wordle-icon.svg"
              alt="wordle logo"
            />
          </div>
          <h1 className="title">Word Game</h1>
          <h1 className="subtitle">Guess the word in 6 tries.</h1>
          <div className="buttonContainer">
            <button
              key="play"
              className="buttonContainer play-button"
              onClick={handleClick}
            >
              Play Game
            </button>
            {isDemoModalOpen && (
              <GameInstructions
                title="game demo"
                handleDismiss={toggleDemoModal}
              >
                <img src={demo} alt="game demo" />
              </GameInstructions>
            )}
            <button
              key="game demo"
              className="buttonContainer instructions-button"
              onClick={toggleDemoModal}
            >
              Watch game demo
            </button>
            {isInstructionsModalOpen && (
              <GameInstructions
                title="Game Instructions"
                handleDismiss={toggleInstructionsModal}
              >
                <img src={instructions} alt="game instructions" />
              </GameInstructions>
            )}
            <button
              key="instructions"
              className="buttonContainer instructions-button"
              onClick={toggleInstructionsModal}
            >
              Game instructions
            </button>
          </div>
          <footer>Developed by Patrick Okore</footer>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
