import React, { useState, useEffect } from 'react';

const Time = ({ isFinishedSelecting }) => {
  const [seconds, setSeconds] = useState(26);
  useEffect(() => {
    if (isFinishedSelecting && seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  });
  return (
    <>
      <div className="time">
        <div
          className="timeFill"
          style={{
            height: isFinishedSelecting ? '100%' : '0%',
          }}
        />
      </div>
      {isFinishedSelecting ? (
        <span className="timeSeconds">{seconds}</span>
      ) : null}
    </>
  );
};

export default Time;
