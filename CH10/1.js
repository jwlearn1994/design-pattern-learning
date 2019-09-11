'use strict';

var spans = document.getElementsByTagName('span');


// 一般情況
spans[0].onmouseover = function() {
  this.style.color = 'red';
  this.style.background = '#ddd';
};
spans[0].onmouseout = function() {
  this.style.color = '#333';
  this.style.background = '#f5f5f5';
};


// 使用橋接模式
function changeColor(dom, color, bg) {
  dom.style.color = color;
  dom.style.background = bg;
}

spans[0].onmouseover = function() {
  changeColor(this, 'red', '#ddd');
}
spans[0].onmouseout = function() {
  changeColor(this, '#333', '#f5f5f5');
};

// 此模式常出現在重構的實作概念之中，將複雜重複的處理過程抽出並給予命名，提升易讀性與可維護性