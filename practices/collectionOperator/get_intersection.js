'use strict';

function get_intersection(collection_a, collection_b) {
  //弹出两个集合的交集
  let result = [];
  // for (let i = 0; i < collection_b.length; i++) {
  //   let temp = collection_b[i];
  //   for (let j = 0; j < collection_a.length; j++) {
  //     if (temp === collection_a[j]) {
  //       result.push(temp);
  //     }
      
  //   }
    
  // }
  for (let i = 0; i < collection_b.length; i++) {
    if (collection_a.indexOf(collection_b[i]) >= 0) {
      result.push(collection_b[i]);
    }
  }
  return result ;
}

module.exports = get_intersection;
