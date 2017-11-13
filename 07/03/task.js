const throttle = (time, callback) => {
  let lastCall = 0;
  let now = 0;
  const callbackWrapper = (...args) => {
    now = Date.now();
    const timeLeft = lastCall + time - now;

    if (timeLeft > 0) {
      setTimeout(() => callbackWrapper(...args), timeLeft);
    } else {
      callback(...args);
      lastCall = now;
    }
  };

  return callbackWrapper;
};

module.exports = { throttle };
