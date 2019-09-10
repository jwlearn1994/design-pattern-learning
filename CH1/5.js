'use strict';

var Check = function() {};

Check.prototype = {
  checkName: function() {
    // ...
    return this;
  },

  checkEmail: function () {
    // ...
    return this;
  },

  checkPassword: function () {
    // ...
    return this;
  }
};

var ck = new Check();
ck.checkName().checkEmail().checkPassword();