import React from 'react';

const TOTAL_LETTERS_TO_SELECT = 12;

const LettersContainer = (props) => {
  const { letter, selectedLetters, onLetterClick } = props;
  return (
    <div className="lettersContainer">
      {selectedLetters.length < TOTAL_LETTERS_TO_SELECT ? (
        <div
          className="letter"
          onClick={() => onLetterClick()}
          title="Click to close"
        >
          {letter}
        </div>
      ) : null}
      <div className="selectedLetters">
        {selectedLetters.map((l, index) => {
          return (
            <div key={index} className="selectedLetter">
              {l}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LettersContainer;
