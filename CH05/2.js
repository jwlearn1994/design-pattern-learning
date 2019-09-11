'use strict';

var Config = (function() {
  // 私有变量
  var config = {
    MAX_NUM: 100,
    MIN_NUM: 1,
    COUNT: 1000
  };

  // 返回取值器对象
  return {
    // 取值器方法
    get: function(name) {
      return config[name] ? config[name] : false;
    }
  }
})();

var count = Config.get('COUNT');
console.log(count);



// 可以封裝如下
var static = config => {
  return (function() {
    // 返回取值器对象
    return {
      // 取值器方法
      get: function(name) {
        return config[name] ? config[name] : false;
      }
    }
  })();
}

var count = static({
  name: 'Johnny',
  age: 30
});
console.log(count.get('name'));