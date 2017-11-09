
const doubleClick = (element, doubleClickHandler, delay) => {
  let isClick = false;

  element.addEventListener('click', () => {
    if (!isClick) {
      isClick = true;
      setTimeout(() => {
        isClick = false;
      }, delay);
    } else {
      isClick = false;
      doubleClickHandler();
    }
  });
};

doubleClick(document.querySelector('button'), () => {
  const li = document.createElement('li');

  li.textContent = `2xClick - ${new Date().getTime()}`;
  document.querySelector('ol').appendChild(li);
}, 400);
