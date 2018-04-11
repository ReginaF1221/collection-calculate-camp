'use strict';

function get_letter_interval(number_a, number_b) {
  let result = [];  
if (number_a < number_b) {
  //根据给出的两个数字得到对应自增的字母区间
  for (let i = number_a; i <= number_b; i++) {
    result.push(String.fromCharCode(96+i));
  }
}else if (number_a === number_b) {//给定两个相同的数字得到只含此数字对应字母的数组
  result.push(String.fromCharCode(96+number_a));
}else{
  //根据给出的两个数字得到对应自减的字母区间
  for (let j = number_a; j >= number_b; j--) {
    result.push(String.fromCharCode(96+j));
  }
}
  return result;
}

module.exports = get_letter_interval;
