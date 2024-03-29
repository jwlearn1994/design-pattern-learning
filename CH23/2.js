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

// good

A.on = function(dom, type, fn) {
  if (dom.addEventListener) {
    A.on = function(dom, type, fn) {
      dom.addEventListener(type, fn, false);
    };
  } else if (dom.attachEvent) {
    A.on = function(dom, type, fn) {
      dom.attachEvent(type, fn);
    };
  } else {
    A.on = function(dom, type, fn) {
      dom['on' + type] = fn;
    };
  }

  // 重新定義 on 事件後需要繼續調用過程
  A.on(dom, type, fn);
}

console.log(A.on)

A.on(document, 'click', function() {});

console.log(A.on)