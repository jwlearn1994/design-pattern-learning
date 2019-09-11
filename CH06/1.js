'use strict';

/*
 * 外觀模式可以簡化底層接口複雜性，也可以解決瀏覽器兼容性問題
 */

// 外觀模式實現
function addEvent(dom, type, fn) {

  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn);
  } else {
    dom['on' + type] = fn;
  }
}

var myInput = document.getElementById('myinput');

addEvent(myInput, 'click', function() {
  console.log('绑定第一个事件');
});

addEvent(myInput, 'click', function() {
  console.log('绑定第二个事件');
});