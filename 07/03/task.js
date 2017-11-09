function throttle(time, callback) {
  let timer = 0;

  return (...args) => {
    if (Date.now() >= time + timer) {
      callback(...args);
      timer = Date.now();
    }
  };
}

module.exports = { throttle };
