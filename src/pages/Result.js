import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { clearTimeouts } from '../util/helpers';
import { Page, IconSuccess, IconFail } from '../components';

// We import words from this package
// Feel free to use yours
import wordlist from 'wordlist-english';

const Result = () => {
  const { state } = useLocation();
  const { answer } = state || {};

  // If there is no answer in location state
  // just redirect back to homepage
  if (typeof answer === 'undefined' || answer === null) {
    return <Navigate to="/" />;
  }

  // Clear all timeouts from last route
  clearTimeouts();

  // Match answer
  const wordFromAnswer = wordlist.english.find(
    (w) => w === answer?.toLowerCase()
  );

  if (answer === '') {
    // Return if there is no answer provided
    return (
      <Page>
        <div className="resultContainer">
          <IconFail className="resultIcon" />
          <p className="resultText">You failed to type the word in time.</p>
          <Link className="resultLink" to="/">
            Try again
          </Link>
        </div>
      </Page>
    );
  } else {
    // Return if answer is correct
    if (wordFromAnswer) {
      return (
        <Page>
          <div className="resultContainer">
            <IconSuccess className="resultIcon" />
            <p className="resultText">
              Amazing! You have won{' '}
              <strong>{wordFromAnswer.length} points</strong> for providing the
              word <strong>{wordFromAnswer}</strong>.
            </p>
            <Link className="resultLink" to="/">
              Play again
            </Link>
          </div>
        </Page>
      );
    }

    return (
      // Return if answer isn't correct
      <Page>
        <div className="resultContainer">
          <IconFail className="resultIcon" />
          <p className="resultText">
            <strong>{answer}</strong> can't be accepted.
          </p>
          <Link className="resultLink" to="/">
            Try again
          </Link>
        </div>
      </Page>
    );
  }
};

export default Result;
