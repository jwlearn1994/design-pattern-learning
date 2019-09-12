'use strict';

function bind(fn, context) {
  return function () {
    return fn.apply(context, arguments);
  }
}

// 取得兩個元素
var btn = document.getElementById('btn');
var p = document.getElementById('p');

function demoFn() {
  console.log(arguments, this);
  btn.removeEventListener('click', bindFn);
}

// 綁定 p 給 demoFn 作為 this
var bindFn = bind(demoFn, p);

// 將事件添加給 btn，但內部 this 指向不再是 btn，而是 p
btn.addEventListener('click', bindFn, false);

/*
// 另一种简单的写法
function test() {
  (function() {
    console.log(this)
    btn.removeEventListener('click', test);
  }).call(p);
}
btn.addEventListener('click', test, false);
*/