'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  if(number_a<number_b){
    return getIncreasedInterval(number_a,number_b);
  }else if(number_a>number_b){
    return getDecreasedInterval(number_a,number_b);
  }else{
    return getEvenNumber(number_a);
  }
}

module.exports = get_integer_interval_2;
