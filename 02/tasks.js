/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
}

/* function timer2(logger = console.log) {
  for (var i = 0; i < 10; i++) {
    (x => {
      setTimeout(() => {
        logger(x);
      }, 100);
    })(i);
  }
}

function timer3(logger = console.log) {
  for (var i = 0; i < 10; i++) {
    setTimeout((x => () => logger(x))(i), 100);
  }
} */

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
  return function(...newArgs) {
    return func.call(context, ...args, ...newArgs);
  };
}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
  return x === undefined ? 0 : function(y) {
    return y === undefined ? x : sum(x + y);
  };
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  const wordlength = first.length;

  if (wordlength !== second.length) {
    return false;
  }

  first = first.toLowerCase();
  second = second.toLowerCase();

  const arrayOfUnicode = new Array('z'.charCodeAt(0) + 1).fill(0);

  for (let i = 0; i < wordlength; i++) {
    arrayOfUnicode[first[i].charCodeAt(0)] += 1;
    arrayOfUnicode[second[i].charCodeAt(0)] -= 1;
  }
  return arrayOfUnicode.every(x => !x);
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  return Array.from(new Set(arr))
    .sort((a, b) => a - b);
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  const set1 = new Set(first);
  const set2 = new Set(second);

  return Array.from(new Set([...set1].filter(x => set2.has(x))))
    .sort((a, b) => a - b);
}


/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  return (left.length === right.length
    && (left.split('')
      .reduce((res, current, index) => (current !== right[index] ? --res : res), 1) >= 0));
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
