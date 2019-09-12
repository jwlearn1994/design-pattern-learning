'use strict';

var obj = {
  name: 'johnny'
};

function test() {
  console.log(this)
}

var a = test.bind(obj);

a(); // { name: 'johnny' }