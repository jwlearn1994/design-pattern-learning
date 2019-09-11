'use strict';

var card = (function() {
  // 私有屬性
  var cardNum = 0;

  // 私有方法
  var checkMoney = function() {
    // ...
  }

  var _card = function(id, type, price) {
    var name, price;

    // 特權方法
    this.setName = function() {};
    this.setType = function() {};
    this.setPrice = function() {};

    // 構造器
    this.setName(name);
    this.setPrice(price);
  }

  _card.prototype = {
    // 靜態公有方法
    display: function() {}
  }

  return _card;

})();