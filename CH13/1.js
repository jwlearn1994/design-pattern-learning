'use strict';

function inheritProto(subClass, superClass) {
  let p = Object.create(superClass.prototype);
  p.constructor = subClass;
  subClass.prototype = p;
}


// 實作模板方法
function DrinkPrepare() {
  this.addWater();
  if (this.needBoil) {
    this.boilWater();
  }
  this.addSugar();
  this.addFavor();
  if (this.needMilk) {
    this.addMilk();
  }
}

DrinkPrepare.prototype = {
  addWater() {
    console.log('加入飲用水');
  },
  needBoil: false,
  boilWater() {
    console.log('煮沸水');
  },
  addSugar() {
    console.log('加入糖');
  },
  addFavor() {
    throw new Error('此方法需重寫')
  },
  needMilk: true,
  addMilk() {
    throw new Error('此方法需重寫')
  }
}


// 實作子類
var Coffee = function() {
  DrinkPrepare.call(this);
}

inheritProto(Coffee, DrinkPrepare);

// 重寫方法
Coffee.prototype.addFavor = function() {
  console.log('加入咖啡豆');
}

Coffee.prototype.needMilk = false;


// 這個方法基本是使用繼承的概念，在父類中構建好共用的方法及大致骨架，並在後續子類創建時進行覆寫。