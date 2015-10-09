'use strict';

var Adjective = function() {
  this.happy = true;
  this.sad = true;
  this.rough = true;
  this.emotional = true;
};

module.exports = Adjective;

//IIFE example (function() {
  // some code
//})();

//could write module.exports.Adjective = Adjective;
// and  module.exports.Noun;
