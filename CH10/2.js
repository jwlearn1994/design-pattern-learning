'use strict';

// 多維變量類
// 運動單元
function Speed(x, y) {
  this.x = x;
  this.y = y;
}
Speed.prototype.run = function() {
  console.log('跑起来');
};

// 著色單元
function Color(cl) {
  this.color = cl;
}
Color.prototype.draw = function() {
  console.log('繪制色彩');
};


function Ball(x, y, c) {
  // 實現運動單元
  this.speed = new Speed(x, y);
  // 實現著色單元
  this.color = new Color(c);
};
Ball.prototype.init = function() {
  // 實現運動
  this.speed.run();
  // 實現著色
  this.color.draw();
};

var a = new Ball(1,2,'red');
a.init();

// 將變量等細分歸納整理在不同單元之中，減少局部變量混雜導致編程變得複雜而難以維護