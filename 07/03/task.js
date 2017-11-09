const throttle = (time, callback) => {
  let lastCall = 0;
  let now = 0;

  return (...args) => {
    now = Date.now();
    if (now > time + lastCall) {
      callback.apply(this, args);
      lastCall = now;
    }
  };
};

module.exports = { throttle };
