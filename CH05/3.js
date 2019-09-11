'use strict';

var LazySingle = (function() {

  var _instance = null;

  // 單例
  function Single() {
    return {
      publicMethod: function() {},
      publicProperty: '1.0'
    }
  }

  return function() {

    if (!_instance) {
      _instance = Single();
    }

    // 返回單例
    return _instance;
  }
})();


console.log( LazySingle().publicProperty ); // 1.0
console.log( LazySingle() === LazySingle() ); // true

// 此方法可以延遲單例的構建時機，用於一些需要延遲創立的場合，且單例本身只會出現一個
