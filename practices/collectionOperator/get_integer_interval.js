'use strict';

function get_integer_interval(number_a, number_b) {
  console.log("=============================");
  //在这里写入代码
  if (number_a < number_b) {
    return getIncreasedInterval(number_a, number_b);
  } else if (number_a > number_b) {
    return getDecreasedInterval(number_a, number_b);
  } else {
    return getTheNumber(number_a);
  }
}

function getIncreasedInterval(number_a, number_b) {
  var result = [];
  for (var i = number_a; i <= number_b; i++) {
    result.push(i);
  }
  return result;
}

function getDecreasedInterval(number_a, number_b) {
  var result = [];
  for (var i = number_a; i >= number_b; i--) {
    result.push(i);
  }
  return result;
}

function getTheNumber(number_a) {
  return [number_a];
}

module.exports = get_integer_interval;
