import React, { useState } from 'react';
import { AnswerForm } from '../forms';

const AnswerContainer = (props) => {
  const [formAnswer, setFormAnswer] = useState('');

  const { setAnswer, handleSubmitingAnswer, selectedLetters } = props;
  const handleSubmit = (e) => {
    e.preventDefault();

    const formValue = event.target[0].value;
    if (formValue) {
      setAnswer(formValue);
      handleSubmitingAnswer(formValue);
    }
  };

  const lettersFromAnswer = formAnswer?.toUpperCase().split('');
  const notAllowedLetters = [
    ...new Set(lettersFromAnswer?.filter((x) => !selectedLetters.includes(x))),
  ];

  return (
    <div>
      <AnswerForm
        onSubmit={handleSubmit}
        setFormAnswer={setFormAnswer}
        notAllowedLetters={notAllowedLetters}
      />
    </div>
  );
};

export default AnswerContainer;
