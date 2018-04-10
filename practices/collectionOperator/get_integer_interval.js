'use strict';

function get_integer_interval(number_a, number_b) {
  let result =[];
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {  //根据给出的两个数字得到一个自增1的数字区间
        result.push(i);
    }
  }else if (number_a === number_b ) {//给定两个相同的数字得到只含此数字的数组
        result.push(number_a);
  }else{
    for (let j = number_a; j >= number_b; j--) {
      result.push(j);
    }

  }
  return result ;
}

module.exports = get_integer_interval;

