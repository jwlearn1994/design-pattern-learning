'use strict';

// 原始做法
function Iphone(model, screen, memory, SN) {
  this. model  = model;
  this.screen = screen;
  this.memory = memory;
  this.SN = SN;
}
var phones = [];
for (var i = 0; i < 1000000; i++) {
  var memory = i % 2 == 0 ? 16 : 32;
  phones.push(new Iphone("iphone6s", 5.0, memory, i));
}



/**
 * 享元模式：
 * 實作解析內在資料與外在資料，將共用資訊提出共享，減少產生的內存消耗
 */


// 實作享元類
function IphoneFlyweight(model, screen, memory) {
  this.model = model;
  this.screen = screen;
  this.memory = memory;
}


// 實作享元工廠
var flyweightFactory = (function () {
  // iphones 對象保存享元對象
  var iphones = {};

  return {
    get: function (model, screen, memory) {
      var key = model + screen + memory;
      // 類似 cache 的實作
      if (!iphones[key]) {
        iphones[key] = new IphoneFlyweight(model, screen, memory);
      }
      return iphones[key];
    }
  };
})();


// 客戶端類
function Iphone(model, screen, memory, SN) {
  this.flyweight = flyweightFactory.get(model, screen, memory);
  this.SN = SN;
}


// 生成iphone
var phones = [];
for (var i = 0; i < 1000000; i++) {
  var memory = i % 2 == 0 ? 16 : 32;
  phones.push(new Iphone("iphone6s", 5.0, memory, i));
}
console.log(phones);
