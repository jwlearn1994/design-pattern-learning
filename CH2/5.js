'use strict';


function SuperClass(id) {
  this.books = ['Javascript', 'html', 'css'];
  this.id = id;
}

SuperClass.prototype.showBooks = function() {
  console.log(this.books);
};



function SubClass(id){
  // 繼承父類公有屬性
  SuperClass.call(this, id);
}

// 補足繼承原型方法
SubClass.prototype = Object.create(SuperClass.prototype);

// 復原 constructor
SubClass.prototype.constructor = SubClass;


// 此方法可以完美繼承父對象，但手動程序過於繁雜，容易在處理過程疏漏