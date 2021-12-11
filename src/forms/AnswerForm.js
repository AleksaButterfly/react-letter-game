import React from 'react';
import { Form } from '../components';

const IS_INPUT_REQUIRED = true;

const AnswerForm = ({ onSubmit, setFormAnswer, notAllowedLetters }) => {
  const hasNotAllowedLetters = notAllowedLetters?.length > 0;
  const submitDisabled = hasNotAllowedLetters;
  return (
    <Form class="answerForm" onSubmit={onSubmit}>
      <div className="answerInputContainer">
        <input
          className="answerInput"
          type="text"
          name="answer"
          id="answer"
          placeholder="Write your word..."
          required={IS_INPUT_REQUIRED}
          onChange={(e) => setFormAnswer(e.target.value)}
        />

        <button
          type="submit"
          className="answerButton"
          disabled={submitDisabled}
        >
          Submit
        </button>
      </div>
      <p className="answerInputError">
        {hasNotAllowedLetters &&
          `${notAllowedLetters.join(', ')} ${
            notAllowedLetters.length === 1
              ? 'letter is not allowed!'
              : 'letters are not allowed!'
          }`}
      </p>
    </Form>
  );
};

export default AnswerForm;
