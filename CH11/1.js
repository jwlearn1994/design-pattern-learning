
/**
 * 組合模式：
 * 整合單一對象與組合對象的一致性，若對象有明顯層次結構並想統一調用時，就非常適合組合模式。
 */

'use strict';


// 子類
function FlightOrder() {}

FlightOrder.prototype.create = function () {
  console.log("flight order created");
}


// 子類
function HotelOrder() {}

HotelOrder.prototype.create = function () {
  console.log("hotel order created");
}


// 整體類
function TotalOrders() {
  this.orderList = [];
}

TotalOrders.prototype.addOrder = function (order) {
  this.orderList.push(order);
}

TotalOrders.prototype.create = function (order) {
  for (var i = 0, length = this.orderList.length; i < length; i++) {
    this.orderList[i].create();
  }
}


// 部分單獨調用
var flight = new FlightOrder();
flight.create();


// 整體調用
var orders = new TotalOrders();
orders.addOrder(new FlightOrder());
orders.addOrder(new HotelOrder());
orders.create();