/*
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const resolveValues = [];
    let count = 0;

    for (let i = 0; i < promises.length; i++) {
      promises[i].then(value => {
        resolveValues[i] = value;
        count++;
      }, reject)
        .then(() => {
          if (count === promises.length) {
            return resolve(resolveValues);
          }
        }, reject);
    }
  });
}

module.exports = promiseAll;
