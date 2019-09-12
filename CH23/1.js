'use strict';


var A = {};

// bad
A.on = function(dom, type, fn) {
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attachEvent) {
    dom.attachEvent(type, fn);
  } else {
    dom['on' + type] = fn;
  }
};

console.log(A.on)


// good
A.on = (function(dom) {
  if (dom.addEventListener) {
    return function(dom, type, fn) {
      dom.addEventListener(type, fn, false);
    }
  } else if (dom.attachEvent) {
    return function(dom, type, fn) {
      dom.attachEvent(type, fn);
    }
  } else {
    return function(dom, type, fn) {
      dom['on' + type] = fn;
    }
  }
})(document);

console.log(A.on);