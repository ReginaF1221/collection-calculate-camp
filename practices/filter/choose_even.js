'use strict';

function choose_even(collection) {

  //从collection中选出偶数
  let result = [];
  // for (let i = 0; i < collection.length; i++) {
  //   if (collection[i]%2 === 0) {
  //     result.push(collection[i]);
  //   }
  // }  
    //for of
    for (let item of collection) {
      if(item % 2 === 0)
        result.push(item);
  }
  return result;
}

module.exports = choose_even;
