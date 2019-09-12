'use strict';


// 實作 console.log 方法的訪問者
function log(...item) {
  if (typeof console !== void 0 && console.log) {
    return console.log.apply(console, item);
  }
}