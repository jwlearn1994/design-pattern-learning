'use strict';

var Waiter = function(fn) {
  var self = this;

  self.state = 0; // pending
  self.value = null;
  self.todos = [];

  self.resolve = function(value) {
    if (self.state !== 0) return;
    self.state = 1;
    self.value = value;
    self.run();
  }

  self.reject = function(reason) {
    if(self.state !== 0) return;
    self.state = 2;
    self.value = reason;
    self.run();
  }

  self.done = function(onFulfilled, onRejected) {
    let todo = new Promises(() => {});

    todo['onFulfilled'] = typeof onFulfilled === 'function' ? onFulfilled : null;
    todo['onRejected'] = typeof onRejected === 'function' ? onRejected : null;

    self.todos.push(todo);
    self.run();
    return todo;
  }

  self.run = function() {
    let callbackName, resolver;

    if (self.state === 0) return;
    if (self.state === 1) {
      callbackName = 'onFulfilled';
      resolver = 'resolve';
    }
    if (self.state === 2) {
      callbackName = 'onRejected';
      resolver = 'reject';
    }

    setTimeout(() => {
      self.todos.forEach(todo => {
        try {
          let cb = consumer[callbackName]; 
          if (cb)
            todo.resolve(cb(self.value));
          else
            todo[resolver](self.value);
        } catch (e){
          consumer.reject(e);
        }
      });
    });
  }
}


