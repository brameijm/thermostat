'use strict';

module.exports = {
  convertTemperature
};

function convertTemperature(temperature, unitToConvertTo) {
  let convertedTemperature;
  if (unitToConvertTo === 'F') {
    convertedTemperature = (temperature * (9/5)) + 32;
  } else if (unitToConvertTo === 'C') {
     convertedTemperature = (temperature - 32) * (5/9);
  }
  
  return `${Math.floor(convertedTemperature)}(${unitToConvertTo})`;
}