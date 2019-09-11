'use strict';

/**
 * 寄生式繼承 繼承原型
 *
 * @param {class} subClass 子類
 * @param {class} superClass 父類
 */
function inheritPrototype(subClass, superClass) {
  var p = Object.create(superClass.prototype);
  p.constructor = subClass;
  subClass.prototype = p;
}


function SuperClass(id) {
  this.books = ['Javascript', 'html', 'css'];
  this.id = id;
}

SuperClass.prototype.showBooks = function() {
  console.log(this.books);
};



function SubClass(id, time){
  // 繼承父類公有屬性
  SuperClass.call(this, id);
  this.time = time;
}

inheritPrototype(SubClass, SuperClass);


// 此方法可以完美繼承父對象，將一些邏輯包裹起來，避免過程疏漏