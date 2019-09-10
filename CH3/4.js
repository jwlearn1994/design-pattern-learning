'use strict';

// 抽象工廠
var SuperFactory = function(subClass, superType) {
  if (typeof SuperFactory[superType] !== 'function') throw new Error('未創建該抽象類');

  var p = Object.create(new SuperFactory[superType]());
  p.constructor = subClass;
  subClass.prototype = p;
}


// 抽象類
SuperFactory.Car = function() {
  this.type = 'car';
}

SuperFactory.Car.prototype = {
  getType() {
    console.log(this.type);
  },
  getPrice() {
    console.log(this.price);
  }
}


SuperFactory.Bus = function() {
  this.type = 'bus';
}

SuperFactory.Bus.prototype = {
  getType() {
    console.log(this.type);
  }
}


// 寶馬子類
var BMW = function(price, speed) {
  this.price = price;
  this.speed = speed;
}

// 繼承抽象基類 Car，創建新子類 BMW
SuperFactory(BMW, 'Car');

var a = new BMW(200, 2);
console.log(a);



// 抽象工廠模式好處是不需要一開始就定義好具體基類名稱，可以隨著開發進行，去創建共用的抽象基類，再經由抽象基類去創建具體子類
// 主要是解決了工廠模式的缺點