function throttle(time, callback) {
  let timer = 0;

  return () => {
    if (Date.now() - timer > time) {
      callback();
      timer = Date.now();
    }
  };
}

module.exports = { throttle };
