'use strict';

var Factory = function(type) {
  if (!(this instanceof Factory)) return new Factory(type);
  if (typeof this[type] !== 'function') throw new Error('未創建該基類');
  let o = this[type];
  return new o();
};

Factory.prototype = {
  javascript: function() {
    this.type = 'javascript';
  },
  nodejs: function() {
    this.type = 'nodejs';
  }
};

Factory.prototype.javascript.prototype = {
  getType() {
    console.log(this.type);
  }
}

let a = Factory('javascript');

// 好處是增加基類時，不需要再修改 Factory，解決簡單工廠的問題了
// 缺點是仍必須指定具體的類別名稱做使用