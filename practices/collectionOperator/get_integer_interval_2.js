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

function getEvenNumber(number_a){
  if(number_a%2==0){
    return [number_a];
  }else{
    return [];
  }
}

function getDecreasedInterval(number_a,number_b){
  var result=[];
  for(var i=number_a;i>=number_b;i--){
    if(i%2==0){
      result.push(i);
    }
  }
  return result;
}

function getIncreasedInterval(number_a,number_b){
  var result=[];
  for(var i=number_a;i<=number_b;i++){
    if(i%2==0){
      result.push(i);
    }
  }
  return result;
}

module.exports = get_integer_interval_2;
