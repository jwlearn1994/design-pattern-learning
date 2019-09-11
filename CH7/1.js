
'use strict';

// 定義框架
var A = A || {};

// 通過id獲取元素
A.g = function(id) {
  return document.getElementById(id);
};

// 為元素绑定事件
A.on = function(id, type, fn) {
  // 如果傳遞參數是字符串則以id處理，否則以元素對象處理
  var dom = typeof id ==='string' ? this.g(id) : id;

  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn);
  } else {
    dom['on' + type] = fn;
  }
};

A.on(window, 'load', function() {
  // 按鈕點擊事件
  A.on('mybutton', 'click', function() {
    // xxx
  });
});



// 背景：忽然項目中想把依賴換成jQuery，但總不能所有的方法都用jQuery的語法重新寫一遍，那就寫個適配器吧~

/********* 適配器（適配jQuery） *************/

A.g = function(id) {
  // 通過jQuery獲取jQuery對象，然後返回第一個成員
  return $(id).get(0);
};

A.on = function(id, type, fn) {
  // 如果傳遞參數是字符串則以id處理，否則以元素對象處理
  var dom = typeof id === 'string' ? $('#' + id) : $(id);

  // 绑定事件
  dom.on(type, fn);
};

