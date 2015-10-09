'use strict';

module.exports = function (object) {
  var propertyArray = Object.keys(object);
  var randomProperty = propertyArray[Math.floor(Math.random() * propertyArray.length)];
  return {word: randomProperty};
};
