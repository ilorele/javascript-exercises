const convertToCelsius = function(tempInFahrenheit) {
  const tempInCelsius = (tempInFahrenheit - 32) * 5/9;
  if (Number.isInteger(tempInCelsius)) {
    return tempInCelsius;
  }
  const tempInCelsiusRounded = +tempInCelsius.toFixed(1);
  return tempInCelsiusRounded;
};

const convertToFahrenheit = function(tempInCelsius) {
  const tempInFahrenheit = tempInCelsius * 9/5 + 32;
  if (Number.isInteger(tempInFahrenheit)) {
    return tempInFahrenheit;
  }
  const tempInCelsiusRounded = +tempInFahrenheit.toFixed(1);
  return tempInCelsiusRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
