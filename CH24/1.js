'use strict';

function bind(fn, context) {
  return function () {
    return fn.apply(context, arguments);
  }
}

// 測試

var obj = {
  name: 'Johnny'
};

function test(age) {
  console.log(this.name, age);
}

var a = bind(test, obj);
a(33); // Johnny 33


// 將本來兩個沒有關聯的物件與方法建立綁定使用。