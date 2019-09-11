'use strict';

var FatPerson = function() {
  this.intro = '體重過重的人';
}

FatPerson.prototype = {
  getSick() {
    console.log('糖尿病、高血壓、中風、腎結石、痛風');
  }
}


var SlimPerson = function() {
  this.intro = '苗條的人';
}

SlimPerson.prototype = {
  getSick() {
    console.log('貧血、骨折、內出血、低血壓、暈厥');
  }
}


var NormalPerson = function() {
  this.intro = '健康的正常人';
}

NormalPerson.prototype = {
  getSick() {
    console.log('無特殊好發疾病');
  }
}


var PersonFactory = function(type) {
  switch (type) {
    case 'fat':
      return new FatPerson();
    case 'slim':
      return new SlimPerson();
    default:
      return new NormalPerson();
  }
}



var johnny = new PersonFactory('fat');
console.log(johnny);

// 創建一個新的人，只需要記住人類工廠，調用並創建
// 壞處是違反物件導向的 開放-封閉原則，因為再擴充功能時必須修改到原始碼