export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const clearTimeouts = () => {
  var highestTimeoutId = setTimeout(';');
  for (var i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
};
