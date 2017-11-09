function throttle(time, callback) {
  let timer = 0;

  return () => {
    if (Date.now() >= time + timer) {
      callback();
      timer = Date.now();
    }
  };
}

module.exports = { throttle };
