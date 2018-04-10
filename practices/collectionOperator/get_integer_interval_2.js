'use strict';

function get_integer_interval_2(number_a, number_b) {
  let result = [];
  if (number_a < number_b) {//根据给出的两个数字得到自增的偶数区间
    for (let i = number_a; i <= number_b; i++) {
      if (i%2 === 0) {
        result.push(i);
      }  
    }
  }else if (number_a === number_b) { //给定两个相同的偶数得到只含此数字的数组 
    let number = number_a ; 
    if (number%2 === 0) {
      let ArrayNumber = [];
      ArrayNumber.push(number);
      result = ArrayNumber;}else{
        return result;
      }
  }else{//根据给出的两个数字得到自减的偶数区间
    for (let j = number_a; j >= number_b; j--) {
      if (j%2 === 0) {
        result.push(j);
      }
      
    }  
  }
  

return result ;
}

module.exports = get_integer_interval_2;
