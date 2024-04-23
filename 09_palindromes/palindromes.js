const palindromes = function (string) {
  // Since we only consider letters and numbers, create a variable containing all valid characters
  const alphastr = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const newStr = string
    .toLowerCase()
    .split('')
    .filter((character) => alphastr.includes(character))
    .join('');

  const revStr = newStr.split('').reverse().join('');

  return newStr === revStr;
};

module.exports = palindromes;