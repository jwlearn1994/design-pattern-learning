'use strict';

/**
 * 裝飾者模式：
 * 此模式就是動態為對象增加職責，並且沒有真正改動到 Plane 物件本身，且我們不需要知道原來物件執行的結構內容
 * ，也一樣可以對其進行擴充，此作法可以任意套用多個裝飾物件，因裝飾者與被裝飾物件的介面是相同的，因此對使用者
 * 來說仍然是透明的。
 */


// 飛機物件
var Plane = function () { };

Plane.prototype.fire = function () {
  console.log('發射普通子彈');
};


// 飛彈裝飾器
var MissileDeco = function(plane) {
  this.plane = plane;
}

MissileDeco.prototype.fire = function() {
  this.plane.fire();
  console.log('發射飛彈');
}


// 原子彈裝飾器
var AtomDeco = function(plane) {
  this.plane = plane;
}

AtomDeco.prototype.fire = function() {
  this.plane.fire();
  console.log('發射原子彈');
}


// 建立新飛機
var plane = new Plane();
plane = new MissileDeco(plane);
plane = new AtomDeco(plane);

plane.fire();
// 發射普通子彈
// 發射飛彈
// 發射原子彈
