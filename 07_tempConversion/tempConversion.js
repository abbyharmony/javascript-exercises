const convertToCelsius = function(temp) {
  let convertedTemp = (temp - 32) * 5/9;
  let rounded = Math.round(convertedTemp * 10) / 10;
  let fixed = rounded.toFixed(1);
  return parseFloat(convertedTemp.toFixed(1));
};

const convertToFahrenheit = function(temps) {
  let convertedTemps = (temps * 9/5 + 32);
  let rounded = Math.round(convertedTemps * 10) / 10;
  let fixed = rounded.toFixed(1);
  return parseFloat(convertedTemps.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
