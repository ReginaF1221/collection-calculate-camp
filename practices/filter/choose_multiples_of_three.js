'use strict';

function choose_multiples_of_three(collection) {

  //从collection中选出3的倍数
  let result = [];
  for (let item of collection) {
    if (item % 3 === 0) {
      result.push(item);
    }
    
  }
  return result;
}

module.exports = choose_multiples_of_three;
