'use strict';


// 價格策略對象
var PriceStrategy = (function() {
  // 内部算法對象
  var strategy = {

    // 100返30
    return30: function(price) {
      return price + parseInt(price / 100) * 30;
    },

    // 满100返50
    return50: function(price) {
      return price + parseInt(price / 100) * 50;
    },

    // 九折
    percent90: function(price) {
      return 90 / 100 * +price;
    },

    // 八折
    percent80: function(price) {
      return 80 / 100 * +price;
    },

    // 五折
    percent50: function(price) {
      return 50 / 100 * +price;
    }
  };

  // 策略算法調用接口
  return function(algorithm, price) {
    // 如果算法存在，則掉用算法，否則返回false
    return strategy[algorithm] && strategy[algorithm](price);
  }
})();


var price = PriceStrategy('return50', '314.67');
console.log(price); // 464.67