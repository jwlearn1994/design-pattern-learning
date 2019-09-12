'use strict';


// 靈活拆分節點
var menu_1 = function(type) {
  if (type === 1) {
    console.log('一號餐')
  } else {
    return 'next'
  }
}

var menu_2 = function(type) {
  if (type === 2) {
    console.log('二號餐')
  } else {
    return 'next'
  }
}

var menu_3 = function(type) {
  if (type === 3) {
    console.log('三號餐')
  } else {
    console.log('餐點不存在')
  }
}


// 實作職責鍊
var Chain = function(fn) {
  this.fn = fn;
  this.next = null;
}

Chain.prototype = {
  setNext(fn) {
    this.next = fn;
  },
  pass(type) {
    let res = this.fn(type);

    if (res === 'next') {
      return this.next.pass(type);
    }
    return res;
  }
}


// 實例化
var chainMenu_1 = new Chain(menu_1);
var chainMenu_2 = new Chain(menu_2);
var chainMenu_3 = new Chain(menu_3);

chainMenu_1.setNext(chainMenu_2);
chainMenu_2.setNext(chainMenu_3);


chainMenu_1.pass(3);