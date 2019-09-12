'use strict';


// 實作狀態機
function StateMachine(states) {

  var _states = states;
  var _currentState = Object.create(null);

  // 行為控制類
  var Action = {
    changeState(...args) {
      // 重置當前狀態
      _currentState = Object.create(null);

      if (args.length) {
        args.forEach(state => {
          (_states[state]) && (_currentState[state] = true);
        });
      }
      return this;
    },
    goes() {
      console.log('觸發一次動作');

      for (let state in _currentState) {
        _states[state]();
      }
      return this;
    }
  }

  return {
    change: Action.changeState,
    goes: Action.goes
  }
}


// 實例化Mario 狀態
var MarioState = new StateMachine({
  jump() {
    console.log('跳躍')
  },
  move() {
    console.log('移動')
  },
  shoot() {
    console.log('射擊')
  }
});


MarioState.change('jump', 'shoot').goes().goes().change('move').goes();