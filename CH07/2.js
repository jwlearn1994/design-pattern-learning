'use strict';

// 背景：如果方法需要傳入很多參數，那麼記住这些參數的顺序是很难的，所以我们經常是以一個參數對象方式傳入的。

function a(name, title, age, color, size, prize) {}

/*
 * obj.name: name
 * obj.title: title
 * obj.age: age
 * obj.color: color
 * obj.size: size
 * obj.prize: prize
 */

function a(obj) {}

 // 但是調用它的時候不知道傳遞的參數是否完整，此時我们通常的做法是用適配器来適配傳入的參數對象

function a(obj) {
  var _default = {
    name: '雨夜清荷',
    title: '设计模式',
    age: '20',
    color: 'pink',
    size: 100,
    prize: 50
  };

  // 傳統做法
  for (var i in obj) {
    _default[i] = obj[i] || _default[i];
  }

  // 新的作法
  Object.assign(obj, _default);

  // code ....
}