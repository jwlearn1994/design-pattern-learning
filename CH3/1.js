'use strict';

function createCoffee(type, water, milk, sugar) {
  return {
    type,
    water,
    milk,
    sugar,
    getType() {
      return this.type;
    }
  }
}

var coffee_1 = createCoffee('Espresso', 300, 0, 10);
var coffee_2 = createCoffee('latte', 200, 100, 0);

// 使用同一個工廠方法去創造具有相同結構的物件
// 注意！物件具有相同結構順序，能夠加速瀏覽器的內存優化，提高程式碼效能