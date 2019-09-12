'use strict';


// 實作檢驗抽象類
function ValueStrategy(strategy) {
  var _strategy = strategy;

  return {
    check(type, value) {
      value = value.trim();
      return _strategy[type] ? _strategy[type](value) : console.error('没有該類型檢測方法');
    },
    add(type, fn) {
      return _strategy[type] = fn;
    },
    remove(type) {
      return _strategy[type] = null;
    }
  }
}


// 實例化
var valueStrategy = new ValueStrategy({
  isObject(value) {
    return value !== null && typeof value === 'object';
  },
  isArray(value) {
    return Array.isArray(value);
  },
  isFn(value) {
    return typeof value === 'function'
  }
});

valueStrategy.add('over30', value => value > 30);
valueStrategy.add('onlyChinese', value => /^[\u4e00-\u9fa5]+$/.test(value));

