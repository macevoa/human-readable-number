module.exports = function toReadable (number) {
  const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  let hundreds = '';
  let dozens = '';
  if (number === 0) return 'zero';
  if (number > 99) {
    hundreds = `${numbers[Math.floor(number / 100)]} hundred`;
    number = number % 100;
  }
  if (number < 20) dozens = numbers[number];
  if (number > 20) dozens = `${numbers[(Math.floor(number / 10)) * 10]} ${numbers[number % 10]}`;
  if ([20,30,40,50,60,70,80,90].includes(number)) dozens = numbers[number];
  
  if (hundreds) {
    if (dozens) {
      return `${hundreds} ${dozens}`;
    } else {
      return hundreds;
    }
  } else {
    return dozens;
  }
}
