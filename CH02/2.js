'use strict';

var Book = function(title, time, type) {
  if (!(this instanceof Book)) return new Book(title, time, type);

  this.title = title;
  this.time = time;
  this.type = type;
};

var book = Book('Javascript', '2019', 'js');

console.log(book);