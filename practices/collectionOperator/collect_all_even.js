'use strict';

function collect_all_even(collection) {
  //选出给定区间中所有的偶数
  let result = [];
  for (let index = 0; index < collection.length; index++) {
    if (collection[index]%2 === 0) {
      result.push(collection[index]);
    }
    
  }
  
  return result ;
}

module.exports = collect_all_even;
