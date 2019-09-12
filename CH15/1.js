'use strict';

// 這是一個反面教材

// 以Mario為例子

var lastAction = '';

function changeMarry(action) {
  if (action == 'jump') {
    // 跳躍的動作
  } else if (action == 'move') {
    // 移動動作
  } else {
    // 默認情況
  }

  lastAction = action;
}

// 符合動做判斷的開銷是翻倍的

var lastAction1 = '';
var lastAction2 = '';

function changeMarry2(action1, action2) {
  if (action1 === 'shoot') {
    // 射擊動作
  } else if (action1 === 'move' && action2 === 'shoot') {
    // 移動中射擊
  } else if (action1 === 'jump' && action2 === 'shoot') {
    // 跳躍中射擊
  }

  // 保留上一個動作
  lastAction1 = action1 || '';
  lastAction2 = action2 || '';
}
