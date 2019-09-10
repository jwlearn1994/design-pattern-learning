'use strict';

var Check = function() {};

Check.prototype = {
  checkName: function() {
    // ...
  },

  checkEmail: function () {
    // ...
  },

  checkPassword: function () {
    // ...
  }
};

var ck = new Check();
ck.checkName();