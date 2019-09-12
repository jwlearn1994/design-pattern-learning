'use strict';


// 簡單職責鍊模式
function IceCream(type) {
  if (type === 1) {
    console.log('一號餐')
  } else if (type === 2) {
    console.log('二號餐')
  } else if (type === 3) {
    console.log('三號餐')
  } else {
    console.log('餐點不存在');
  }
}



// 重構職責鍊拆分
var menu_1 = function(type) {
  if (type === 1) {
    console.log('一號餐')
  } else {
    menu_2(type);
  }
}

var menu_2 = function(type) {
  if (type === 2) {
    console.log('二號餐')
  } else {
    menu_3(type);
  }
}

var menu_3 = function(type) {
  if (type === 3) {
    console.log('三號餐')
  } else {
    console.log('餐點不存在')
  }
}

menu_1(3);


// 上方作法違反開放-封閉原則，傳遞順序僵硬，必須在內部進行修改程序執行順序