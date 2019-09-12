'use strict';


// 實作觀察者
var Observer = (function() {

  var __message = {};

  return {

    subscribe(type, fn) {
      if (!__message[type]) {
        return __message[type] = [fn];
      }
      __message[type].push(fn);
    },

    unsubscribe(type, fn) {
      if (!__message[type] || !Array.isArray(__message[type])) return;

      __message[type].forEach((v, i) => {
        (v === fn) && (__message[type].splice(i, 1));
      })
    },

    publish(type, args) {
      if (!__message[type]) return;

      let events = {
        type,
        args
      }

      __message[type].forEach(fn => {
        fn.call(this, events);
      })
    }

  }
})();


// 實際使用
Observer.subscribe('test', function(e) {
  console.log(e)
});

Observer.publish('test', { msg: '測試訊息' });