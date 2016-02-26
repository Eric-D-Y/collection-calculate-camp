'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  for (var i = 0; i < collection_b.length; i++) {
    if (collection_a.contains(collection_b[i])) {
      result.push(collection_b[i]);
    }
  }
  return result;
}

Array.prototype.contains = function(item){
  for (var i = 0; i < this.length; i++) {
    if (this[i] == item) {
      return true;
    }
  }
  return false;
}

module.exports = get_intersection;
