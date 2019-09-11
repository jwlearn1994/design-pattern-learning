(function (global, factory){
  // Nodejs 環境
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  // AMD 環境
  typeof define === 'function' && define.amd ? define(factory) :
  // Browser 環境
  (global = global || self, global.SuperClass = factory());
}(this, function() { 'use strict';

  /*  */

  const SuperClass = function() {
    // ...
  }

  // 此處返回的值就是一個 factory 函數
  return SuperClass;

}));
