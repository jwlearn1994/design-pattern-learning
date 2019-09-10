'use strict';

Function.prototype.addMethod = function(name, fn) {
  this.prototype[name] = fn;

  return this;
};

var Methods = function() {};

Methods.addMethod('checkName', function() {
  // ...
}).addMethod('checkEmail', function() {
  // ...
});

var ck = new Methods();
ck.checkName();