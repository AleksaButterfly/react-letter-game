import React, { useState, useRef } from 'react';
import { generateAlphabet } from '../util/letters';
import { randomInt } from '../util/helpers';
import { Page, LettersContainer, AnswerContainer, Time } from '../components';

const LETTERS_TIMEOUT = 250;
const ANSWER_TIMEOUT = 26000; // 26 seconds
const TOTAL_LETTERS_TO_SELECT = 12;

const Homepage = (props) => {
  const { navigate } = props;
  const letters = generateAlphabet();

  // State managment
  const [letter, setLetter] = useState(letters[0]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [answer, setAnswer] = useState(null);

  // References
  const lettersInterval = useRef(null);

  // We'll define lengths for
  // easier readability
  const totalLettersLength = letters.length;
  const selectedLettersLength = selectedLetters.length;

  // Logic for displaying the
  // random letters
  if (lettersInterval?.current) {
    clearInterval(lettersInterval.current);
  }
  lettersInterval.current = setInterval(() => {
    setLetter(letters[randomInt(1, totalLettersLength - 1)]);
  }, LETTERS_TIMEOUT);

  // Logic once the user selected
  // all letters
  const isFinishedSelecting = selectedLettersLength === TOTAL_LETTERS_TO_SELECT;
  if (isFinishedSelecting) clearInterval(lettersInterval.current);
  const handleFinishingSelecting = () => {
    setTimeout(() => {
      navigate('/result', {
        state: {
          answer: '',
        },
      });
    }, [ANSWER_TIMEOUT]);
  };

  // Logic once user submitted answer
  const handleSubmitingAnswer = (formAnswer) => {
    clearInterval(lettersInterval.current);
    setAnswer(null);

    navigate('/result', {
      state: { answer: formAnswer },
    });
  };

  // Handle selecting the letter
  const onLetterClick = () => {
    setSelectedLetters([...selectedLetters, letter]);
    setLetter(letters[randomInt(1, totalLettersLength - 1)]);

    if (selectedLetters.length === TOTAL_LETTERS_TO_SELECT - 1) {
      handleFinishingSelecting();
    }
  };

  return (
    <Page>
      <Time isFinishedSelecting={isFinishedSelecting} />
      <LettersContainer
        letter={letter}
        selectedLetters={selectedLetters}
        onLetterClick={onLetterClick}
      />
      {isFinishedSelecting && !answer ? (
        <AnswerContainer
          answer={answer}
          setAnswer={setAnswer}
          handleSubmitingAnswer={handleSubmitingAnswer}
          selectedLetters={selectedLetters}
        />
      ) : null}
    </Page>
  );
};

export default Homepage;
