/**
 * Изменить поведение чисел таким образом, чтобы указанные конструкции были эквивалетны при условии,
 * что римские цифры могут быть любыми.
 * 0..V => [0, 1, 2, 3, 4]
 * 0..VII => [0, 1, 2, 3, 4, 5, 6]
 * 0..X => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * Подсказка - необходимо использовать Proxy - объекты
 * */


class romanNumerals {
  romanToArabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  constructor(number) {
    this.number = number;
  }

  getArabicNumber(parseNumber = this.number, result = 0) {
    if (!parseNumber[0]) {
      return result;
    }

    const leftNumeral = this.romanToArabic[parseNumber[0]];
    const rightNumeral = this.romanToArabic[parseNumber[1]];

    if (leftNumeral < rightNumeral) {
      return this.getArabicNumber(parseNumber.substr(2), result + rightNumeral - leftNumeral);
    }
    return this.getArabicNumber(parseNumber.substr(1), result + leftNumeral);
  }
}

const proxy = new Proxy(Object.getPrototypeOf(Number.prototype), {
  get: (target, property) => {
    const romanNumber = new romanNumerals(property);
    const res = romanNumber.getArabicNumber();

    return property in target ? target[property] : [...Array(res)
      .keys()];
  }
});

Object.setPrototypeOf(Number.prototype, proxy);
