const throttle = (time, callback) => {
  let lastCall = 0;
  let now = 0;
  const callbackWrapper = (...args) => {
    now = Date.now();
    if (now > time + lastCall) {
      callback(...args);
      lastCall = now;
    } else {
      setTimeout(() => callbackWrapper(...args), lastCall + time - now);
    }
  };

  return callbackWrapper;
};

module.exports = { throttle };
