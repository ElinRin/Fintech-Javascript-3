const throttle = (time, callback) => {
  let timer = 0;

  return (...args) => {
    if (Date.now() > time + timer) {
      callback.apply(this, args);
      timer = Date.now();
    }
  };
};

module.exports = { throttle };
