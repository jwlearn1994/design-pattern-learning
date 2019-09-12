'use strict';


var A = function(id) {
  if (!(this instanceof A)) return new A(id);
  this.dom = document.getElementById(id);
  return this;
}


A.prototype = {

  on(event, fn) {
    this.dom.addEventListener(event, fn, false);
    return this;
  },

  attr(key, v) {
    if (v === void 0) {
      this.dom.getAttribute(key);
    } else {
      this.dom.setAttribute(key, v);
    }
    return this;
  },

  hide() {
    this.dom.style.display = 'none';
    return this;
  }
}


A('demo').on('click', function() {
  console.log('Clicked!');
}).attr('id', 'test').hide();